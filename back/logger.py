import * from database
import time

#we need to check serial to see if it saves older values or if they are overwritten.
#in case all values are saved, we should change the frequency in the arduino code.

connect()

while True:
	try:
		values = get_humidity_temperature() + get_gas_light()
		save_values(values)
		time.sleep(30)
	except RuntimeError:
		close_connection()

