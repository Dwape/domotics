import datetime

def parse(values):
    '''
    Parses the value list into a json object.

    :param values: str[]
	    A list of seven elements with all the values to be parsed.
	    The elements represent (in this order): date, humidity, temperature, LPG amount, CO amount, Smoke, light.

    :return: str

    A json String with all the values.

    A json returned from this method would look like this:
    {
        "datetime": "2008-11-11 13:23:44",
        "humidity": 45,
        "temperature": 24,
        "LPG": 0,
        "CO": 0,
        "smoke": 0,
        "light": 255
    }

    '''
    date = values[0].strftime("%Y-%m-%d %H:%M:%S")
    json = "{\"datetime\" : \"" + date + "\","
    json = json + "\"humidity\" : " + str(values[1]) + ","
    json = json + "\"temperature\" : " + str(values[2]) + ","
    json = json + "\"LPG\" : " + str(values[3]) + ","
    json = json + "\"CO\" : " + str(values[4]) + ","
    json = json + "\"smoke\" : " + str(values[5]) + ","
    json = json + "\"light\" : " + str(values[6]) + "}"
    return json

def parseList(values):
    '''
    Parses several values passed as a list into a json.

    :param values: str[[]]
    The list to be parsed into a json.
    The list can be of any length.
    Each value in values must be a str[] to be used in the parse(values) function.

    :return: str

    A json list with several json objects.

    A json returned from this method would look like this:
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
    json = "["
    for value in values:
        json += parse(value) + ","
    json = json[:-1] + "]"
    return json

def parseLatest(values, acceptable, weather):
    '''
    Parses the latest values

    :param values: float[]
        The values measured by all the sensors and the date.
        The elements represent (in this order): date, humidity, temperature, LPG amount, CO amount, Smoke, light.

    :param acceptable: int[]
        A list with six integers that represent whether the values are acceptable, too high or too low.
        The elements represent (in this order): humidity, temperature, LPG amount, CO amount, Smoke, light.
        -1 the value is too low.
        1 the value is too high.
        0 the value is within the acceptable range.

    :param weather: float[]
        A list with three elements representing weather values.
        The elements represent (in this order): humidity, temperature, pressure.

    :return: str
        A json string with all the latest values.

        Some values are a list.
        In this case the first value represents the actual value of the measurement and the second value indicates
        whether the value is too low, too high or within range.

        The values that aren't a list are simply the measurement value.

        A json returned from this method would look like this:
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
    date = values[0].strftime("%Y-%m-%d %H:%M:%S")
    json = "{\"datetime\" : \"" + date + "\","
    json = json + "\"humidity\" : [" + str(values[1]) + ", " + str(acceptable[0]) + "],"
    json = json + "\"temperature\" : [" + str(values[2]) + ", " + str(acceptable[1]) + "],"
    json = json + "\"LPG\" : [" + str(values[3]) + ", " + str(acceptable[2]) + "],"
    json = json + "\"CO\" : [" + str(values[4]) + ", " + str(acceptable[3]) + "],"
    json = json + "\"smoke\" : [" + str(values[5]) + ", " + str(acceptable[4]) + "],"
    json = json + "\"light\" : [" + str(values[6]) + ", " + str(acceptable[5]) + "],"
    json = json + "\"current_hum\" : " + str(weather[0]) + ","
    json = json + "\"current_temp\" : " + str(weather[1]) + ","
    json = json + "\"pressure\" : " + str(weather[2]) + "}"
    return json

def parsePreferences(temp_max, temp_min, hum_max, hum_min):
    '''
    Parses preference values into a json object.

    :param temp_max: float
        The maximum temperature accepted by the user.

    :param temp_min: float
        The minimum temperature accepted by the user.

    :param hum_max: float
        The maximum humidity accepted by the user.

    :param hum_min: float
        The minimum humidity accepted by the user.

    :return:

    A json string.

    A json returned from this method would look like this:
    {
        "temp_max": "28",
        "temp_min": "25",
        "hum_max": "70",
        "hum_min": "30"
    }
    '''
    json = '{'
    json = json + '"temp_max": ' + str(temp_max) + ','
    json = json + '"temp_min": ' + str(temp_min) + ','
    json = json + '"hum_max": ' + str(hum_max) + ','
    json = json + '"hum_min": ' + str(hum_min) + '}'
    return json
