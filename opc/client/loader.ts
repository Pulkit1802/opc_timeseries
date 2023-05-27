const dotenv = require('dotenv');
const path = require('path');

dotenv.config({path: path.join( __dirname, '../.env')});

const opcEndpoint = process.env.OPC_ENDPOINT || "";

export {
    opcEndpoint,
}