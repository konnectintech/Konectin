/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FaTrash, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavigationButton from "../navigationButton";
import SelectedTemplates from "../../resume-templates";

const Skills = ({ data, updateResume }) => {
  const [skillList, setSkillList] = useState(data.skills);
  const navigate = useNavigate();

  const addSkill = () => {
    setSkillList([...skillList, { name: "", lvl: "" }]);
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
          <br />
          Leave expertise field blank if not wanted
        </p>

        <div className="max-w-sm pb-12">
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
                          className="flex gap-2 items-stretch justify-between font-extralight text-neutral-400 mb-4 text-sm capitalize"
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                        >
                          <div className="flex w-full justify-between items-center rounded-lg border border-neutral-500 py-3 px-2 bg-white">
                            <div className="flex items-center">
                              =
                              <input
                                type="text"
                                value={skill.name}
                                onChange={(e) =>
                                  setSkillList((prev) =>
                                    prev.map((obj, id) =>
                                      id === index
                                        ? { ...obj, name: e.target.value }
                                        : obj
                                    )
                                  )
                                }
                                className="w-full outline-none pl-3"
                              />
                            </div>
                            <FaTrash
                              className="cursor-pointer"
                              onClick={() => removeSkill(index)}
                            />
                          </div>
                          <div className="flex justify-center items-center rounded-lg border border-neutral-500 py-3 px-2 bg-white">
                            <input
                              type="text"
                              value={skill.lvl}
                              placeholder="0-100"
                              onChange={(e) => {
                                const replaced =
                                  e.target.value <= 100
                                    ? e.target.value.replace(/[^0-9]/, "")
                                    : e.target.value.replace(/[1-9][0-9]/, "");

                                e.target.value = replaced.trim();

                                setSkillList((prev) =>
                                  prev.map((obj, id) =>
                                    id === index
                                      ? { ...obj, lvl: e.target.value }
                                      : obj
                                  )
                                );
                              }}
                              maxLength="3"
                              className="text-center w-[30px] outline-none"
                            />
                          </div>
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
            className="flex gap-2 mt-2 items-center cursor-pointer text-neutral-400"
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

      <div className="max-md:hidden">
        <SelectedTemplates data={data} />
      </div>
    </div>
  );
};

export default Skills;
