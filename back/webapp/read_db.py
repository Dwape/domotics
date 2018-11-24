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


def close_connection():
	'''
	Closes the connection to the database.

	'''
	db.close()

def get_latest_values():
	'''
	Returns the latest values saved in the database.

	:return: str[]

	The latest values in the database
	A list of six elements with all the values.
	The elements represent (in this order): humidity, temperature, LPG amount, CO amount, Smoke, light.
	'''
    connect()
    cur = db.cursor()
    result = cur.fetchall()[0]
    cur.close()
    return result

def get_range_values(fromDate, toDate):
    '''
    Returns all the values saved in the database from the first date to the second date.

    The dates passed as method parameters must be in the following format.
    'YYYY-MM-DD HH:MI:SS'
    For example: '2008-11-11 13:23:44'

    :param fromDate: str
        A string representing the starting date.

    :param toDate: str
        A string representing the end date.

    :return: str[[]]

    The values in the database withing the specified date range.
    A list with lists of six elements with all the values.
    The elements represent (in this order): humidity, temperature, LPG amount, CO amount, Smoke, light.
    '''
    connect()
    cur = db.cursor()
    result = cur.fetchall()
    cur.close()
    return result # Check if the return value is correct or we need to remove the last value (like we do in get_latest_values())
