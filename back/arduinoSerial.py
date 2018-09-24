import serial
ser = serial.Serial('/dev/ttyUSB0')

def get_gas_light():
	"""Returns a list with four values, LPG amount, CO amount, Smoke and light value, in that order."""
	return ser.readline().split(";")
