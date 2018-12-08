#from write_db import *
from read_db import *

#connect()

measurements = [None] * 6
#saved = 0

def logValue(sensor_type, value):
    switcher = {
        "humidity": 0,
        "temperature": 1,
        "LPG": 2,
        "CO": 3,
        "smoke": 4,
        "light": 5,
    }
    index = switcher.get(sensor_type, -1)
    if (index > -1):
        saveValue(index, value)

#def saveValue(index, value):
    #if (measurements[index] == None):
        #measurements[index] = value
        #if (saved == 6):
            #save_values(measurements)
            #reset()
    #else:
        #save_values(measurements)
        #reset()
        #measurements[index] = value


# Could be changed so that only complete measurements are saved (although that could have some problems if a sensor doesn't send data).
def saveValue(index, value):
    '''
    Adds the latest value to the measurements buffer.
    If there was already a value for that type of sensor in the buffer, all measurements are saved in the database and the buffer is reset.
    This behavior allows the logging of values even if one of more sensors are not sending the data correctly.
    '''
    if (measurements[index] != None):
        save_values(measurements)
        reset()
    measurements[index] = value


def reset():
    global measurements
    measurements = [None] * 6
    #saved = 0
