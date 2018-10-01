from flask import Flask
from database import get_latest_values
from database import connect
from jsonparser import parse

app = Flask(__name__)
user_temp_max = 28
user_temp_min = 22
user_hum_max = 5
user_hum_min = 50

@app.route("/")
def values():
    connect()
    values = get_latest_values()[0]
    json = parse(values)
    return json

@app.route("/confTemp", methods=['POST'])
def confTemp():
    if request.method == 'POST':
        request.get_json()

@app.route("/valuesRange")
def valuesRange():
    fromDate = request.args.get('from')
    toDate = request.args.get('to')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80, debug=True)