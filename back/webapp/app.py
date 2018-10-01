from flask import Flask
import requests
from database import get_latest_values
from database import connect
from jsonparser import parse

app = Flask(__name__)
user_temp_max = 28
user_temp_min = 22
user_hum_max = 5
user_hum_min = 50

@app.route("/")
def values():

    stuff = requests.get('hapi.openweathermap.org/data/2.5/weather?q=London').content
    print stuff

    connect()
    values = get_latest_values()
    json = parse(values)
    return json

@app.route("/confTemp", methods=['POST'])
def confTemp():
    if request.method == 'POST':
        json = request.get_json()
        user_temp_max = json['temp_max']
        user_temp_min = json['temp_min']
        user_hum_max = json['hum_max']
        user_hum_max = json['hum_min']

@app.route("/valuesRange")
def valuesRange():
    connect()
    fromDate = request.args.get('from')
    toDate = request.args.get('to')
    get_range_values(fromDate, toDate)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80, debug=True)