import serial
ser = serial.Serial('/dev/ttyUSB0')

def get_gas_light():
	"""Returns a list with four values, LPG amount, CO amount, Smoke and light value, in that order."""
	result = ser.readline()
	return map(float,result.split(";")[0:4])
