const opcua = require("node-opcua");

const server = new opcua.OPCUAServer({
    port: 4840, // Specify the port on which the server will listen
    resourcePath: "/", // Specify the resource path for the server
});

server.initialize(() => {
    console.log("OPC UA server initialized");

    // Create a new address space
    const addressSpace = server.engine.addressSpace;
    const namespace = addressSpace.getOwnNamespace();

    // Create a object folder
    const device = namespace.addObject({
        organizedBy: addressSpace.rootFolder.objects,
        browseName: "MyDevice"
    });

    const device1 = namespace.addObject({
        organizedBy: addressSpace.rootFolder.objects,
        browseName: "My_Device"
    });

    // Create a variable node in the address space

    namespace.addVariable({
        nodeId: "ns=1;s=Scalar_Simulation_String",
        browseName: "Scalar_Simulation_String",
        componentOf: device,
        dataType: "String",
        value: {
            get: function () {
                return new opcua.Variant({ dataType: opcua.DataType.String, value: "Hello OPC UA client!" });
            },
            set: function (variant) {
                variable2 = String(variant.value);
                return opcua.StatusCodes.Good;
            }
        },
    });

    let var2 = 3.14;

    setInterval(() => var2 = Math.random()*15, 5000);

    namespace.addVariable({
        nodeId: "ns=1;s=Scalar_Simulation_Double",
        browseName: "Scalar_Simulation_Double",
        componentOf: device1,
        dataType: "Double",
        value: {
            get: function () {
                return new opcua.Variant({ dataType: opcua.DataType.Double, value: var2 });
            },
            set: function (variant) {
                variable2 = parseFloat(variant.value);
                return opcua.StatusCodes.Good;
            }
        },
    });

    let var3 = 4.2;

    setInterval(() => var3 = Math.random() * 20 + 30, 100);

    namespace.addVariable({
        nodeId: "ns=1;s=Scalar_Simulation_Triple",
        browseName: "Scalar_Simulation_Triple",
        componentOf: device1,
        dataType: "Double",
        value: {
            get: function () {
                return new opcua.Variant({ dataType: opcua.DataType.Double, value: var3 });
            },
            set: function (variant) {
                variable2 = parseFloat(variant.value);
                return opcua.StatusCodes.Good;
            }
        },
    });

    // Start the server
    
});

server.start(() => {
    console.log("Server is now listening ... ( press CTRL+C to stop)");
    const endpointUrl = server.endpoints[0].endpointDescriptions()[0].endpointUrl;
    console.log(" the primary server endpoint url is ", endpointUrl );
});

process.on("SIGINT", () => {
    server.shutdown(() => {
        console.log("OPC UA server shutting down");
        process.exit(0);
    });
});
