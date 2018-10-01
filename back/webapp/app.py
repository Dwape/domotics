from flask import Flask
from database import get_latest_values
from database import connect

app = Flask(__name__)

@app.route("/")
def hello():
    connect()
    return get_latest_values()

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80, debug=True)