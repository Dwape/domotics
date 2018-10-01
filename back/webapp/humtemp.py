#!/usr/bin/python
import sys
import Adafruit_DHT

def get_humidity_temperature():
	"""Returns a list with two elements, the value for the humidity and the temperature, in that order.
	First parameter is the sensor version
	Second parameter in the pin"""
	humidity, temperature = Adafruit_DHT.read_retry(11, 4, 5, 0.5)
	return [humidity, temperature]

