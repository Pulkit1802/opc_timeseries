function VariableForm ({formData, editId, handleSubmit, handleChange}) {

    return (
        <form onSubmit={handleSubmit}>
            <div className='mb-4 px-6 py-2'>
                <input 
                className='border py-2 px-4 rounded-lg block mx-auto w-5/6 outline-none hover:outline-none focus:outline-none border-gray-600 hover:bg-white focus:bg-white' 
                type="text" name="browseName" value={formData.browseName} onChange={handleChange} placeholder="Browse Name" />
            </div>
            <div className='mb-4 px-6 py-2'>
                <input 
                className='border py-2 px-4 rounded-lg block mx-auto w-5/6 outline-none hover:outline-none focus:outline-none border-gray-600 hover:bg-white focus:bg-white' 
                type="text" name='nodeId' value={formData.nodeId} onChange={handleChange} placeholder="Node Id" />
            </div>
            <div className='mb-4 px-6 py-2'>
                <input 
                className='border py-2 px-4 rounded-lg block mx-auto w-5/6 outline-none hover:outline-none focus:outline-none border-gray-600 hover:bg-white focus:bg-white' 
                type="text" name='displayName' value={formData.displayName} onChange={handleChange} placeholder="Display Name" />
            </div>

            <div className='mb-4 px-6 py-2'>
                <input 
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg block mx-auto w-5/6 outline-none hover:outline-none focus:outline-none' 
                type="submit" value={editId ? 'Edit' : 'Create'} />
            </div>
        </form>
    )
}

module.exports = {
    VariableForm
}