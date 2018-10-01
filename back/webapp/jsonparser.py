def parse(values):
    date = values[0].strftime("%Y-%m-%d %H:%M:%S")
    json = "{\"datetime\" : " + date + ","
    json = json + "\"humidity\" : " + str(values[1]) + ","
    json = json + "\"temperature\" : " + str(values[2]) + ","
    json = json + "\"LPG\" : " + str(values[3]) + ","
    json = json + "\"CO\" : " + str(values[4]) + ","
    json = json + "\"smoke\" : " + str(values[5]) + ","
    json = json + "\"light\" : " + str(values[6]) + "}"
    return json