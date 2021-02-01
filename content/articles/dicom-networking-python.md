---
title: DICOM Networking in Python
date: 2020-5-6
author: Adam Watkins
hero: https://images.unsplash.com/photo-1528158222524-d4d912d2e208
tags:
 - python
 - DICOM
 - research
---

## Background

At [Qurit](https://qurit.ca), my research relies heavily on creating automated medical images processing pipelines with 
from PET, MRI, and CT scanners.  These images, and the majority of all clinical images, come in the DICOM file format.
A somewhat underrated yet needed part of the research 
process is the automation of image retrieval and anonymization.  This is an important step before clinical images can be 
used to train and test our machine learning models.  Using DICOM's underlying networking protocol, imaging pipelines can 
be created to automate the process of image acquisition, anonymization, and analysis.

![DICOM PROTOCOL](https://rahmimlab.files.wordpress.com/2020/07/dicom1.png)

Under the hood, DICOM is not only a file format (.dcm) but also a fully featured, and admittedly somewhat archaic, 
networking protocol. The DICOM networking protocol resides just above the TCP layer in the OSI model.  Built upon TCP/IP, 
the DICOM protocol relies upon making a handshake before communication between two remotes can begin.  In DICOM this is 
called creating an association.

## Preforming a C-Echo
 
This article and all future articles will be using *pynetdicom* and  *pydicom*. Pynetdicom handles the low level 
networking implementation whilst pydiom will allow us to read, write, query DICOM files. 

First we are going to create some helper classes.
 
 ```python
from dataclasses import dataclass

from pynetdicom.sop_class import VerificationSOPClass
from pynetdicom import AE 


@dataclass
class Modality:
    addr: str
    port: int
    ae_title: str

class Association:
    def __init__(self, modality, context):
        self.modality = modality
        self.context = context

    def __enter__(self):
        ae = AE()
        ae.add_requested_context(self.context)
        self._association = ae.associate(**vars(self.modality))
        return self._association

    def __exit__(self, *args):
        self._association.release()
        self._association = None
```

Above, we are first creating a modality class to keep all our modalities organized.  For our purposes, a modality is a 
remote that we will be connecting with.  Each remote has an address, a port, and an application entity (AE) title.

Second, and more importantly, we are creating an association class to act as a context manger; helping to create and 
release associations.  This is accomplished by implementing both dunder enter and dunder exit.  Even though more complex 
initially, I believe using a context manger is good practice as it ensures that releasing associations will never be 
forgotten (even under error conditions). As an added bonus, it will make all future code shorter, cleaner and frankly 
more pythonic.

```python
if __name__ == '__main__':
    modality = Modality('127.0.0.1', 104, 'DISCOVERY')

    with Association(modality, VerificationSOPClass) as assoc:
        resp = assoc.send_c_echo()
        print(f'Modality responded with status: {resp.Status}')
```

Here we are finally testing our connection with the modality that we are trying to reach. If all goes well, the modality 
should respond with the successful status code 0x0000. Notice how by using context management, we are able to release 
the association automatically.

If we were to forgo using automatic context management, the implementation would look like the code below.  It would be 
imperative to ensure that association is always released to prevent tying up valuable server resources.

```python
if __name__ == '__main__':
    ae = AE()
    ae.add_requested_context(VerificationSOPClass)
    assoc = ae.associate('127.0.0.1', 104, ae_title='DISCOVERY')
    
    try:
        resp = assoc.send_c_echo()
        print(f'Modality responded with status: {resp.Status}')
        assoc.release()
    except Exception as e:
        assoc.release()
        raise e
```
