import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid";

/* eslint-disable react/prop-types */
const Header = ({ title, proffesion }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full   p-[2%] xs:p-[2%]  h-auto bg-[#252E3E] text-white uppercase tracking-wider ">
      <div className="flex flex-col justify-center items-center space-y-4">
        <div className="text-[2.5rem]  text-[#AA9260] font-semibold">
          <p>M|P</p>
        </div>
        <div className="text-[3.5rem] xs:text-[1rem] ">{title}</div>
        <div className="text-[1.8rem] text-[#AA9260]  ">{proffesion}</div>
      </div>

      <div className="flex flex-row justify-around items-top w-full  gap-y-6 text-[2.0rem] mt-10  ">
        <div className="flex flex-col items-center w-1/3  ">
          <MapPinIcon className="w-10 h-auto text-[#AA9260]" />
          <p>Eigerweg 5,3177</p>
          <p> Laupen BE Switzerland</p>
        </div>
        <div className="flex flex-col items-center w-1/3 border-x-2 border-white">
          <PhoneIcon className="w-10 h-auto text-[#AA9260]" />
          <p>+41 78 631 42 02</p>
        </div>
        <div className="flex flex-col items-center w-1/3 ">
          <EnvelopeIcon className="w-10 h-auto text-[#AA9260]" />
          <p className="lowercase">martinpetroski@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
