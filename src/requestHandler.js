const { InfluxDB, Point } = require('@influxdata/influxdb-client')

token = process.env.INFLUX_TOKEN
url = process.env.INFLUX_URL

const org = process.env.INFLUX_ORG
const bucket = process.env.INFLUX_BUCKET

const client = new InfluxDB({ url, token })
let queryClient = client.queryClient(org)

const get2DaysData = async (res) => {
    let fluxQuery = `from(bucket: "${bucket}")
        |> range(start: -2d)
    `
    let data = []

    await queryClient.qureyRows(fluxQuery, {
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
            res.status(200).json(data)
        }
    });

}
