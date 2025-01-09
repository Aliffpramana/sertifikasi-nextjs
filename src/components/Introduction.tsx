import Image from 'next/image';

export default function Introduction() {
    return (
        <>
            <div className="w-screen h-auto bg-gradient-to-b from-slate-800 to-gray-900 p-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                    {/* Text Section */}
                    <div>
                        <p className="text-[#b3fd3d] text-2xl font-bold mb-4">Teknik Informatika</p>
                        <h2 className="text-5xl md:text-7xl text-white font-extrabold leading-tight">
                            Hello, Im <br /> Aliff Adhipramana
                        </h2>
                        <p className="text-white text-lg mt-6 max-w-lg">
                            Im a student of Teknik Informatika at Sekolah Tinggi Teknologi Indonesia, Tanjungpinang. 
                            Passionate about technology, programming, and creating innovative solutions.
                        </p>
                        <div className="mt-8 flex space-x-4">
                            <button className="px-6 py-3 bg-[#b3fd3d] text-slate-900 rounded-lg font-semibold shadow-lg hover:bg-[#b0d97c] transition">
                                Contact Me
                            </button>
                            <button className="px-6 py-3 bg-transparent border border-[#b3fd3d] text-[#D3EE98] rounded-lg font-semibold hover:bg-[#D3EE98] hover:text-slate-900 transition">
                                Learn More
                            </button>
                        </div>
                    </div>
                    {/* Image Section */}
                    <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
                        <Image
                            src={'/img/aliff.jpg'}
                            alt='Aliff Adhipramana'
                            fill={true}
                            priority={true}
                            className="rounded-3xl object-cover shadow-lg hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
