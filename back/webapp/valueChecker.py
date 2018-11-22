from read_db import *

def check_values(values, weather, tempMax, tempMin, humMax, humMin):
    """
    Checks if the values are within the accepted range

    :param values: str[]
	    A list of six elements with all the values to be checked.
	    The elements represent (in this order): humidity, temperature, LPG amount, CO amount, Smoke, light.

    :param weather: str[]
	    A list of three weather values that will be used to check if the other values are within range.
	    The elements represent  (in this order): humidity, temperature, pressure.

    :param tempMax: str
	    The maximum temperature accepted.

    :param tempMin: str
	    The minimum temperature accepted.

    :param humMax: str
	    The maximum humidity accepted.

    :param humMin: str
	    The minimum humidity accepted.

    :return: int[]

    A list with six elements.
    The elements in the list are related to the values parameter, and say whether the values are too low, too high or
    withing range.
    -1 means that the value is too low.
    1 means that the value is too high.
    0 means that the value is withing the accepted range.

"""
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

	



