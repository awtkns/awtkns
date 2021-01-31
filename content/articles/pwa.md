---
title: Multiple PWA's In the same nuxt app
date: 2020-5-6
tags:
    - Nuxt
    - Mobile
hero: https://images.unsplash.com/photo-1507525428034-b723cf961d3e
---
```
npm install @nuxt/pwa
```

Make sure to disable auto manifest generation, we also don't want to generate our own icons.  UNSURE ABOUT META
```js
export default {
    modules: [ '@nuxtjs/pwa' ],

    // Here is the trick
    pwa: {
        manifest: false,
        icon: false,
        Meta: false
      },
}
```
now we are going to create our manifests by can hand and place them in the static folder
```json
{
  "name": "App 1",
  "short_name": "Pwa number one",
  "description": "The first app in my guide",
  "icons": [
    {
      "src": "/manifests/phsa_icons/icon_64.238c63.png",
      "sizes": "64x64",
      "type": "image/png"
    },
    {
      "src": "/manifests/phsa_icons/icon_120.238c63.png",
      "sizes": "120x120",
      "type": "image/png"
    },
    {
      "src": "/manifests/phsa_icons/icon_144.238c63.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "/manifests/phsa_icons/icon_152.238c63.png",
      "sizes": "152x152",
      "type": "image/png"
    },
    {
      "src": "/manifests/phsa_icons/icon_192.238c63.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/manifests/phsa_icons/icon_384.238c63.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "/manifests/phsa_icons/icon_512.238c63.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": "/app1?standalone=true",
  "display": "Standalone",
  "background_color": "#ffffff",
  "theme_color": "#fff",
  "lang": "en"
}
```
Doo the same thing for app number two

**Note** Make sure you edit the start url

Now our static folder should look like this
```
Static
   │   favicon.ico
   │   sw.js
   └───manifests
       │   PHSA_manifest.json
       │   VCH_manifest.json
       ├───app1_icons
       │       icon_120.238c63.png
       │       icon_144.238c63.png
       │       icon_152.238c63.png
       │       icon_192.238c63.png
       │       icon_384.238c63.png
       │       icon_512.238c63.png
       │       icon_64.238c63.png
       └───app2_icons
               icon-128x128.png
               icon-144x144.png
               icon-152x152.png
               icon-192x192.png
               icon-384x384.png
               icon-512x512.png
               icon-72x72.png
               icon-96x96.png
```
Now add this to the head of the page.
```js
export default {
    head() {
      return { link: [{ rel: 'manifest', href: '/manifests/app1_manifest.json' }] }
    },
    ...
}
```
If we wanted to add a dyanmic manifest based on the route, you can replace the link with:
```js
export default {
    head() {
      return { link: [{ rel: 'manifest', href: `/manifests/${this.myroute}_manifest.json` }] }
    },
    ...
}
```
And voila!
Donso
