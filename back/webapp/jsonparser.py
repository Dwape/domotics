#def parse(values):
#    date = values[0].strftime("%Y-%m-%d %H:%M:%S")
#    json = "{\"datetime\" : " + date + ","
#    json = json + "\"humidity\" : " + str(values[1]) + ","
#    json = json + "\"temperature\" : " + str(values[2]) + ","
#    json = json + "\"LPG\" : " + str(values[3]) + ","
#    json = json + "\"CO\" : " + str(values[4]) + ","
#    json = json + "\"smoke\" : " + str(values[5]) + ","
#    json = json + "\"light\" : " + str(values[6]) + "}"
#    return json

import datetime

def parse(values, acceptable):
    date = values[0].strftime("%Y-%m-%d %H:%M:%S")
    json = "{\"datetime\" : " + date + ","
    json = json + "\"humidity\" : [" + str(values[1]) + ", " + str(acceptable[0]) + "],"
    json = json + "\"temperature\" : [" + str(values[2]) + ", " + str(acceptable[1]) + "],"
    json = json + "\"LPG\" : [" + str(values[3]) + ", " + str(acceptable[2]) + "],"
    json = json + "\"CO\" : [" + str(values[4]) + ", " + str(acceptable[3]) + "],"
    json = json + "\"smoke\" : [" + str(values[5]) + ", " + str(acceptable[4]) + "],"
    json = json + "\"light\" : [" + str(values[6]) + ", " + str(acceptable[5]) + "]}"
    return json