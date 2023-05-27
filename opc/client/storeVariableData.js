const {InfluxDB, Point} = require('@influxdata/influxdb-client')
const dotenv = require('dotenv');

dotenv.config({path: './.env'});

const INFLUX_TOKEN = process.env.INFLUX_TOKEN
const INFLUX_URL = process.env.INFLUX_URL
const INFLUX_ORG = process.env.INFLUX_ORG
const INFLUX_BUCKET = process.env.INFLUX_BUCKET



const client = new InfluxDB({url: INFLUX_URL, token: INFLUX_TOKEN})

console.log(INFLUX_TOKEN, INFLUX_ORG, INFLUX_BUCKET, INFLUX_URL)

let writeClient = client.getWriteApi(INFLUX_ORG, INFLUX_BUCKET, 'ns')

const writeData = async (opcVar, value, type) => {
    try {

        let point = new Point('test')
        .tag("host", "host1")
        .floatField(opcVar, parseFloat(value))
        // .tag("opcVar", opcVar)
        // [type+"Field"](opcVar, value)
        writeClient.writePoint(point);
        console.log('Data Written')

        writeClient.flush()

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    writeData
}