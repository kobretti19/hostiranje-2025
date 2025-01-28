/* eslint-disable react/prop-types */
const Header = ({ title, proffesion }) => {
  return (
    <div className="flex flex-row justify-between m-10 p-12 rounded-xl h-[180px] bg-blue-500 text-white uppercase">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl">{title}</h2>
        <p>{proffesion}</p>
      </div>
      <div className="flex flex-col gap-4 justify-center">
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
