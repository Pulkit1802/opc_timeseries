const dotenv = require('dotenv');

dotenv.config({path: './.env'});

module.exports = {
    port: process.env.PORT || 8000,
    INFLUX_TOKEN: process.env.INFLUX_TOKEN,
    INFLUX_URL: process.env.INFLUX_URL,
    INFLUX_ORG: process.env.INFLUX_ORG,
    INFLUX_BUCKET: process.env.INFLUX_BUCKET
}