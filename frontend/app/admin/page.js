export default function Admin () {
    return ( 
        <div className="bg-stone-200 text-black min-h-screen pb-8">
            <h1 className="text-center text-5xl py-6 italic mb-10" >Admin Page</h1>
            <div className=" grid grid-cols-[3fr_2fr]">
                <div className="relative ">
                    <div className="w-[90%] mx-auto py-10 px-12 bg-red-400">
                        <h2 className="text-4xl text-center">Monitered Variables</h2>
                    </div>
                </div>
                <div className=""></div>
            </div>
        </div> 
    )
}