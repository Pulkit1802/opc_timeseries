"use client";

function VariableCard ({browseName, nodeId, id, displayName, editId, setEditId, setEditBrowseName, setFormData}) {

    const handleEdit = () => {
        
        // setEdit(prevState => !prevState);
        setEditId(id);
        setEditBrowseName(browseName);
        setFormData({
            browseName: browseName,
            nodeId: nodeId,
            displayName: browseName
        })
        console.log(browseName)
    }

    return (
        <div className={`py-8 text-xl px-6 bg-slate-300 rounded-lg ${editId == id ? 'border-2 border-blue-800': ''}`}>
            <div>Browse Name : {browseName}</div>
            <div>Node id: {nodeId}</div>
            <div className="mt-6">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded delay-300 mr-6" onClick={handleEdit}>Edit</button>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded delay-300">Delete</button>
            </div>
        </div>
    )
}

module.exports = {
    VariableCard
}