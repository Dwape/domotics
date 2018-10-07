import datetime

def parse(values):
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
    json = "["
    for value in values:
        json += parse(value) + ","
    json = json[:-1] + "]"
    return json

# Returns the value of each measurement in a list
# The first value is the actual measurement
# The second value can be either -1, 0 or 1
# 0 means the measurement is within the accepted range
# 1 means the value is too high
# -1 means the value is too low
def parseLatest(values, acceptable, weather):
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
    json = '{'
    json = json + '"temp_max": ' + str(temp_max) + ','
    json = json + '"temp_min": ' + str(temp_min) + ','
    json = json + '"hum_max": ' + str(hum_max) + ','
    json = json + '"hum_min": ' + str(hum_min) + '}'
    return json
