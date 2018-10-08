from read_db import *
# values = humidity, temperature, LPG amount, CO amount, Smoke and light value in an array
# weather = humidity, temperature, pressure
# The user preference variables could be global variables in this file.

def check_values(values, weather, tempMax, tempMin, humMax, humMin): #it's important to consider that there could be None values due to the readings failing
	warning = [0,0,0,0,0,0]
	#humidity
	if (float(values[0]) > float(humMax)) and (float(weather[0]) < float(values[0])):
		warning[0] = 1
	elif (float(values[0]) < float(humMin)) and (float(weather[0]) > float(values[0])):
		warning[0] = -1
	#temperature
	if (float(values[1]) > float(tempMax)) and (float(weather[1]) < float(values[1])):
		warning[1] = 1
	elif (float(values[1]) < float(tempMin)) and (float(weather[1]) > float(values[1])): 
		warning[1] = -1
	#LPG amount
	if float(values[2]) > 1000:
		warning[2]=1
	#CO amount
	if float(values[3]) > 40:
		warning[3]=1
	#Smoke
	if float(values[4]) > 1500:
		warning[4]=1
	#light
	if float(values[5]) > 1000:
		warning[5]=1
	return warning

	



