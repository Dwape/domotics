# domotics

## Running

### react app

Front end of the application

```REACT_APP_ARG="localhost" npm start``` if running the back end locally.

```REACT_APP_ARG="[IP]" npm start``` where [IP] is the IP of the machine where the back end is running.

### flask app

Back end of the application

```python app.py```

### logger

Logs the values read by the sensors in a MySQL batabase

```python logger.py &``` to run as a background process

#### Python dependencies

[flask](http://flask.pocoo.org/docs/1.0/)  
[flask_cors](https://flask-cors.readthedocs.io/en/latest/)  
[requests](http://docs.python-requests.org/en/master/)  
[serial](https://pythonhosted.org/pyserial/)  
[Adafruit_DHT](https://github.com/adafruit/Adafruit_Python_DHT)  
[MySQLdb](https://mysqlclient.readthedocs.io/user_guide.html#mysqldb)  
