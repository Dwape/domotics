#!/usr/bin/python
import MySQLdb
import datetime
from humtemp import get_humidity_temperature 
from arduinoSerial import get_gas_light

cur = None #chech how to initialize the value
# we can change this so that the save_values method checks to see if there is a cursor and if there isn't is creates one.
db = None

def connect():
	global db
	db = MySQLdb.connect(host="localhost",    # your host, usually localhost
                     user="root",         # your username
                     passwd="tpintrocom",  # your password
                     db="domotics")        # name of the data base

	# you must create a Cursor object. It will let
	#  you execute all the queries you need
	global cur
	cur = db.cursor()

def save_values(values):
	# Use all the SQL you like
	# cur.execute("INSERT INTO test VALUES ('light', 2)")
	cur.execute("INSERT INTO data VALUES (%s, %s, %s, %s, %s, %s, %s)", (datetime.datetime.now(), values[0], values[1], values[2], values[3] ,values[4], values[5]))
	db.commit()

def close_connection():
	db.close()

def get_latest_values():
	cur.executre("SELECT * FROM data")
	for row in cur.fetchall():
    print row
