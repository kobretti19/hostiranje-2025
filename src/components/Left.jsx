import { EDUCATION } from "../data/edu";
import profileIMG from "../assets/martin_profile1.jpg";

const Left = () => {
  return (
    <div className="flex flex-col  max-w-[25%] bg-[#EFEFF0] p-4 px-8 text-[2rem]">
      <div className="w-[50%] h-auto rounded-full mx-auto pb-10 pt-6 ">
        <img src={profileIMG} alt="" className="cover rounded-full" />
      </div>
      <div className="space-y-6">
        <p className="border-y-2 border-black py-2 font-semibold">EDUCATION</p>
        {EDUCATION.map((data, index) => {
          return (
            <div key={index} className="space-y-2">
              <p className="uppercase text-xl font-semibold text-[2rem]">
                {data.title}
              </p>
              <p className="text-[#AF9661] text-[1.8rem] ">{data.school}</p>
              <p className="text-[#AF9661] text-[1.8rem] xs:text-xs uppercase">
                year:{data.year}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col ">
        <p className="border-y-2 border-black py-2 font-semibold">LANGUAGES</p>
        <p className="flex justify-between items-center">
          German
          <br />
          <span className="text-[#AF9661] text-[1.8rem] xs:text-xs ">
            Advanced High
          </span>
        </p>
        <p className="flex justify-between items-center">
          English:
          <span className="text-[#AF9661] text-[1.8rem] xs:text-xs ">
            Advanced High
          </span>
        </p>
        <p className="flex justify-between items-center">
          Macedonian:
          <span className="text-[#AF9661] text-[1.8rem] xs:text-xs ">
            Superior/Native
          </span>
        </p>
      </div>
      <div>
        <p className="border-y-2 border-black py-2 font-semibold">
          PERSONAL DETAILS
        </p>
        <p className="flex justify-between items-center">
          DATE OF BIRTH:
          <span className="text-[#AF9661] text-[1.8rem] xs:text-xs ">
            20.11.1989
          </span>
        </p>
        <p className="flex justify-between items-center">
          MARITAL STATUS:
          <span className="text-[#AF9661] text-[1.8rem] xs:text-xs ">
            Married
          </span>
        </p>
      </div>
    </div>
  );
};

export default Left;
