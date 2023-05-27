const { createNewOpcVar, getAllOpcVars, deleteOpcVar } = require('../service/opcVarService');
const { restartOpcClient } = require('../utils/opc_client_controller');

const createOne = async (req, res) => {
    try {
        const opcVar = await req.body;
        createNewOpcVar(opcVar);
        restartOpcClient()
        res.status(200).json(opcVar);   

    } catch (error) {
        console.log(error);
        res.status(401).json({message: "Error creating new opcVar"});
    }

}


const getAll = async (req, res) => {
    try {
        const opcVars = await getAllOpcVars();
        console.log(opcVars);
        res.status(200).json({data: opcVars});
    } catch (error) {
        console.log(error);
        res.status(401).json({message: "Error getting all opcVars"});
    }
}


const deleteOne = async (req, res) => {
    try {
        const opcVar = await req.params.id;
        deleteOpcVar(opcVar);
        res.status(200).json({message: "OpcVar deleted"});
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Error deleting opcVar"});
    }
}

module.exports = {
    createOne,
    getAll,
    deleteOne
}
