#include "application.h"
#include "HttpClient.h"
#include "Adafruit_DHT/Adafruit_DHT.h"

#define LIGHT_PIN A5
#define DHTPIN 5
#define DHTTYPE DHT11

#define         MQ_PIN                       (0)     //define which analog input channel you are going to use
#define         RL_VALUE                     (5)     //define the load resistance on the board, in kilo ohms
#define         RO_CLEAN_AIR_FACTOR          (9.83)  //RO_CLEAR_AIR_FACTOR=(Sensor resistance in clean air)/RO,
                                                     //which is derived from the chart in datasheet
#define         LIGHT_PIN                    (5)

#define         CALIBARAION_SAMPLE_TIMES     (50)    //define how many samples you are going to take in the calibration phase
#define         CALIBRATION_SAMPLE_INTERVAL  (500)   //define the time interal(in milisecond) between each samples in the
                                                     //cablibration phase
#define         READ_SAMPLE_INTERVAL         (50)    //define how many samples you are going to take in normal operation
#define         READ_SAMPLE_TIMES            (5)     //define the time interal(in milisecond) between each samples in
                                                     //normal operation

#define         GAS_LPG                      (0)
#define         GAS_CO                       (1)
#define         GAS_SMOKE                    (2)

float           LPGCurve[3]  =  {2.3,0.21,-0.47};   //two points are taken from the curve.
                                                    //with these two points, a line is formed which is "approximately equivalent"
                                                    //to the original curve.
                                                    //data format:{ x, y, slope}; point1: (lg200, 0.21), point2: (lg10000, -0.59)
float           COCurve[3]  =  {2.3,0.72,-0.34};    //two points are taken from the curve.
                                                    //with these two points, a line is formed which is "approximately equivalent"
                                                    //to the original curve.
                                                    //data format:{ x, y, slope}; point1: (lg200, 0.72), point2: (lg10000,  0.15)
float           SmokeCurve[3] ={2.3,0.53,-0.44};    //two points are taken from the curve.
                                                    //with these two points, a line is formed which is "approximately equivalent"
                                                    //to the original curve.
                                                    //data format:{ x, y, slope}; point1: (lg200, 0.53), point2: (lg10000,  -0.22)
float           Ro           =  10;                 //Ro is initialized to 10 kilo ohms

DHT dht(DHTPIN, DHTTYPE);

HttpClient http;
http_header_t headers[] = {
   { "Content-Type", "application/json" },
   { NULL, NULL }
};
http_request_t request;
http_response_t response;

void setup() {

  Serial.begin(9600);

  dht.begin();

  Ro = MQCalibration(MQ_PIN);

  request.ip = IPAddress(192,168,0,215);
  request.port = 5000;
}

void printResponse(http_response_t &response) {
  Serial.println("HTTP Response: ");
  Serial.println(response.status);
  Serial.println(response.body);
}

void postRequest(String body) {

  request.path = "/sensor/measurement";

  //char body[40];
  //sprintf(body, "[{\"type\":\"light\", \"value\": %d}]", value);
  //request.body = body;

  //request.body = "[{\"type\":\"light\", \"value\": " + String(value) + "}]";

  //request.body = "[{\"type\":\"temperature\", \"value\": " + String(temp) + "}, {\"type\":\"humidity\", \"value\": " + String(hum) + "}]";
  request.body = body;

  //request.body = "[{\"type\":\"LPG\", \"value\": " + String(LPG) + "},{\"type\":\"smoke\", \"value\": " + String(smoke) + "},{\"type\":\"CO\", \"value\": " + String(CO) + "}]";

  http.post(request, response, headers);
  printResponse(response);
}

void loop() {

  //getRequest();
  //postRequest(analogRead(LIGHT_PIN));
  //putRequest();
  //deleteRequest();

  float temperature = dht.getTempCelcius();
  float humidity = dht.getHumidity();

  //postRequest(temperature, humidity);
  float LPG = MQGetGasPercentage(MQRead(MQ_PIN)/Ro,GAS_LPG);
  float smoke = MQGetGasPercentage(MQRead(MQ_PIN)/Ro,GAS_SMOKE);
  float CO = MQGetGasPercentage(MQRead(MQ_PIN)/Ro,GAS_CO);

  float light = analogRead(LIGHT_PIN);

  postRequest(parseData(temperature, humidity, LPG, smoke, CO, light));

  delay(30000);
}

String parseData(float temperature, float humidity, float LPG, float smoke, float CO, float light) {
  String humidityString = "{\"type\":\"humidity\", \"value\": " + String(humidity) + "}";
  String temperatureString = "{\"type\":\"temperature\", \"value\": " + String(temperature) + "}";
  String LPGString = "{\"type\":\"LPG\", \"value\": " + String(LPG) + "}";
  String smokeString = "{\"type\":\"smoke\", \"value\": " + String(smoke) + "}";
  String COString = "{\"type\":\"CO\", \"value\": " + String(CO) + "}";
  String lightString = "{\"type\":\"light\", \"value\": " + String(light) + "}";
  return "[" + humidityString + ", " +temperatureString + ", " + LPGString + ", " + smokeString + ", " + COString + ", " + lightString + "]";

  //return "[{\"type\":\"LPG\", \"value\": " + String(LPG) + "},{\"type\":\"smoke\", \"value\": " + String(smoke) + "},{\"type\":\"CO\", \"value\": " + String(CO) + "}]";
}


float MQResistanceCalculation(int raw_adc) {
  return ( ((float)RL_VALUE*(1023-raw_adc)/raw_adc));
}

float MQCalibration(int mq_pin) {
  int i;
  float val=0;

  for (i=0;i<CALIBARAION_SAMPLE_TIMES;i++) {            //take multiple samples
    val += MQResistanceCalculation(analogRead(mq_pin));
    delay(CALIBRATION_SAMPLE_INTERVAL);
  }
  val = val/CALIBARAION_SAMPLE_TIMES;                   //calculate the average value

  val = val/RO_CLEAN_AIR_FACTOR;                        //divided by RO_CLEAN_AIR_FACTOR yields the Ro
                                                        //according to the chart in the datasheet

  return val;
}

float MQRead(int mq_pin) {
  int i;
  float rs=0;

  for (i=0;i<READ_SAMPLE_TIMES;i++) {
    rs += MQResistanceCalculation(analogRead(mq_pin));
    delay(READ_SAMPLE_INTERVAL);
  }

  rs = rs/READ_SAMPLE_TIMES;

  return rs;
}

int MQGetGasPercentage(float rs_ro_ratio, int gas_id) {
  if ( gas_id == GAS_LPG ) {
     return MQGetPercentage(rs_ro_ratio,LPGCurve);
  } else if ( gas_id == GAS_CO ) {
     return MQGetPercentage(rs_ro_ratio,COCurve);
  } else if ( gas_id == GAS_SMOKE ) {
     return MQGetPercentage(rs_ro_ratio,SmokeCurve);
  }

  return 0;
}

int  MQGetPercentage(float rs_ro_ratio, float *pcurve) {
  return (pow(10,( ((log(rs_ro_ratio)-pcurve[1])/pcurve[2]) + pcurve[0])));
}
