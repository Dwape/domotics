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
