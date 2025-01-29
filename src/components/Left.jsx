import { EDUCATION } from "../data/edu";
import profileIMG from "../assets/martin_profile1.jpg";

const Left = () => {
  return (
    <div className="flex flex-col w-[25%] bg-[#EFEFF0] p-4">
      <div className="w-[80%] h-auto rounded-full mx-auto pb-10 pt-6">
        <img src={profileIMG} alt="" className="cover rounded-full" />
      </div>
      <div>
        <p className="border-y-2 border-black py-2 font-semibold">EDUCATION</p>
        {EDUCATION.map((data, index) => {
          return (
            <div key={index} className="space-y-2">
              <p className="uppercase text-md font-semibold">{data.title}</p>
              <p className="text-[#AF9661] text-sm">{data.school}</p>
              <p className="text-[#AF9661] text-md uppercase">
                year:{data.year}
              </p>
            </div>
          );
        })}
      </div>
      <div>
        <p className="border-y-2 border-black py-2 font-semibold">LANGUAGES</p>
      </div>
      <div>
        <p className="border-y-2 border-black py-2 font-semibold">
          PERSONAL DETAILS
        </p>
      </div>
    </div>
  );
};

export default Left;
