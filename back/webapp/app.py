from flask import Flask
from flask import request
from flask import session
import requests

from database import get_latest_values
from database import connect
from jsonparser import parseList
from jsonparser import parseLatest
from weather import get_weather_values
from valueChecker import check_values
from database import get_range_values

app = Flask(__name__)

city = 'Pilar'

@app.route("/")
def home():
    return "Welcome to domotics!"

# The JSON returned has a list of two elements for all of the values measured.
# The first values is the actual measurement, in its corresponding unit
# The sencond values can either be 0 or 1
# If the values is 0, then the measurement is within the acceptable range and no changes should be made
# If the values is 1, then the user should be told to ventilate his house.
@app.route("/latest")
def values():
    #connect()
    weather = get_weather_values(city)
    values = get_latest_values()

    # Remove the date from the values as it is not used when comparing values
    acceptable = check_values(values[1:], weather, session['temp_max'], session['temp_min'], session['hum_max'], session['hum_min'])

    json = parseLatest(values, acceptable)
    return json

@app.route("/changePreferences", methods=['POST'])
def changePreferences():
    if request.method == 'POST':
        # Check if it gets the json correctly.
        json = request.get_json()
        # Check if this way of reading the values of the json work.s
        session['temp_max'] = json['temp_max']
        session['temp_min'] = json['temp_min']
        session['hum_max'] = json['hum_max']
        session['hum_min'] = json['hum_min']
        return "New preferences saved successfully"

@app.route("/valuesRange")
def valuesRange():
    #connect()
    fromDate = request.args.get('from')
    toDate = request.args.get('to')
    results = get_range_values(fromDate, toDate)
    return parseList(results)

# We should check if the connect can be done here so that we don't have to connect to the database everytime we wish to request a value.
if __name__ == "__main__":
    connect() # Check if it works and it makes sense to do this here.
    app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'
    app.run(host='0.0.0.0', port=80, debug=True)
    #session['city'] = "Pilar"
    session['temp_max'] = 28
    session['temp_min'] = 22
    session['hum_max'] = 50
    session['hum_min'] = 5