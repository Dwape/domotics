import time
from humtemp import get_humidity_temperature
from arduinoSerial import get_gas_light
import requests
#we need to check serial to see if it saves older values or if they are overwritten.
#in case all values are saved, we should change the frequency in the arduino code.

'''
Logs values into the database.
Sleeps so that measurements are saved every 30 seconds
'''

previous_values = None

def save(values):
    data = [
        {
            'type': 'humidity',
            'value': values[0]
        },
        {
            'type': 'temperature',
            'value': values[1]
        },
        {
            'type': 'LPG',
            'value': values[2]
        },
        {
            'type': 'CO',
            'value': values[3]
        },
        {
            'type': 'smoke',
            'value': values[4]
        },
        {
            'type': 'light',
            'value': values[5]
        }
    ]
    requests.post('http://localhost:5000/sensor/measurement', json=data.encode('utf-8')) # do we need authentication?

while True:
    try:
        values = get_humidity_temperature() + get_gas_light()
        if values[0] == None or values[1] == None:
            if previous_values != None:
                values[0] = previous_values[0]
                values[1] = previous_values[1]
                #save_values(values)
                save(values) # using HTTP
                print("Values saved")
                previous_values = values
        else:
            previous_values = values
            #save_values(values)
            save(values) # using HTTP
            print("Values saved")
        time.sleep(30)
    except RuntimeError:
        close_connection()
