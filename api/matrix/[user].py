import requests

from flask import Flask, jsonify
from flask_cors import CORS
from bs4 import BeautifulSoup

app = Flask(__name__)
CORS = CORS(app)
URL = 'https://github.com/users/%s/contributions'


def parse_tag(tag, i) -> dict:
    attrs = tag.attrs

    return {
      'date': attrs['data-date'],
      'count': attrs['data-count'],
      'color': attrs['fill'],
      'day_of_week': i % 7,

      'x': attrs['data-date'],
      'y': i % 7,
      'd': attrs['data-date'],
    }


@app.route('/api/matrix/<user>')
def matrix(user):
    resp = requests.get(URL % user)
    soup = BeautifulSoup(resp.text, 'html.parser')

    header = soup.find('div', class_="js-calendar-graph").attrs
    data = {
        'date_from': header['data-from'],
        'date_to': header['data-to'],
        'graph_url': header['data-graph-url'],
        'total_commits': int(soup.find('h2').text.split()[0].replace(',', '')),
        'days': [parse_tag(tag, i) for i, tag in enumerate(soup.find_all('rect', class_='day'))]
    }

    return jsonify(data), 200


if __name__ == '__main__':
    app.run()
