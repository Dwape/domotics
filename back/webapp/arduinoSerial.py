import serial
ser = serial.Serial('/dev/ttyUSB0')

def get_gas_light():
	"""
	Returns a list with the measurements from the gas sensor and the light sensor
	These two sensors are connected to an Arduino board which serves the purpose of an Analog to Digital converter

	:return: float[]

	Returns a list with four values (in this order): LPG amount, CO amount, Smoke and light value.
	The first three values is measured by the gas sensor.
	The last value is the one measured by the light sensor.
	"""
	result = ser.readline()
	return map(float,result.split(";")[0:4])
