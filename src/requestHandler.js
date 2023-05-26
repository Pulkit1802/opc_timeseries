const { InfluxDB } = require('@influxdata/influxdb-client')
const {INFLUX_TOKEN, INFLUX_URL, INFLUX_ORG, INFLUX_BUCKET} = require('./loadenv')

// console.log(INFLUX_TOKEN, INFLUX_URL, INFLUX_ORG, INFLUX_BUCKET)


const influx_client = new InfluxDB({url: INFLUX_URL, token: INFLUX_TOKEN})
const queryClient = influx_client.getQueryApi(INFLUX_ORG)


const fetch2DaysData = async (req, res) => {
    let fluxQuery = `from(bucket: "${INFLUX_BUCKET}")
        |> range(start: -2d)
    `
    let data = []

    await queryClient.queryRows(fluxQuery, {
        next: (row, tableMeta) => {
            
            let o = tableMeta.toObject(row)
            delete o._start
            delete o._stop
            delete o._measurement
            delete o.host
            delete o.result
            delete o.table

            data.push(o)

        },
        error: (error) => {
            console.log(error)
        },
        complete: () => {
            res.status(200).json(data)
        }
    })

}


module.exports = {
    fetch2DaysData
}
