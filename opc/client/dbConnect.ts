import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

const data = await prisma.OpcVariable.findMany({
    select: ['browseName', 'displayName', 'variableNodeId']
});

console.log(data);