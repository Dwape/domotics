from flask import Flask
from database import get_latest_values
from database import connect

app = Flask(__name__)

@app.route("/")
def hello():
    connect()
    values = get_latest_values()[0]
    date = values[0].strftime("%Y-%m-%d %H:%M:%S")
    json = "{\"datetime\" =" + date + ","
    json = json + "\"humidity\" =" + str(values[1]) + ","
    json = json + "\"temperature\" =" + str(values[2]) + ","
    json = json + "\"LPG\" =" + str(values[3]) + ","
    json = json + "\"CO\" =" + str(values[4]) + ","
    json = json + "\"smoke\" =" + str(values[5]) + ","
    json = json + "\"light\" =" + str(values[6]) + "}"
    return json

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80, debug=True)