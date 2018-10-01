from flask import Flask
from database import get_latest_values
from database import connect

app = Flask(__name__)

@app.route("/")
def hello():
    connect()
    values = get_latest_values()[0]
    date = values[0].strftime("%Y-%m-%d %H:%M:%S")
    return date

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80, debug=True)