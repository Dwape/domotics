#!/usr/bin/python
import MySQLdb
import datetime

# We could probably have two database files
# One which is in charge of saving the values into the database and the other one responsible for reading.

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

def close_connection():
	db.close()

def get_latest_values():
	cur = db.cursor()
	cur.execute("SELECT * FROM data ORDER BY datetime DESC LIMIT 1")
	return cur.fetchall()[0]

# We need to check if the date format is correct and if the return value is correct (we may need to remove the last value).
# Check which literal date formats are parsed as dates in sql
# This is an example that works '2008-11-11 13:23:44'
# 'YYYY-MM-DD HH:MI:SS'
def get_range_values(fromDate, toDate):
	cur = db.cursor()
	cur.execute("SELECT * FROM data WHERE (datetime > " + fromDate + " AND datetime < " + toDate + ") ORDER BY datetime DESC")
	return cur.fetchall() # Check if the return value is correct or we need to remove the last value (like we do in get_latest_values())
