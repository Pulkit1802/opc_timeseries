const { InfluxDB } = require('@influxdata/influxdb-client')
const {INFLUX_TOKEN, INFLUX_URL, INFLUX_ORG} = require('../config')


const influx_client = new InfluxDB({url: INFLUX_URL, token: INFLUX_TOKEN})
const queryClient = influx_client.getQueryApi(INFLUX_ORG)


const fetch2DaysData = async (res, fluxQuery) => {
    
    let data = []

    await queryClient.queryRows(fluxQuery, {
        next: (row, tableMeta) => {
            
            let curObj = tableMeta.toObject(row)
            delete curObj._start
            delete curObj._stop
            delete curObj._measurement
            delete curObj.host
            delete curObj.result
            delete curObj.table

            data.push(curObj)

        },
        error: (error) => {
            console.log(error)
        },
        complete: () => {
            console.log(data.length)
            res.status(200).json(data)
        }
    })

}


module.exports = {
    fetch2DaysData
}
