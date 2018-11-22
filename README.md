# domotics

## Running

### React app

Front end of the application

```REACT_APP_ARG="localhost" npm start``` if running the back end locally.

```REACT_APP_ARG="[IP]" npm start``` where [IP] is the IP of the computer where the back end is running.

### Flask app

Back end of the application

```python app.py```

### Measurements

Measurements are sent to the back end as a POST HTTP request to ```http://[IP]:5000/sensor/measurement``` where [IP] is the IP of the computer where the flask app is running.

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

#### Python dependencies

[flask](http://flask.pocoo.org/docs/1.0/)  
[flask_cors](https://flask-cors.readthedocs.io/en/latest/)  
[requests](http://docs.python-requests.org/en/master/)  
[serial](https://pythonhosted.org/pyserial/)  
[Adafruit_DHT](https://github.com/adafruit/Adafruit_Python_DHT)  
[MySQLdb](https://mysqlclient.readthedocs.io/user_guide.html#mysqldb)  
