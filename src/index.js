const app = require('./app');
const { port } = require('./config');
const { startOpcClient, stopOpcClient } = require('./utils/opc_client_controller');

process.on('exit', () => stopOpcClient);

app.listen(port, () => {
    console.log('Starting OPC Client...');
    startOpcClient();
    console.log(`Server Started on Port ${port}`);
});