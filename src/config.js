const dotenv = require('dotenv');
const path = require('path');

dotenv.config({path: path.join( __dirname, '../.env')});

module.exports = {
    port: process.env.PORT || 8000,
    INFLUX_TOKEN: process.env.INFLUX_TOKEN,
    INFLUX_URL: process.env.INFLUX_URL,
    INFLUX_ORG: process.env.INFLUX_ORG,
    INFLUX_BUCKET: process.env.INFLUX_BUCKET
}