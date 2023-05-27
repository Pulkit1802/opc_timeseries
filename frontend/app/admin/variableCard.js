function VariableCard ({browseName, nodeId, id}) {
    return (
        <div className="py-8 text-xl px-6 bg-slate-300 rounded-lg">
            <div>Browse Name : {browseName}</div>
            <div>Node id: {nodeId}</div>
            <div className="mt-6">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded delay-300 mr-6">Edit</button>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded delay-300">Delete</button>
            </div>
        </div>
    )
}

module.exports = {
    VariableCard
}