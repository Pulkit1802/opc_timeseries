import { opcEndpoint } from "./loader";

import {
    OPCUAClient,
    AttributeIds,
    makeBrowsePath,
    ClientSubscription,
    TimestampsToReturn,
    MonitoringParametersOptions,
    ClientMonitoredItem,
    DataValue,
    ReadValueId
} from "node-opcua";

import {options} from "./opc_config";

if(opcEndpoint == "") {
    console.log("OPC_ENDPOINT not set in .env file")
    process.exit(1);
}

const client = OPCUAClient.create(options);

async function main() {

    try {

        await client.connect(opcEndpoint);
        console.log("connected !");

        const session = await client.createSession();
        console.log("session created !");

        const browseResult = await session.browse("RootFolder");

        console.log("references of RootFolder :");

        if(browseResult.references) {
            for(const reference of browseResult.references) {
                console.log( "   -> ", reference.browseName.toString());
            }
        } else {
            console.log("No references found!");
            session.close();
            client.disconnect();
            process.exit(1);
        }
    
        const maxAge = 0;
        const nodeToRead = {
            nodeId: "ns=3;s=Scalar_Simulation_String",
            attributeId: AttributeIds.Value
        };
        const dataValue =  await session.read(nodeToRead, maxAge);
        console.log(" value " , dataValue.toString());

        const browsePath = makeBrowsePath("RootFolder", "/Objects/Server.ServerStatus.BuildInfo.ProductName");

        const result = await session.translateBrowsePath(browsePath);
        if(result?.targets?.length){
            const productNameNodeId = result.targets[0].targetId;
            console.log(" Product Name nodeId = ", productNameNodeId.toString());
        } else {
            console.log("No targets found!");
        }

        session.close();

        client.disconnect();

    } catch (err) {
        console.log("Error", err);
    }

}
    