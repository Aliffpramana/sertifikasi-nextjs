export default function Header() {
    return (
        <>
            <header className="w-screen p-6 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 shadow-lg flex justify-between items-center">
                <div className="text-white">
                    <h1 className="font-extrabold text-3xl tracking-wide">Aliff Adhipramana</h1>
                </div>
                <nav>
                    <ul className="flex space-x-8">
                        <li className="text-white text-lg font-medium cursor-pointer transition duration-300 hover:text-yellow-400">Home</li>
                        <li className="text-white text-lg font-medium cursor-pointer transition duration-300 hover:text-yellow-400">Tech</li>
                        <li className="text-white text-lg font-medium cursor-pointer transition duration-300 hover:text-yellow-400">Biography</li>
                        <li className="text-white text-lg font-medium cursor-pointer transition duration-300 hover:text-yellow-400">Contacts</li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
