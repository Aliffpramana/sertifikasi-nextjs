export default function Tech() {
    return (
        <>
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 w-screen min-h-[300px] p-8">
                <h1 className="text-4xl text-white font-extrabold mb-6 text-center">Techs</h1>
                <div className="w-32 h-1 bg-[#b3fd3d] mx-auto mb-8" />
                <div className="flex justify-center items-center flex-wrap gap-8">
                    <div className="bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg shadow-lg p-4 w-40 h-48 flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" 
                            alt="C# Logo" 
                            className="w-24 h-24 object-contain rounded-md mb-4"
                        />
                        <p className="text-white font-medium text-center">C#</p>
                    </div>
                    <div className="bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg shadow-lg p-4 w-40 h-48 flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" 
                            alt="JavaScript Logo" 
                            className="w-24 h-24 object-contain rounded-md mb-4"
                        />
                        <p className="text-white font-medium text-center">JavaScript</p>
                    </div>
                    <div className="bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg shadow-lg p-4 w-40 h-48 flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png" 
                            alt="React Logo" 
                            className="w-24 h-24 object-contain rounded-md mb-4"
                        />
                        <p className="text-white font-medium text-center">React</p>
                    </div>
                </div>
            </div>
        </>
    );
}
