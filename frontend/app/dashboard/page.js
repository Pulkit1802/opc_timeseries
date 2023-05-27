"use client";
const React = require('react')
const axios = require('axios')

const { VariableCard } = require('./variableCard')

// const variableData = [
//     {
//         variable: 'Temperature',
//         data: [
//             {
//                 value: '20',
//                 timestamp: '2021-01-01 12:00:00'
//             },
//             {
//                 value: '21',
//                 timestamp: '2021-01-01 12:01:00'
//             },
//             {
//                 value: '22',
//                 timestamp: '2021-01-01 12:02:00'
//             },
//             {
//                 value: '23',
//                 timestamp: '2021-01-01 12:03:00'
//             },
//             {
//                 value: '24',
//                 timestamp: '2021-01-01 12:04:00'
//             },
//             {
//                 value: '25',
//                 timestamp: '2021-01-01 12:04:00'
//             },
//             {
//                 value: '26',
//                 timestamp: '2021-01-01 12:04:00'
//             },
//             {
//                 value: '27',
//                 timestamp: '2021-01-01 12:04:00'
//             },
//             {
//                 value: '25',
//                 timestamp: '2021-01-01 12:04:00'
//             },
//             {
//                 value: '26',
//                 timestamp: '2021-01-01 12:04:00'
//             },
//             {
//                 value: '27',
//                 timestamp: '2021-01-01 12:04:00'
//             },
//             {
//                 value: '26',
//                 timestamp: '2021-01-01 12:04:00'
//             },
//             {
//                 value: '27',
//                 timestamp: '2021-01-01 12:04:00'
//             },
//             {
//                 value: '25',
//                 timestamp: '2021-01-01 12:04:00'
//             },
//             {
//                 value: '26',
//                 timestamp: '2021-01-01 12:04:00'
//             },
//             {
//                 value: '27',
//                 timestamp: '2021-01-01 12:04:00'
//             },
//             {
//                 value: '26',
//                 timestamp: '2021-01-01 12:04:00'
//             },
//             {
//                 value: '27',
//                 timestamp: '2021-01-01 12:04:00'
//             },
//             {
//                 value: '25',
//                 timestamp: '2021-01-01 12:04:00'
//             },
//             {
//                 value: '26',
//                 timestamp: '2021-01-01 12:04:00'
//             },
//             {
//                 value: '27',
//                 timestamp: '2021-01-01 12:04:00'
//             },
//         ]
//     },
//     {
//         variable: 'Humidity',
//         data: [
//             {
//                 value: '20',
//                 timestamp: '2021-01-01 12:00:00'
//             },
//             {
//                 value: '21',
//                 timestamp: '2021-01-01 12:01:00'
//             },
//             {
//                 value: '22',
//                 timestamp: '2021-01-01 12:02:00'
//             },
//             {
//                 value: '23',
//                 timestamp: '2021-01-01 12:03:00'
//             },
//         ]
//     }
// ]


export default function Dashboard () {

    const [variableData, setVariableData] = React.useState({})
    const [variableCards, setVariableCards] = React.useState([])

    // const variableCards = Object.keys(variableData).map((key, index) => {
    //     return (
    //         <VariableCard key={index} variable={variable[key].variable} data={variable[key].data} />
    //     )
    // })

    React.useEffect( () => {
        axios.get('http://localhost:5000/api/v1/dashboard')
            .then(res => {
                setVariableData(prevState => {

                        res.data.map((variable, index) => {
                            if (Object.keys(prevState).includes(variable._field)){
                                prevState[variable._field].data.push({
                                    value: variable._value,
                                    timestamp: variable._time
                                })
                            }
                            else {
                                prevState[variable._field] = {
                                    variable: variable._field,
                                    data: [{
                                        value: variable._value,
                                        timestamp: variable._time
                                    }]
                                }
                            }

                        })

                        // console.log(prevState)

                        return (
                            prevState
                        )

                })

                setTimeout(() => {
                    const data = []
                    Object.keys(variableData).map((key, index) => {
                        data.push(
                            <VariableCard key={index} variable={variableData[key].variable} data={variableData[key].data} />
                        )
                    })
                    setVariableCards(data)
                }
                , 1000)

            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className="text-lg min-h-screen pb-16 bg-gray-400 text-black">
            <div className="text-center py-6">
                <h1 className="text-5xl font-bold leading-relaxed tracking-wide text-blue-900">Dashboard</h1>
            </div>

            <div>
                {
                    ...variableCards
                }
            </div>

            {/* <VariableCard /> */}

        </div>
    )
}