import requests

def get_weather_values(city):
    '''
    Returns weather values from open weather map.
    The api requires a different key for each user which has a maximum number of requests.

    :param city: str[]
        The city that the weather values will be looked for.

    :return: float[]

    A list with three elements
    The first value is the pressure
    The second value is the temperature
    The third value is the humidity.

    '''
    json = requests.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&APPID=1e74895185fd2105492ebfba6f9dfb72').json()
    values = json['main']

    pressure = values['pressure'] #hPa
    temp = values['temp'] #Celcius
    humidity = values['humidity'] #%

    return [humidity, temp, pressure]