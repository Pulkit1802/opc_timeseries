import influxdb_client, time

token = ''
url = ''
org = ''

client = influxdb_client.InfluxDBClient(url=url, token=token, org=org)

bucket = ""

write_api = client.write_api(write_options=influxdb_client.client.write_api.SYNCHRONOUS)

def storeRecievedData (data):
    pass