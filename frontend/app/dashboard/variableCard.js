"use client";

const React = require('react')
// import { useState } from 'react'

function VariableCard ({ variable, data}) {

    const [valueSum, setValueSum] = React.useState(0)
    const [maxValue, setMaxValue] = React.useState(data[0].value)
    const [minValue, setMinValue] = React.useState(data[0].value)

    const variableDataCard = data.map((cur, index) => {
        // setValueSum(valueSum + parseInt(cur.value))
        // if (parseInt(cur.value) > parseInt(maxValue)) {
        //     setMaxValue(cur.value)
        // }
        // if (parseInt(cur.value) < parseInt(minValue)) {
        //     setMinValue(cur.value)
        // }

        return (
            <div key={index} className="text-lg grid grid-cols-2 text-center">
                <span className="">{ cur.value }</span>
                <span className="">{ cur.timestamp }</span>
            </div>
        )
    })

    return (
        <div className="bg-gray-300 rounded-md shadow-sm py-10 px-12 lg:w-3/4 lg:max-h-[50vh] overflow-scroll mx-auto mb-10">
            <h2 className="text-3xl text-blue-700 italic pb-2 px-4 border-b border-b-blue-800 mb-12">{variable}</h2>
            <div className="grid grid-cols-2 gap-2">
                <div className="px-4">
                    {/* {data.map((cur, index) => {
                        return (
                            <div key={index} className="text-xl flex justify-between">
                                <span className="text-blue-700">{ cur.value }</span>
                                <span className="text-blue-700">{ cur.timestamp }</span>
                            </div>
                        )
                    })} */}
                    <div className="grid grid-cols-2 text-center border-b border-b-gray-600 pb-1 mb-2">
                        <span className="text-blue-700 text-2xl italic">Value</span>
                        <span className="text-blue-700 text-2xl italic">Timestamp</span>
                    </div>
                    {...variableDataCard}
                </div>

                <div className='text-center '>
                    <div className='py-4 px-6 bg-gray-200 w-1/2 mx-auto rounded-md shadow-sm'>
                        <div className="text-2xl text-blue-800 flex justify-evenly mb-2">Mean Value : <span className='text-black'>{valueSum / data.length}</span> </div>
                        <div className="text-2xl text-blue-800 flex justify-evenly mb-2">Max Value : <span className='text-black'>{maxValue}</span> </div>
                        <div className="text-2xl text-blue-800 flex justify-evenly mb-2">Min Value : <span className='text-black'>{minValue}</span> </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

module.exports = {
    VariableCard
}