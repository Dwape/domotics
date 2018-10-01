from database import *
# values = humidity, temperature, LPG amount, CO amount, Smoke and light value in an array
def checkValues(values):
	warning = [0,0,0,0,0,0]
	#humidity
	if values[0] > 50:
		warning[0]=1
	#temperature
	if values[1] > 30:
		warning[1]=1
	#LPG amount
	if values[2] > 1000:
		warning[2]=1
	#CO amount
	if values[3] > 20:
		warning[3]=1
	#Smoke
	if values[4] > 1500:
		warning[4]=1
	#light
	if values[5] > 1000:
		warning[5]=1
	return warning

	



