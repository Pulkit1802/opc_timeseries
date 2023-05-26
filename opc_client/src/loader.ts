import dotenv from 'dotenv';

dotenv.config({path: __dirname + '../.env'});

const opcEndpoint = process.env.OPC_ENDPOINT || "";

export {
    opcEndpoint
}