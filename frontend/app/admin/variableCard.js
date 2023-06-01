"use client";

const axios = require('axios');

function VariableCard ({browseName, nodeId, id, displayName, editId, setEditId, setEditBrowseName, setFormData, setRefreshVars}) {

    const handleEdit = () => {
        
        // setEdit(prevState => !prevState);
        setEditId(id);
        setEditBrowseName(browseName);
        setFormData({
            browseName: browseName,
            variableNodeId: nodeId,
            displayName: displayName
        })
        console.log(browseName)
    }

    const cancelEdit = () => {
        setEditId(null);
        setEditBrowseName(null);
        setFormData({
            browseName: '',
            variableNodeId: '',
            displayName: ''
        });
    }

    const handleDelete = () => {
        axios.delete('http://localhost:8080/api/v1/opcVar/' + id)
        .then((res) => {
            setRefreshVars(prevState => prevState * -1)
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        <div className={`py-8 text-lg px-6 bg-slate-300 rounded-lg ${editId == id ? 'border-2 border-blue-800': ''}`}>
            <div className='my-2'><span className='text-blue-700 text-xl font-semibold'>Browse Name</span> : {browseName}</div>
            <div className='my-2'><span className='text-blue-700 text-xl font-semibold'>Node Id</span> : {nodeId}</div>
            <div className='my-2'><span className='text-blue-700 text-xl font-semibold'>Display Name</span> : {displayName}</div>
            <div className="mt-6">

            {
                editId != id ?
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-300 mr-6" onClick={handleEdit}>Edit</button>
                : <button className="bg-orange-700 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded duration-300 mr-6" onClick={cancelEdit}>Cancel Edit</button>
            }
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded duration-300" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

module.exports = {
    VariableCard
}