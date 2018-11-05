from write_db import *
import time
from humtemp import get_humidity_temperature
from arduinoSerial import get_gas_light

#we need to check serial to see if it saves older values or if they are overwritten.
#in case all values are saved, we should change the frequency in the arduino code.

'''
Logs values into the database.
Sleeps so that measurements are saved every 30 seconds
'''

connect()

previous_values = None

while True:
	try:
		values = get_humidity_temperature() + get_gas_light()
		if values[0] == None or values[1] == None:
			if previous_values != None:
				values[0] = previous_values[0]
				values[1] = previous_values[1]
				save_values(values)
				print("Values saved")
				previous_values = values
		else:
			previous_values = values
			save_values(values)
			print("Values saved")
		time.sleep(30)
	except RuntimeError:
		close_connection()

