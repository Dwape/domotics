import requests

def get_weather_values(city):
    '''Returns weather values from open wather map. The first value is the pressure, the second the temperature and the last one is the humidity.'''
    json = requests.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&APPID=1e74895185fd2105492ebfba6f9dfb72').json()
    values = json['main']

    pressure = values['pressure'] #hPa
    temp = values['temp'] #Celcius
    humidity = values['humidity'] #%

    return [humidity, temp, pressure]