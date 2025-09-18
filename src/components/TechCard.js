import Image from "next/image"

export default function TechCard ({ title, imageSrc, imageAlt })  {
return(

  <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
    <div className=" mb-3 rounded-xl overflow-hidden bg-gray-100">
      <Image
        src={imageSrc} 
        alt={imageAlt}
        width={500}
        height={500}
        className="w-full object-cover"
      />
    </div>
    <h3 className="text-gray-800 font-medium text-center text-sm">
      {title}
    </h3>
  </div>)
};
