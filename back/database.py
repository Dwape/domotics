#!/usr/bin/python
import MySQLdb
import datetime

db = MySQLdb.connect(host="localhost",    # your host, usually localhost
                     user="root",         # your username
                     passwd="tpintrocom",  # your password
                     db="domotics")        # name of the data base

# you must create a Cursor object. It will let
#  you execute all the queries you need
cur = db.cursor()

# Use all the SQL you like
# cur.execute("INSERT INTO test VALUES ('light', 2)")
values = get_humidity_temperature() + get_gas_light()
cur.execute("INSERT INTO data VALUES (%s, %s, %s, %s, %s, %s, %s)", (datetime.datetime.now(), values[0], values[1], values[2], values[3] ,values[4], values[5]))
cur.execute("SELECT * FROM test")

# print all the first cell of all the rows
for row in cur.fetchall():
    print row[0]

db.commit()
db.close()