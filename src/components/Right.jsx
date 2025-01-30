import { ABOUTME } from "../data/aboutMe";
import { EXPIRIENCE } from "../data/expirience";

const Right = () => {
  return (
    <div className="flex flex-col  max-w-[60%] mx-auto bg-white p-4  text-[2rem]">
      <div>
        <p className="border-y-2 border-black py-4 font-semibold mt-10">
          ABOUT ME
        </p>
        <p className="py-10 ">{ABOUTME[0]}</p>
      </div>
      <p className="border-y-2 border-black py-4 font-semibold mt-10">
        WORK EXPERIENCE
      </p>
      <div className="flex flex-row">
        <div className="flex flex-col justify-between w-1/3">
          {EXPIRIENCE.map((job, index) => (
            <ol key={index}>
              <li>{job.employer}</li>
            </ol>
          ))}
        </div>
        <div className="w-2/3">
          {EXPIRIENCE.map((job, index) => (
            <ol key={index} className="flex flex-col">
              <li>{job.description}</li>
            </ol>
          ))}
        </div>
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
