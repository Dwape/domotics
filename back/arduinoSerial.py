import serial
ser = serial.Serial('/dev/ttyUSB0')

ser.write("testing")
try:
        while 1:
                response = ser.readline()
		print(response)
except KeyboardInterrupt:
        ser.close()
