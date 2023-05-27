const { VariableCard } = require('./variableCard')

const variableData = [
    {
        browseName: 'Temprature',
        nodeId: 'n=1,s=temprature',
        id: 1
    },
    {
        browseName: 'Temprature',
        nodeId: 'n=1,s=temprature',
        id: 1
    },
    {
        browseName: 'Temprature',
        nodeId: 'n=1,s=temprature',
        id: 1
    },
    {
        browseName: 'Temprature',
        nodeId: 'n=1,s=temprature',
        id: 1
    },
    {
        browseName: 'Temprature',
        nodeId: 'n=1,s=temprature',
        id: 1
    },
    {
        browseName: 'Temprature',
        nodeId: 'n=1,s=temprature',
        id: 1
    },
    {
        browseName: 'Temprature',
        nodeId: 'n=1,s=temprature',
        id: 1
    },
    {
        browseName: 'Temprature',
        nodeId: 'n=1,s=temprature',
        id: 1
    },
]

export default function Admin () {

    const variableCards = variableData.map((cur, index) => {
        return (
            <VariableCard key={index} browseName={cur.browseName} nodeId={cur.nodeId} id={cur.id} />
        )
    })

    return ( 
        <div className="relative bg-stone-200 text-black min-h-screen pb-8">
            <h1 className="text-center text-5xl py-6 italic mb-10" >Admin Page</h1>
            <div className=" grid grid-cols-[3fr_2fr] w-11/12 mx-auto">
                <div className="bg-gray-200 shadow-md rounded-lg shadow-black max-h-[80%] overflow-y-scroll">
                    <div className="w-[90%] mx-auto py-10 px-12 h-full">
                        <h2 className="text-4xl text-center mb-6">Monitered Variables</h2>
                        <div className="grid grid-cols-2 gap-4 pb-6 justify-evenly">
                            {...variableCards}
                        </div>
                    </div>
                </div>
                <div className=""></div>
            </div>
        </div> 
    )
}