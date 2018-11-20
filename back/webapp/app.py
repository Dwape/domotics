from flask import Flask
from flask import request
from flask import session
from flask import flash #Check
from flask import Response
from flask_cors import CORS, cross_origin
import requests

from read_db import get_latest_values
from read_db import connect
from jsonparser import parseList
from jsonparser import parseLatest
from jsonparser import parsePreferences
from weather import get_weather_values
from valueChecker import check_values
from read_db import get_range_values

app = Flask(__name__)

cors = CORS(app, supports_credentials=True) #May need to remove the supports_credential parameter
app.config['CORS_HEADERS'] = 'Content-Type'

city = 'Pilar'
temp_max = float(28.0)
temp_min = float(22.0)
hum_max = float(50.0)
hum_min = float(5.0)

@app.route("/")
def home():
    '''
    Default route of the web application.
    '''
    return "Welcome to domotics!"

# The JSON returned has a list of two elements for all of the values measured.
# The first values is the actual measurement, in its corresponding unit
# The sencond values can either be 0 or 1
# If the values is 0, then the measurement is within the acceptable range and no changes should be made
# If the values is 1, then the user should be told to ventilate his house.
@app.route("/api/latest")
def values():
    '''
    Returns a response with the latest values in the database as a json.

    A json returned sent to this method would look like this:
    {
        "datetime": "2008-11-11 13:23:44",
        "humidity": [45, 0],
        "temperature": [24, -1],
        "LPG": [0, 0],
        "CO": [0, 0],
        "smoke": [0, 0],
        "light": [255, 0],
        "current_hum": 23,
        "current_temp": 26,
        "pressure": 100
    }
    '''
    #connect()
    weather = get_weather_values(city)
    values = get_latest_values()

    # Remove the date from the values as it is not used when comparing values
    if 'temp_max' in session:
        acceptable = check_values(values[1:], weather, session['temp_max'], session['temp_min'], session['hum_max'], session['hum_min'])
    else :
        acceptable = check_values(values[1:], weather, temp_max, temp_min, hum_max, hum_min)

    json = parseLatest(values, acceptable, weather)
    return Response(json, mimetype='application/json')
    #return json

@app.route("/api/changePreferences", methods=['POST'])
def changePreferences():
    '''
    Changes the preferences for a user.

    A json returned sent to this method would look like this:
    {
        "temp_max": "28",
        "temp_min": "25",
        "hum_max": "70",
        "hum_min": "30"
    }
    '''
    if request.method == 'POST':
        # Check if it gets the json correctly.
        json = request.get_json()
        # Check if this way of reading the values of the json work.s
        session['temp_max'] = json['temp_max']
        session['temp_min'] = json['temp_min']
        session['hum_max'] = json['hum_max']
        session['hum_min'] = json['hum_min']
        #session.modified = True
        result = parsePreferences(session['temp_max'], session['temp_min'], session['hum_max'], session['hum_min'])
        return Response(result, mimetype='application/json')

@app.route("/api/getPreferences")
def getPreferences():
    '''
    Returns a json with the current user preferences.

    A json returned sent to this method would look like this:
    {
        "temp_max": "28",
        "temp_min": "25",
        "hum_max": "70",
        "hum_min": "30"
    }
    '''
    if 'temp_max' in session:
        result = parsePreferences(session['temp_max'], session['temp_min'], session['hum_max'], session['hum_min'])
    else:
        result = parsePreferences(temp_max, temp_min, hum_max, hum_min)
    return Response(result, mimetype='application/json')

@app.route("/api/valuesRange")
def valuesRange():
    '''
    Returns values between to dates.

    Two parameters are required in the url:
    form: The starting date
    to: The end date

    The json returned from this method looks like this:
    [{
        "datetime": "2008-11-11 13:23:44",
        "humidity": 45,
        "temperature": 24,
        "LPG": 0,
        "CO": 0,
        "smoke": 0,
        "light": 255,
        "current_hum": 23,
        "current_temp": 26,
        "pressure": 100
    },
    {
        "datetime": "2008-11-11 13:23:44",
        "humidity": 46,
        "temperature": 25,
        "LPG": 0,
        "CO": 0,
        "smoke": 0,
        "light": 234,
        "current_hum": 22,
        "current_temp": 25,
        "pressure": 97
    }]
    '''
    #connect()
    fromDate = request.args.get('from')
    toDate = request.args.get('to')
    results = get_range_values(fromDate, toDate)
    return Response(parseList(results), mimetype='application/json')
    #return parseList(results)

# We should check if the connect can be done here so that we don't have to connect to the database everytime we wish to request a value.
if __name__ == "__main__":
    connect() # Check if it works and it makes sense to do this here.
    app.secret_key = 'key'
    app.run(host='0.0.0.0', port=5000, debug=True)
    #session['city'] = "Pilar"
    session['temp_max'] = float(28.0)
    session['temp_min'] = float(22.0)
    session['hum_max'] = float(50.0)
    session['hum_min'] = float(5.0)
    #session.modified = True