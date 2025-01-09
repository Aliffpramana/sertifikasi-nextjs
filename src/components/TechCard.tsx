import Image from "next/image";

type TechCard = {
    imageURL: string;
    techStack: string;
};

export default function TechCard({ imageURL, techStack }: TechCard) {
    return (
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 w-56 h-64 rounded-xl shadow-lg flex flex-col items-center justify-center p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div className="w-28 h-28 relative mb-4">
                <Image src={imageURL} alt={techStack} fill className="object-contain rounded-full border-4 border-gray-700" />
            </div>
            <p className="text-white text-center text-lg font-semibold">
                {techStack}
            </p>
        </div>
    );
}
