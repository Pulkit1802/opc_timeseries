const dotenv = require('dotenv');

dotenv.config({path:'./.env'});

const opcEndpoint = process.env.OPC_ENDPOINT || "";

// console.log("OPC_ENDPOINT: ", process.env);

export {
    opcEndpoint
}