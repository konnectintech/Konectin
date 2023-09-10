function Skills({ data }) {
  return (
    data.length >= 1 && (
      <section className="sub-section p-4">
        <h2>Soft Skills</h2>
        <div>
          <ul className=" list-none ps-4">
            {data.map((item, index) => (
              <li key={index} className="">
                <div className="separated-div relative">
                  <h3 className="capitalize">
                    {item === "" ? `Skill ${index + 1}` : item.name}
                  </h3>
                  <h4 className="mr-no">
                    <span>
                      {item.lvl <= 70 && item.lvl > 40
                        ? "Proficient"
                        : item.lvl <= 40
                        ? "Novice"
                        : "Expert"}
                    </span>
                  </h4>
                </div>
                <input type="range" className="skills__range" value="78" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  );
}

export default Skills;


// function Skills({ data }) {
//   return (
//     data.length >= 1 && (
//       <section className="section">
//         <style>
//           {`
//           .doc-body .skills.separated-div, .separated-div .separated-div {
//             display: -webkit-flex;
//             -webkit-flex-wrap: wrap;
//           }

//           .doc-body .separated-div span, .doc-body .separated-div div:nth-child(even) {
//             margin-left: auto;
//           }

//           .doc-body .separated-div div {
//             width: 45%;
//             margin-top: 6px;
//           }

//           .doc-body .separated-div div:nth-child(2), .separated-div div:first-child {
//             margin-top: 0px;
//           }

//           .doc-body .mb-2 {
//             margin-bottom: 0.5rem/* 8px */;
//           }
//       `}
//         </style>

//         <div className="main-content pt-4">
//           <div className=" list-none skills">
//             {data.map((item, index) => (
//               <div key={index} className="mb-2 separated-div">
//                 <h3>{item.name === "" ? `Skill ${index + 1}` : item.name}</h3>
//                 {item.lvl !== "" && (
//                   <span>
//                     {item.lvl <= 70 && item.lvl > 40
//                       ? "Proficient"
//                       : item.lvl <= 40
//                       ? "Novice"
//                       : "Expert"}
//                   </span>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     )
//   );
// }

// export default Skills;
