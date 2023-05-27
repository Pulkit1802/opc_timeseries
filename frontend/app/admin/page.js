export default function Admin () {
    return ( 
        <div className="relative bg-stone-200 text-black min-h-screen pb-8">
            <h1 className="text-center text-5xl py-6 italic mb-10 h-4/6 " >Admin Page</h1>
            <div className=" grid grid-cols-[3fr_2fr] w-11/12 mx-auto">
                <div className="bg-gray-200 shadow-md rounded-lg shadow-black">
                    <div className="w-[90%] mx-auto py-10 px-12 h-full">
                        <h2 className="text-4xl text-center mb-6">Monitered Variables</h2>
                        <div className="grid grid-cols-2 gap-4 justify-evenly">
                            <div className="py-8 text-xl px-6 bg-slate-300 rounded-lg">
                                <div>Browse Name : Temprature</div>
                                <div>Node id: n=1,s=temprature</div>
                                <div className="mt-6">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded delay-300 mr-6">Edit</button>
                                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded delay-300">Delete</button>
                                </div>
                            </div>
                            <div className="py-8 text-xl px-6 bg-slate-300 rounded-lg">
                                <div>Browse Name : Temprature</div>
                                <div>Node id: n=1,s=temprature</div>
                                <div className="mt-6">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded delay-300 mr-6">Edit</button>
                                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Delete</button>
                                </div>
                            </div>
                            <div className="py-8 text-xl px-6 bg-slate-300 rounded-lg">
                                <div>Browse Name : Temprature</div>
                                <div>Node id: n=1,s=temprature</div>
                                <div className="mt-6">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded delay-300 mr-6">Edit</button>
                                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=""></div>
            </div>
        </div> 
    )
}