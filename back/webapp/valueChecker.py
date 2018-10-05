from read_db import *
# values = humidity, temperature, LPG amount, CO amount, Smoke and light value in an array
# weather = humidity, temperature, pressure
# The user preference variables could be global variables in this file.

def check_values(values, weather, tempMax, tempMin, humMax, humMin): #it's important to consider that there could be None values due to the readings failing
	warning = [0,0,0,0,0,0]
	#humidity
	if values[0] > humMax and weather[0] < values[0]:
		warning[0] = 1
	elif values[0] < humMin and weather[0] > values[0]:
		warning[0] = -1
	#temperature
	if values[1] > tempMax and weather[1] < values[1]:
		warning[1] = 1
	elif values[1] < tempMin and weather[1] > values[1]:
		warning[1] = -1
	#LPG amount
	if values[2] > 1000:
		warning[2]=1
	#CO amount
	if values[3] > 40:
		warning[3]=1
	#Smoke
	if values[4] > 1500:
		warning[4]=1
	#light
	if values[5] > 1000:
		warning[5]=1
	return warning

	



