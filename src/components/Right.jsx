import { ABOUTME } from "../data/aboutMe";

const Right = () => {
  return (
    <div className="flex flex-col  max-w-[60%] mx-auto bg-white p-4  text-[2rem]">
      <div>
        <p className="border-y-2 border-black py-4 font-semibold mt-10">
          ABOUT ME
        </p>
        <p className="py-10 ">{ABOUTME[0]}</p>
      </div>
      <div>
        <p className="border-y-2 border-black py-4 font-semibold mt-10">
          WORK EXPERIENCE
        </p>
      </div>
      <div>
        <p className="border-y-2 border-black py-4 font-semibold mt-10">
          JAVASCRIPT PROJECTS
        </p>
      </div>
    </div>
  );
};

export default Right;
