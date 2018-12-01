# Domotics

## Table of contents

* [Running](#running)
* [Measurements](#measurements)

## Running

### React app

Front end of the application.

```REACT_APP_ARG="localhost" npm start``` if running the back end locally.

```REACT_APP_ARG="[IP]" npm start``` where [IP] is the IP of the computer where the back end is running.

### Flask app

Back end of the application.  
Uses pipenv to manage dependencies.

Note that pipenv is configured to run Python 3.5

**Installing pipenv**

```pip install pipenv```

**Setting up pipenv**
```
cd webapp
pipenv install
```
**Running the app**

```pipenv run python app.py```

#### Python dependencies

Dependencies should be installed automatically if running with pipenv.  
A list of the dependencies is included in case a problem is encountered with one of them.

[flask](http://flask.pocoo.org/docs/1.0/)  
[flask_cors](https://flask-cors.readthedocs.io/en/latest/)  
[requests](http://docs.python-requests.org/en/master/)  
[serial](https://pythonhosted.org/pyserial/)  
[Adafruit_DHT](https://github.com/adafruit/Adafruit_Python_DHT)   
[PyMySQL](https://github.com/PyMySQL/PyMySQL)

## Measurements

Measurements are sent to the back end as a HTTP POST request to ```http://[IP]:5000/sensor/measurement``` where [IP] is the IP of the computer where the flask app is running.

The body of the request must be a Json with the following format:
```
[{
  "type": "temperature",
  "value": 24.5
  },
  {
  "type": "humidity",
  "value": 42
  }]
  ```
  
After being received, measurements are temporarily stored in a buffer. When a measurement arrives of a type for which there already is a measurement in the buffer, all the values in the buffer are stored in the database and the buffer is emptied. This allows values to be saved even if one or more sensors are unresponsive and therefore not sending data.  
Note that this behavior can cause NULL values to be saved in the database.
