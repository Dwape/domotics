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
    json = json + "\"humidity\" =" + values[1] + ","
    json = json + "\"temperature\" =" + values[2] + ","
    json = json + "\"LPG\" =" + values[3] + ","
    json = json + "\"CO\" =" + values[4] + ","
    json = json + "\"smoke\" =" + values[5] + ","
    json = json + "\"light\" =" + values[6] + "}"
    return json

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80, debug=True)