import requests

from flask import Flask, jsonify
from bs4 import BeautifulSoup

app = Flask(__name__)
URL = 'https://github.com/users/%s/contributions'


def parse_tag(tag) -> dict:
    attrs = tag.attrs

    return {
        'date': attrs['data-date'],
        'count': attrs['data-count'],
        'color': attrs['fill']
    }


@app.route('/api')
def index():
    return 'api', 200


@app.route('/github/matrix/<user>')
def matrix(user):
    resp = requests.get(URL % user)
    soup = BeautifulSoup(resp.text, 'html.parser')

    header = soup.find('div', class_="js-calendar-graph").attrs
    print(soup.find('h2').text)
    data = {
        'date_from': header['data-from'],
        'date_to': header['data-to'],
        'graph_url': header['data-graph-url'],
        'total_commits': int(soup.find('h2').text.split()[0].replace(',', '')),
        'days': [parse_tag(tag) for tag in soup.find_all('rect', class_='day')]
    }

    return jsonify(data)
