const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()


const createNewOpcVar = async (body) => {
    try {
        const opcVar = await prisma.OpcVariable.create({
            data: body
        });
        // console.log(opcVar);
        return opcVar;
    } catch (error) {
        console.log(error);
    }
}


const getAllOpcVars = async () => {
    try {
        const opcVars = await prisma.OpcVariable.findMany();
        // console.log(opcVars);
        return opcVars;
    } catch (error) {
        console.log(error);
    }
}


const deleteOpcVar = async (id) => {
    try {
        const opcVar = await prisma.OpcVariable.delete({
            where: {
                id: String(id)
            }
        });
        
    } catch (error) {
        console.log(error);
    }
}


const updateOpcVar = async (id, body) => {
    try {
        const opcVar = await prisma.OpcVariable.update({
            where: {
                id: String(id)
            },
            data: body
        });
        // console.log(opcVar);
        return opcVar;
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    createNewOpcVar,
    getAllOpcVars,
    deleteOpcVar,
    updateOpcVar
}
