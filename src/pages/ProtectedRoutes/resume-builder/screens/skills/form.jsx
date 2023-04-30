// import React, { useState } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import { FaTrash, FaPlus } from "react-icons/fa";

// const SkillsForm = ({ skills }) => {
//   console.log(skills);
//   const [skillList, setSkillList] = useState(skills);
//   const [jobSkill, setJobSkill] = useState("");

//   const addSkill = () => {
//     setSkillList([
//       ...skillList,
//       {
//         skill: "",
//       },
//     ]);
//   };

//   const removeSkill = (index) => {
//     const list = [...skillList];
//     list.splice(index, 1);
//     setSkillList(list);
//   };

//   const handleDrop = (droppedItem) => {
//     // Ignore drop outside droppable container
//     if (!droppedItem.destination) return;
//     var updatedList = [...skillList];
//     // Remove dragged item
//     const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
//     // Add dropped item
//     updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
//     // Update State
//     setSkillList(updatedList);
//   };

//   return (
//     <div className="SkillsForm">
//       <DragDropContext onDragEnd={handleDrop}>
//         <Droppable droppableId="list-container">
//           {(provided) => (
//             <div
//               className="list-container h-fit max-h-80 border overflow-y-auto no-scrollbar mt-8"
//               {...provided.droppableProps}
//               ref={provided.innerRef}
//             >
//               {skillList.map((skill, index) => (
//                 <Draggable
//                   key={index}
//                   draggableId={index.toString()}
//                   index={index}
//                 >
//                   {(provided) => (
//                     <div
//                       className=" flex w-full justify-between items-center rounded-lg border border-[#b2b3b48a] font-extralight text-[#8C8C8F] mb-4 text-sm py-3 px-2 bg-white"
//                       ref={provided.innerRef}
//                       {...provided.dragHandleProps}
//                       {...provided.draggableProps}
//                     >
//                       <div className="flex items-center ">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           strokeWidth={1.5}
//                           stroke="currentColor"
//                           className="w-6 h-6 mr-3"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M3.75 9h16.5m-16.5 6.75h16.5"
//                           />
//                         </svg>
//                         <input
//                           type="text"
//                           value={skill}
//                           onChange={(e) => {
//                             setJobSkill(e.target.value);
//                             skillList[index].skill = e.target.value;
//                           }}
//                           className="text-sm w-full text-[#8C8C8F] outline-none border border-red-500"
//                         />
//                       </div>
//                       <FaTrash
//                         className=" cursor-pointer"
//                         onClick={() => removeSkill(index)}
//                       />
//                     </div>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       </DragDropContext>
//       <div className="mt-4">
//         <button
//           className="flex items-center border-none outline-none"
//           onClick={addSkill}
//         >
//           <div className=" bg-[#665d99] p-2 border rounded-full">
//             <FaPlus color="#f5f5f5" size="0.6rem" />{" "}
//           </div>
//           <span className=" ml-3  font-extrabold text-sm text-[#8c8c8f]">
//             Add another skill
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SkillsForm;
