const {fetch2DaysData} = require('../service/getTimeSeriesData')
const {INFLUX_BUCKET} = require('../config')

const get2dController = async (req, res) => {
    const timeRange = req.query.timeRange || '-5m'
    let fluxQuery = `from(bucket: "${INFLUX_BUCKET}")
        |> range(start: ${timeRange})
    `
    await fetch2DaysData(res, fluxQuery)
}

module.exports = {
    get2dController
}