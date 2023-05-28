"use client";
const React = require('react');
const axios = require('axios');

const { VariableCard } = require('./variableCard');
const { VariableForm } = require('./variableCreateForm');

// const variableData = [
//     {
//         browseName: 'Temprature',
//         nodeId: 'n=1,s=temprature',
//         id: 1
//     },
//     {
//         browseName: 'Temprature',
//         nodeId: 'n=1,s=temprature',
//         id: 2
//     },
//     {
//         browseName: 'Temprature',
//         nodeId: 'n=1,s=temprature',
//         id: 3
//     },
//     {
//         browseName: 'Temprature',
//         nodeId: 'n=1,s=temprature',
//         id: 4
//     },
//     {
//         browseName: 'Temprature',
//         nodeId: 'n=1,s=temprature',
//         id: 5
//     },
//     {
//         browseName: 'Temprature',
//         nodeId: 'n=1,s=temprature',
//         id: 6
//     },
//     {
//         browseName: 'Temprature',
//         nodeId: 'n=1,s=temprature',
//         id: 7
//     },
//     {
//         browseName: 'Temprature',
//         nodeId: 'n=1,s=temprature',
//         id: 8
//     },
// ]

export default function Admin () {

    const [editId, setEditId] = React.useState();
    const [refreshVars, setRefreshVars] = React.useState(1);
    const [editBrowseName, setEditBrowseName] = React.useState();
    const [variableData, setVariableData] = React.useState([]);

    const [formData, setFormData] = React.useState({
        browseName: '',
        variableNodeId: '',
        displayName: ''
    });

    const handleChange = (e) => {
        setFormData(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);

        let url = 'http://localhost:5000/api/v1/opcVar';

        if (editId) {
            url = url + '/' + editId;
            axios.put(url, formData)
            .then(res => {
                setRefreshVars(prevState => prevState * -1);
                setFormData({
                    browseName: '',
                    variableNodeId: '',
                    displayName: ''
                });
                setEditId(null);
                setEditBrowseName(null);
            });
        } else {
            axios.post(url, formData)
            .then(res => {
                setRefreshVars(prevState => prevState * -1);
            });
        }
            
    }

    React.useEffect(() => {
        axios.get('http://localhost:5000/api/v1/opcVar')
            .then(res => {
                setVariableData(res.data.data);
            })
            .catch(err => {
                console.log(err);
            }
        )

    }, [refreshVars])

    return ( 
        <div className="relative bg-stone-200 text-black min-h-screen pb-8">
            <h1 className="text-center text-5xl py-6 italic mb-10" >Admin Page</h1>
            <div className=" grid grid-cols-[3fr_2fr] gap-12 w-11/12 mx-auto">
                <div className="bg-gray-200 shadow-md rounded-lg shadow-black max-h-[80vh] overflow-y-scroll">
                    <div className="w-[90%] mx-auto py-10 px-12 h-full">
                        <h2 className="text-4xl text-center mb-6">Monitered Variables</h2>
                        <div className="grid grid-cols-2 gap-4 pb-6 justify-evenly">
                            {
                                variableData.length ?
                                variableData.map((cur, index) => {
                                    return (
                                        <VariableCard 
                                            key={index} browseName={cur.browseName} nodeId={cur.variableNodeId} id={cur.id} displayName={cur.displayName} setFormData={setFormData}
                                            editId={editId} setEditId={setEditId} setEditBrowseName={setEditBrowseName} setRefreshVars={setRefreshVars}
                                        />
                                    )
                                })
                                :
                                <h3 className="text-center text-2xl">No Variables Found</h3>
                            }
                        </div>
                    </div>
                </div>

                <div className="bg-gray-200 shadow-md rounded-lg shadow-black max-h-[80vh] py-10 overflow-y-scroll">
                    <h3 className='text-center text-3xl mb-6'>{editId ? `Edit Variable\n${editBrowseName}` : 'Create New Variable'}</h3>
                    <VariableForm formData={formData} editId={editId} handleSubmit={handleSubmit} handleChange={handleChange} />
                </div>

                <div className=""></div>
            </div>
        </div> 
    )
}