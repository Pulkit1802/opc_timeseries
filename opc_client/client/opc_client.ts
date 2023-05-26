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

// async function main() {

//     try {

//         const deviceList: string[] = ['MyDevice', 'My_Device']
//         const varibaleList: string[] = ['Scalar_Simulation_String', 'Scalar_Simulation_Double']
//         await client.connect(opcEndpoint);
//         console.log("connected !");

//         const session = await client.createSession();
//         console.log("session created !");

        

//         const deviceNodeIds: string[] = []

//         for(const device in deviceList) {
//             const browsePath = makeBrowsePath("ObjectsFolder", "/1:" + deviceList[device]);
//             const result = await session.translateBrowsePath(browsePath);
//             if(result?.targets?.length){
//                 const targets = result.targets;
//                 for (const target of targets) {
//                     deviceNodeIds.push(target.targetId.toString())
//                 }
//             }
//         }

//         const varibaleNodeIds: string[] = []
//         for(const deviceNodeId in deviceNodeIds) {
//             for(const variable in varibaleList) {
//                 const browsePath = makeBrowsePath(deviceNodeIds[deviceNodeId], "/1:" + varibaleList[variable]);
//                 const result = await session.translateBrowsePath(browsePath);
//                 if(result?.targets?.length){
//                     const targets = result.targets;
//                     for (const target of targets) {
//                         varibaleNodeIds.push(target.targetId.toString())
//                     }
//                 }
//             }
//         }

//         console.log(varibaleNodeIds)

//         for(const nodeId of varibaleNodeIds) {
//             const maxAge = 0;
//             console.log("nodeId = ", nodeId)
//             const nodeToRead = {
//                 nodeId: nodeId,
//                 attributeId: AttributeIds.Value
//             };
//             const dataValue =  await session.read(nodeToRead, maxAge);
//             const data = dataValue.toJSON();
//             console.log(" value " , data.value.value);
//         }

//         // const maxAge = 0;
//         //     const nodeToRead = {
//         //         nodeId: "ns=1;s=Scalar_Simulation_Double",
//         //         attributeId: AttributeIds.Value
//         //     };
//         //     const dataValue =  await session.read(nodeToRead, maxAge);
//         //     const data = dataValue.toJSON();
//         //     console.log(" value " , data);

//         // console.log(deviceBrowseNames);

//         // find all the variables in the server address space
//         // const browsePath = makeBrowsePath("ns=1;i=1000", "/1:Scalar_Simulation_String");
//         // const result = await session.translateBrowsePath(browsePath);
//         // console.log(result)
//         // if(result?.targets?.length){
//         //     const targets = result.targets;
//         //     for (const target of targets) {
//         //         console.log(target.targetId.toString());
//         //     }
//         //     // const productNameNodeId = result.targets[0].targetId;
//         //     // // console.log("Product Name nodeId = ", productNameNodeId.toString());

//         //     // const maxAge = 0;
//         //     // const nodeToRead = {
//         //     //     nodeId: productNameNodeId,
//         //     //     attributeId: AttributeIds.Value
//         //     // };
//         //     // const dataValue =  await session.read(nodeToRead, maxAge);
//         //     // const data = dataValue.toJSON();
//         //     // console.log(" value " , data);

//         // } else {
//         //     console.log("No targets found!");
//         //     session.close();
//         //     client.disconnect();
//         //     process.exit(1);
//         // }

//         // Find all the varibale under device MyDevice
//         // const browsePath = makeBrowsePath("ObjectsFolder", "/1:MyDevice1");
//         // const result = await session.translateBrowsePath(browsePath);
//         // console.log(result)

//         // if(result?.targets?.length){
//         //     const targets = result.targets;
//         //     for (const target of targets) {
//         //         console.log(target.targetId.toString());
//         //     }
//         // }


    
//         // const maxAge = 0;
//         // const nodeToRead = {
//         //     nodeId: "ns=1;s=Scalar_Simulation_String",
//         //     attributeId: AttributeIds.Value
//         // };
//         // const dataValue =  await session.read(nodeToRead, maxAge);
//         // const data = dataValue.toJSON();
//         // console.log(" value " , data);

//         // const browsePath = makeBrowsePath("RootFolder", "/Objects/Server.ServerStatus.BuildInfo.ProductName");
//         // // console.log(browsePath)
//         // const result = await session.translateBrowsePath(browsePath);
//         // console.log(result)
//         // if(result?.targets?.length){
//         //     const productNameNodeId = result.targets[0].targetId;
//         //     console.log(" Product Name nodeId = ", productNameNodeId.toString());
//         // } else {
//         //     console.log("No targets found!");
//         // }

//         session.close();

//         client.disconnect();

//     } catch (err) {
//         console.log("Error", err);
//     }

// }

async function main() {
    try {

        await client.connect(opcEndpoint);
        console.log("connected !");

        const session = await client.createSession();
        console.log("session created !");

        const subscription = ClientSubscription.create(session, {
            requestedPublishingInterval: 1000,
            requestedLifetimeCount:      100,
            requestedMaxKeepAliveCount:   10,
            maxNotificationsPerPublish:  100,
            publishingEnabled: true,
            priority: 10
        });
        
        subscription.on("started", function() {
            console.log("subscription started for 2 seconds - subscriptionId=", subscription.subscriptionId);
        }).on("keepalive", function() {
            console.log("keepalive");
        }).on("terminated", function() {
            console.log("terminated");
        });
        
        
        // install monitored item
        
        const itemToMonitor = {
            nodeId: "ns=1;s=Scalar_Simulation_Double",
            attributeId: AttributeIds.Value
        };
        const parameters: MonitoringParametersOptions = {
            samplingInterval: 100,
            discardOldest: true,
            queueSize: 10
        };
        
        const monitoredItem  = ClientMonitoredItem.create(
            subscription,
            itemToMonitor,
            parameters,
            TimestampsToReturn.Both
        );
        
        monitoredItem.on("changed", (dataValue: DataValue) => {
            console.log(" value has changed : ", dataValue.value.toString());
        });
        
        
        
        async function timeout(ms: number) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        await timeout(10000);
        
        console.log("now terminating subscription");
        await subscription.terminate();
        
        
    } catch (err) {
        console.log("Error", err);
    }
}

main();
// setInterval(main, 1000);
    