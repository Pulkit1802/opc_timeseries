import { MessageSecurityMode, SecurityPolicy } from "node-opcua";

const connectionStrategy = {
    initialDelay: 1000,
    maxRetry: 1
}


const options = {
    applicationName: "MyClient",
    connectionStrategy: connectionStrategy,
    securityMode: MessageSecurityMode.None,
    securityPolicy: SecurityPolicy.None,
    endpoint_must_exist: false,
};


export {
    options
}