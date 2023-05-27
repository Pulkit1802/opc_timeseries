const { VariableCard } = require('./variableCard')


const variableData = [
    {
        variable: 'Temperature',
        data: [
            {
                value: '20',
                timestamp: '2021-01-01 12:00:00'
            },
            {
                value: '21',
                timestamp: '2021-01-01 12:01:00'
            },
            {
                value: '22',
                timestamp: '2021-01-01 12:02:00'
            },
            {
                value: '23',
                timestamp: '2021-01-01 12:03:00'
            },
            {
                value: '24',
                timestamp: '2021-01-01 12:04:00'
            },
            {
                value: '25',
                timestamp: '2021-01-01 12:04:00'
            },
            {
                value: '26',
                timestamp: '2021-01-01 12:04:00'
            },
            {
                value: '27',
                timestamp: '2021-01-01 12:04:00'
            },
            {
                value: '25',
                timestamp: '2021-01-01 12:04:00'
            },
            {
                value: '26',
                timestamp: '2021-01-01 12:04:00'
            },
            {
                value: '27',
                timestamp: '2021-01-01 12:04:00'
            },
            {
                value: '26',
                timestamp: '2021-01-01 12:04:00'
            },
            {
                value: '27',
                timestamp: '2021-01-01 12:04:00'
            },
            {
                value: '25',
                timestamp: '2021-01-01 12:04:00'
            },
            {
                value: '26',
                timestamp: '2021-01-01 12:04:00'
            },
            {
                value: '27',
                timestamp: '2021-01-01 12:04:00'
            },
            {
                value: '26',
                timestamp: '2021-01-01 12:04:00'
            },
            {
                value: '27',
                timestamp: '2021-01-01 12:04:00'
            },
            {
                value: '25',
                timestamp: '2021-01-01 12:04:00'
            },
            {
                value: '26',
                timestamp: '2021-01-01 12:04:00'
            },
            {
                value: '27',
                timestamp: '2021-01-01 12:04:00'
            },
        ]
    },
    {
        variable: 'Humidity',
        data: [
            {
                value: '20',
                timestamp: '2021-01-01 12:00:00'
            },
            {
                value: '21',
                timestamp: '2021-01-01 12:01:00'
            },
            {
                value: '22',
                timestamp: '2021-01-01 12:02:00'
            },
            {
                value: '23',
                timestamp: '2021-01-01 12:03:00'
            },
        ]
    }
]


export default function Dashboard () {
    return (
        <div className="text-lg min-h-screen pb-16 bg-gray-400 text-black">
            <div className="text-center py-6">
                <h1 className="text-5xl font-bold leading-relaxed tracking-wide text-blue-900">Dashboard</h1>
            </div>

            <div>
                {variableData.map((cur, index) => {
                    return (
                        <VariableCard key={index} variable={cur.variable} data={cur.data} />
                    )
                })}
            </div>

            {/* <VariableCard /> */}

        </div>
    )
}