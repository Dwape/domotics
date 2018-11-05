#!/usr/bin/python
import sys
import Adafruit_DHT

def get_humidity_temperature():
	"""
	Returns the values measured by the humidity temperature sensor.

	:return: float[]

	A list with two elements.
	The first elements is the humidity measured by the sensor.
	The second elements is the temperature measured by the sensor.

	First parameter is the sensor version
	Second parameter in the pin
	"""
	# Parameters of Adafruit_DHT.read_retry()
	# First parameter is the sensor version
	# Second parameter is the pin being read
	# Third parameter is the number of retries
	# Fourth parameter is the delay between measurements, in seconds
	humidity, temperature = Adafruit_DHT.read_retry(11, 4, 5, 0.5)
	return [humidity, temperature]

