/* eslint-disable react/prop-types */
const Header = ({ title, proffesion }) => {
  return (
    <div className="flex flex-row justify-between w-full   p-[6%] xs:p-[2%]  h-[180px] bg-[#252E3E] text-white uppercase ">
      <div className="flex flex-col gap-4 justify-center ">
        <p className="text-xl 2xl:text-4xl md:text-3xl xs:text-xs">{title}</p>
        <p className="text-xs 2xl:text-lg md:text-xl text-[#AA9260]">
          {proffesion}
        </p>
      </div>
      <div className="flex flex-col gap-4 justify-center text-xs 2xl:text-lg md:text-xl">
        <div>
          <p>Eigerweg 5</p>
          <p>3177, Laupen BE</p>
        </div>
        <div className="flex flex-col ">
          <p>+41 78 631 42 02</p>
          <p className="lowercase">martinpetroski@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
