from write_db import *
import time
from humtemp import get_humidity_temperature
from arduinoSerial import get_gas_light

#we need to check serial to see if it saves older values or if they are overwritten.
#in case all values are saved, we should change the frequency in the arduino code.

connect()

while True:
	try:
		values = get_humidity_temperature() + get_gas_light()
		print(values)
		save_values(values)
		time.sleep(30)
	except RuntimeError:
		close_connection()

