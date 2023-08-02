/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FaTrash, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavigationButton from "../navigationButton";

const Skills = ({ data, template, updateResume }) => {
  const [skillList, setSkillList] = useState(data.skills);
  const navigate = useNavigate();

  const addSkill = () => {
    setSkillList([...skillList, ""]);
  };

  const removeSkill = (index) => {
    const list = [...skillList];
    list.splice(index, 1);
    setSkillList(list);
  };

  useEffect(() => {
    updateResume((prev) => ({
      ...prev,
      skills: skillList,
    }));
  }, [skillList]);

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/resume/builder/bio");
  };

  return (
    <div className="max-w-6xl flex flex-col md:flex-row justify-between mx-auto md:gap-20">
      <div className="flex flex-col w-full">
        <h2 className="max-w-[30ch] text-xl md:text-3xl leading-tight font-semibold md:leading-snug">
          Skills
        </h2>
        <p className="font-extralight text-neutral-300 text-sm tracking-[-0.01rem] mt-3 mb-5max-w-2xl">
          Try to add 6-10 skills that are relevant to your desired job.
        </p>

        <div className="max-w-sm">
          <DragDropContext onDragEnd={handleDrop}>
            <Droppable droppableId="list-container">
              {(provided) => (
                <div
                  className="list-container h-fit max-h-80 overflow-y-auto no-scrollbar mt-8"
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
                          className="flex w-full justify-between items-center rounded-lg border border-neutral-500 font-extralight text-neutral-400 mb-4 text-sm py-3 px-2 bg-white"
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                        >
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-3 h-6 mr-3"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 9h16.5m-16.5 6.75h16.5"
                              />
                            </svg>
                            <input
                              type="text"
                              value={skill}
                              onChange={(e) =>
                                setSkillList((prev) =>
                                  prev.map((obj, id) =>
                                    id === index ? e.target.value : obj
                                  )
                                )
                              }
                              className="text-sm w-full capitalize text-neutral-400 outline-none"
                            />
                          </div>
                          <FaTrash
                            className="cursor-pointer"
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
          <div
            className="flex gap-2 items-center cursor-pointer text-neutral-400"
            onClick={addSkill}
          >
            <div className="bg-primary-400 text-neutral-1000 w-6 h-6 flex items-center justify-center rounded-full">
              <FaPlus size="0.6rem" />
            </div>
            <span className="font-extrabold text-sm">Add a skill</span>
          </div>
        </div>

        <NavigationButton
          back={() => navigate("/resume/builder/education")}
          cont={handleSubmit}
        />

        <Link
          to="/resume/builder/bio"
          className="text-secondary-600 text-sm font-extralight tracking-[0.02rem] underline mx-auto mt-8"
        >
          Skip this step
        </Link>
      </div>

      <div className="max-md:hidden">{template()}</div>
    </div>
  );
};

export default Skills;
