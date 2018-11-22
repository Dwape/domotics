#!/usr/bin/python
#import MySQLdb
import pymysql
pymysql.install_as_MySQLdb()
import datetime

cur = None # Database cursor

db = None # A reference to the database

def connect():
	'''
	Connects to the database use to store sensore values.

	'''
	global db
	db = pymysql.connect(host="localhost",    # your host, usually localhost
                     user="root",         # your username
                     passwd="tpintrocom",  # your password
                     db="domotics")        # name of the data base

	global cur
	cur = db.cursor()

def save_values(values):
	'''
	Saves the values passed as function parameter to the database

	:param values: str[]
		A list of six elements with all the values to be saved.
	    The elements represent (in this order): humidity, temperature, LPG amount, CO amount, Smoke, light.

	'''
	cur.execute("INSERT INTO data VALUES (%s, %s, %s, %s, %s, %s, %s)", (datetime.datetime.now(), values[0], values[1], values[2], values[3] ,values[4], values[5]))
	db.commit()

def close_connection():
	'''
	Closes the connection to the database.

	'''
	db.close()