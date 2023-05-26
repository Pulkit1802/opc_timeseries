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
} else {
    console.log("OPC_ENDPOINT = ", opcEndpoint);
}

const client = OPCUAClient.create(options);

async function main() {

    try {

        await client.connect(opcEndpoint);
        console.log("connected !");

        const session = await client.createSession();
        console.log("session created !");

        // const browseResult = await session.browse("ObjectsFolder");
        // console.log(browseResult)

        // console.log("references of RootFolder :", browseResult);

        // if(browseResult.references) {
        //     for(const reference of browseResult.references) {
        //         // if (reference.nodeClass === 2) {
        //             // Check if the node class is Variable (2)
        //             // const variableNodeId = reference.nodeId.toString();
        //             // const variableData = await session.readVariableValue(variableNodeId);
        //             // console.log(`Variable: ${variableNodeId}, Value: ${variableData.value.toString()}`);
        //         // }
        //         console.log(reference.browseName.toString());
        //     }
        // } else {
        //     console.log("No references found!");
        //     session.close();
        //     client.disconnect();
        //     process.exit(1);
        // }


        // find all the variables in the server address space
        const browsePath = makeBrowsePath("ObjectsFolder", "/1:MyDevice");
        const result = await session.translateBrowsePath(browsePath);
        // console.log(result)
        if(result?.targets?.length){
            // const targets = result.targets;
            // for (const target of targets) {
            //     console.log(target.targetId.toString());
            // }
            const productNameNodeId = result.targets[0].targetId;
            console.log("Product Name nodeId = ", productNameNodeId.toString());

            const maxAge = 0;
            const nodeToRead = {
                nodeId: "ns=1;s=Scalar_Simulation_String",
                attributeId: AttributeIds.Value
            };
            const dataValue =  await session.read(nodeToRead, maxAge);
            const data = dataValue.toJSON();
            console.log(" value " , data);

        } else {
            console.log("No targets found!");
            session.close();
            client.disconnect();
            process.exit(1);
        }

    
        // const maxAge = 0;
        // const nodeToRead = {
        //     nodeId: "ns=1;s=Scalar_Simulation_String",
        //     attributeId: AttributeIds.Value
        // };
        // const dataValue =  await session.read(nodeToRead, maxAge);
        // const data = dataValue.toJSON();
        // console.log(" value " , data);

        // const browsePath = makeBrowsePath("RootFolder", "/Objects/Server.ServerStatus.BuildInfo.ProductName");
        // // console.log(browsePath)
        // const result = await session.translateBrowsePath(browsePath);
        // console.log(result)
        // if(result?.targets?.length){
        //     const productNameNodeId = result.targets[0].targetId;
        //     console.log(" Product Name nodeId = ", productNameNodeId.toString());
        // } else {
        //     console.log("No targets found!");
        // }

        session.close();

        client.disconnect();

    } catch (err) {
        console.log("Error", err);
    }

}

main();
    