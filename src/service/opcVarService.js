const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()


const createNewOpcVar = async (body) => {
    try {
        const opcVar = await prisma.opcVar.create({
            data: body
        });
        
        return opcVar;
    } catch (error) {
        console.log(error);
    }
}


const getAllOpcVars = async () => {
    try {
        const opcVars = await prisma.opcVar.findMany();
        
        return opcVars;
    } catch (error) {
        console.log(error);
    }
}
