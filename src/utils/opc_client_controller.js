const pm2 = require('pm2');
const path = require('path');

const startOpcClient = () => {
    pm2.connect(function(err) {
        if (err) {
            console.error(err);
            process.exit(2);
        }
        
        pm2.start({
            script: path.join( __dirname, '../../opc/client/opc_client'),
            name: 'opc_client'
        }, function(err, apps) {
            console.log('opc_client started');
            pm2.disconnect();   // Disconnects from PM2
            if (err) throw err
        });
    }

)};


const restartOpcClient = () => {
    pm2.connect(function(err) {
        if (err) {
            console.error(err);
            process.exit(2);
        }
        
        pm2.restart('opc_client', function(err, apps) {
            console.log('opc_client restarted');
            pm2.disconnect();   // Disconnects from PM2
            if (err) throw err
        });
    }

)};


const stopOpcClient = () => {
    pm2.connect(function(err) {
        if (err) {
            console.error(err);
            process.exit(2);
        }

        pm2.stop('opc_client', function(err, apps) {
            console.log('opc_client stopped');
            pm2.disconnect();   // Disconnects from PM2
            if (err) throw err
        });
    }

)};
        

module.exports = {
    startOpcClient,
    restartOpcClient,
    stopOpcClient
}