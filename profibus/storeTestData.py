import influxdb_client, time, random

token = 'nu4UC90Ohv8KHdrjp5T7k-Eylqbdgjk9Hj6gmDEp9372ONYqi9KQFMftFU3yv1ZtJ9KO-PtmQRYL95lF3IU9GQ=='
url = 'http://localhost:8086'
org = 'dev'

client = influxdb_client.InfluxDBClient(url=url, token=token, org=org)

bucket = "crion"

write_api = client.write_api(write_options=influxdb_client.client.write_api.SYNCHRONOUS)

time1 = time.time_ns()
for i in range(1000):
    used = random.randrange(0, 100)
    p = influxdb_client.Point("test").tag("host", "host1").field("used_percent", float(used)).field("free_percent", float(100-used))
    write_api.write(bucket=bucket, record=p)

print("Time taken:", (time.time_ns() - time1)/1000000000, "seconds")