from flask import Flask, Response
app = Flask(__name__)


@app.route('/api')
def catch_all():
    return Response("<h1>Flask</h1><p>You visited: /%s</p>", mimetype="text/html")
