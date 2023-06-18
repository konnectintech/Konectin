import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import SkillsForm from "./form";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FaTrash, FaPlus } from "react-icons/fa";
import { ResumeTemplateSample1Image } from "../../../../../assets";

const Skills = ({ data, template }) => {
  const [skillList, setSkillList] = useState(data.skills);
  const [jobSkill, setJobSkill] = useState("");
  const navigate = useNavigate();

  const addSkill = () => {
    setSkillList([
      ...skillList,
      {
        skill: "",
      },
    ]);
  };

  const removeSkill = (index) => {
    const list = [...skillList];
    list.splice(index, 1);
    setSkillList(list);
  };

  const handleDrop = (droppedItem) => {
    // Ignore drop outside droppable container
    if (!droppedItem.destination) return;
    var updatedList = [...skillList];
    // Remove dragged item
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    // Add dropped item
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    // Update State
    setSkillList(updatedList);
    console.log(jobSkill);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    data.skills = skillList;
    navigate("/resume/builder/preview");
  };

  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-start  md:mx-36">
      <div className="w-full flex flex-col md:flex-row md:justify-start md:gap-20">
        <div className="flex flex-col ">
          <h2 className="max-w-[30ch] text-xl md:text-3xl leading-tight font-semibold md:leading-snug">
            Skills
          </h2>
          <p className=" font-extralight text-[#66666a] text-sm tracking-[-0.01rem] mt-3 mb-5max-w-2xl">
            Try to add 6-10 skills that are relevant to your desired job.
          </p>

          <div className="SkillsForm">
            <DragDropContext onDragEnd={handleDrop}>
              <Droppable droppableId="list-container">
                {(provided) => (
                  <div
                    className="list-container h-fit max-h-80 border overflow-y-auto no-scrollbar mt-8"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {skillList.map((skill, index) => (
                      <Draggable
                        key={index}
                        draggableId={index.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className=" flex w-full justify-between items-center rounded-lg border border-[#b2b3b48a] font-extralight text-[#8C8C8F] mb-4 text-sm py-3 px-2 bg-white"
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                          >
                            <div className="flex items-center ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 mr-3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                                />
                              </svg>
                              <input
                                type="text"
                                value={skill.skill}
                                onChange={(e) => {
                                  setJobSkill(e.target.value);
                                  skillList[index].skill = e.target.value;
                                }}
                                className="text-sm w-full text-[#8C8C8F] outline-none"
                              />
                            </div>
                            <FaTrash
                              className=" cursor-pointer"
                              onClick={() => removeSkill(index)}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            <div className="mt-4">
              <button
                className="flex items-center border-none outline-none"
                onClick={addSkill}
              >
                <div className=" bg-[#665d99] p-2 border rounded-full">
                  <FaPlus color="#f5f5f5" size="0.6rem" />{" "}
                </div>
                <span className=" ml-3  font-extrabold text-sm text-[#8c8c8f]">
                  Add another skill
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className=" w-[500px] h-[350px] shadow-lg rounded-lg hidden md:block">
          {template()}
        </div>
      </div>

      <div className="max-w-xl w-full flex flex-col justify-center lg:mt-40 md:mt-8  gap-5 md:flex-row mx-auto bg-black">
        <button
          onClick={() => navigate(-1)}
          className="w-full md:w-fit max-w-xs border border-[#b2b3b48a] rounded-lg text-sm py-3 px-[4.5rem]"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full md:w-fit max-w-xs border border-[#b2b3b48a] rounded-lg text-sm text-[#f5f5f5] py-3 px-[4.5rem] bg-[#332A66]"
        >
          Continue
        </button>
      </div>
      <button
        onClick={() => navigate("/resume/builder/preview")}
        className="text-[#FC670B] text-sm font-extralight tracking-[0.02rem] underline mt-8 mx-auto"
      >
        Skip this step
      </button>
    </div>
  );
};

export default Skills;
