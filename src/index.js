const app = require('./app');
const { port } = require('./config');
const { startOpcClient, stopOpcClient } = require('./utils/opc_client_controller');

process.on('exit', async () => {
    console.log('Shutting down OPC Client...');
    await stopOpcClient();
    console.log('Process is exiting...');
});

process.on('SIGINT', () => {
    process.exit(0);
});

app.listen(port, () => {
    console.log('Starting OPC Client...');
    // startOpcClient();
    console.log(`Server Started on Port ${port}`);
});