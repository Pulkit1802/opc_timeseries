const dotenv = require('dotenv');

dotenv.config({path:'./.env'});

const opcEndpoint = process.env.OPC_ENDPOINT || "";


export {
    opcEndpoint,
}