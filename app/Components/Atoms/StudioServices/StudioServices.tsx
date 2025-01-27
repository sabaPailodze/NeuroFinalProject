import React from 'react';
import Image from 'next/image';

interface StudioServicesProps {
  pNumber: string,
  hText: string,
  imgSrc: string
}

const StudioServices = ({pNumber, hText, imgSrc}:StudioServicesProps) => {
  return (
    <div className="relative inline-block w-1/2  text-white font-sans">
      <div className="group relative mb-2 cursor-pointer p-3 text-[31px] font-bold">
        <div className='flex gap-6 items-center'>
          <p className='text-white text-[14px] font-supreme font-normal opacity-40'>{pNumber}</p>
          <h3 className="group-hover:text-[#E5E548] tracking-[3px] uppercase">{hText}</h3>
        </div>
        <p className="w-full mt-6 bg-[#ffffff23] h-[0.2px] group-hover:bg-[#E5E548]"></p>
        <Image
          style={{
            clipPath: 'polygon(0% 20%, 20% 0%, 100% 0%, 100% 100%, 0% 100%)',
          }}
          width={100}
          height={100}
          src={imgSrc}
          alt="Website Image"
          className="absolute left-[150%] top-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default StudioServices;
