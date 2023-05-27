import {PrismaClient} from '@prisma/client'

const client = new PrismaClient()

const getVars = async () => {
    const data = await client.opcVariable.findMany({
        select: {
            browseName: true,
            displayName: true,
            variableNodeId: true,
        },
    })

    console.log(data)

    return data
    
}

export default getVars;
