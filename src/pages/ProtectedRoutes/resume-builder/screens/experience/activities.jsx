import { FaPlus, FaPen, FaTrash, FaCaretDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const JobActivities = ({ data, template }) => {
  const navigate = useNavigate();

  return (
    <main className="-mt-8 flex flex-col justify-between items-start mx-auto md:mx-16">
      <h2 className="-mt-6 max-w-[30ch] text-xl md:text-3xl leading-tight font-semibold md:leading-snug">
        Work Experience
      </h2>
      <p className=" text-[#66666a] text-sm tracking-[-0.01rem] mt-3 mb-5 max-w-2xl">
        Add, edit or delete your work experience.
      </p>
      <section className="w-full h-[400px] flex flex-col items-start mt-8 mx-auto">
        <div className="w-10/12 flex flex-col md:justify-between md:flex-row  mb-2">
          <p className="font-bold text-[#66666a] text-sm mb-4">
            Konectin | <span className="font-medium">Lagos, Lagos</span>
          </p>
        </div>
        <div className="w-10/12 h-[200px] border border-[#b2b3b48a] rounded-lg bg-white p-4">
          <div className="flex justify-between">
            <h3 className=" font-extrabold text-[#66666a] text-lg">
              Product Manager
            </h3>
            <div>
              <button className="mr-3">
                <FaPen color="#b2b3b4" size="1rem" />
              </button>
              <button>
                <FaTrash color="#b2b3b4" size="1rem" />
              </button>
            </div>
          </div>
          <p className=" font-light text-[#66666a] text-sm leading-3 mt-3">
            Jan 2021 - Mar 2022
          </p>
          <ul className=" text-[#8C8C8F] text-xs list-disc ml-5 mt-3">
            <li className=" mb-2">
              Compiled Lists to describe product/service offerings.
            </li>
            <li>
              Directed hiring, training and performance evaluations marketing
              staff.
            </li>
          </ul>
          <button className="text-[#b2b3b4] text-xs font-extralight flex items-center mt-4">
            Show more{" "}
            <FaCaretDown className="ml-1" color="#b2b3b4" size="0.5rem" />
          </button>
        </div>
        <div>
          <button className="flex items-center border-none outline-none mt-4 ">
            <div className=" bg-[#665d99] p-2 border rounded-full">
              <FaPlus color="#f5f5f5" size="0.6rem" />{" "}
            </div>
            <span className=" ml-3 font-extrabold text-sm text-[#8c8c8f]">
              Add Company
            </span>
          </button>
        </div>
      </section>
      {/* <div className=" hidden xl:ml-20 xl:flex">
          <div className="flex self-end w-[503px] rounded-lg">{template()}</div>
        </div> */}
      <div className="w-8/12 lg:max-w-4xl flex flex-col justify-center mx-auto mt-2 gap-5 md:flex-row">
        <button
          onClick={() => navigate(-1)}
          className="w-full border border-[#b2b3b48a] rounded-lg text-sm py-5 px-6 md:mr-4"
        >
          Back
        </button>
        <button
          onClick={() => navigate("/resume/builder/education")}
          className="w-full border border-[#b2b3b48a] rounded-lg text-sm text-[#f5f5f5] mx-auto py-5 px-6 bg-[#332A66]"
        >
          Continue
        </button>
      </div>
      <button
        onClick={() => navigate("/resume/builder/education")}
        className="text-[#FC670B] text-sm font-extralight tracking-[0.02rem] underline mx-auto mt-8"
      >
        Skip this step
      </button>
    </main>
  );
};

export default JobActivities;
