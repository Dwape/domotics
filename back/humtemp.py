#!/usr/bin/python
import sys
import Adafruit_DHT

next_temperature = 0
next_humidity = 0

def get_temperature():
	humidity, temperature = Adafruit_DHT.read_retry(11, 4, 5, 0.5)
	return temperature

def get_humidity():
	humidity, temperature = Adafruit_DHT.read_retry(11, 4, 5, 0.5)
	return humidity

