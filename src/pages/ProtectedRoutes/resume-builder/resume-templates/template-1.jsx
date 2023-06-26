export const TemplateOne = ({ data }) => {
  return (
    <div className="w-[560px] flex flex-row gap-4 bg-white">
      <div className="px-6 py-12 w-2/3 flex flex-col gap-4">
        <section className="flex flex-col gap-3">
          <h2 className="capitallize text-xl font-black">
            {data?.basicInfo.firstName && data?.basicInfo.lastName
              ? `${data?.basicInfo.firstName} ${data?.basicInfo.lastName}`
              : `${data?.basicInfo.firstName}`
              ? `${data?.basicInfo.firstName}`
              : data?.basicInfo.lastName
              ? `${data?.basicInfo.lastName}`
              : "Your Name"}
          </h2>
          <p className="text-xs capitalize text-neutral-300">
            {data?.basicInfo.profession
              ? data?.basicInfo.profession
              : "Your Profession"}
          </p>
        </section>

        <section>
          <h3 className="text-lg font-black">Profile</h3>
          <p className="text-xs leading-relaxed text-neutral-300">
            {data?.bio
              ? data?.bio
              : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ducimus cupiditate soluta eum alias quo consectetur, laudantium, accusantium, eveniet dolore accusamus labore est. Non dolorem iusto culpa officiis ipsam! Quia!"}
          </p>
        </section>

        <section>
          <h3 className="text-lg font-black mb-1">Employment History</h3>
          {data?.jobExperience.map((experience, index) => (
            <div key={index} className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-neutral-200">
                {experience.jobTitle === "" &&
                experience.company === "" &&
                (experience.state === "") & (experience.country === "")
                  ? "Carpenter, Konectin | Lagos, Nigeria"
                  : `${experience.jobTitle}, ${experience.company} | ${experience.state}
                , ${experience.country}`}
              </p>
              <span className="text-[10px] text-neutral-500">
                {experience.startMonth === "" && experience.startYear === ""
                  ? "November 2022 - Present"
                  : `${experience.startMonth} ${experience.startYear} - `}
                {experience.current
                  ? "Present"
                  : `${experience.endMonth} ${experience.endYear}`}
              </span>
              <div className="job-desc pl-6 text-xs">
                {experience.workDesc === "" ? (
                  <ul>
                    <li>
                      Compiled Lists to describe product/service offerings.
                    </li>
                    <li>
                      Directed hiring, training and performance evaluations of
                      marketing staff.
                    </li>
                    <li>
                      Developed pricing strategies to balance firm objectives
                      and customer satisfaction.
                    </li>
                  </ul>
                ) : (
                  <div
                    dangerouslySetInnerHTML={{ __html: experience.workDesc }}
                  />
                )}
              </div>
            </div>
          ))}
        </section>
        <section>
          <h3 className="text-lg font-black mb-1">Education</h3>
          {data?.education.map((edu, index) => (
            <div key={index}>
              <p className="text-sm font-bold text-neutral-200">
                {edu.degree === "" &&
                edu.schoolName === "" &&
                edu.state === "" &&
                edu.country === ""
                  ? "Connecticut CarpentersAprenticeship, Charter Oak State College, New Britain"
                  : `${edu.degree}, ${edu.schoolName} | ${edu.state}, ${edu.country}`}
              </p>
              <p className="text-[10px] text-neutral-500">
                {edu.startMonth === "" && edu.startYear === ""
                  ? "November 2022 - "
                  : `${edu.startMonth} ${edu.startYear} - `}
                {edu.graduated ? `${edu.endMonth} ${edu.endYear}` : "Present"}
              </p>
            </div>
          ))}
        </section>
        <section>
          <h3 className="text-lg font-black">Reference</h3>
        </section>
      </div>

      <div className="px-6 py-12 w-1/3 flex flex-col gap-6 item-center bg-primary-600">
        <section className="details">
          <h6 className="text-[#F5F5F5] text-lg leading-8">Details</h6>
          <p className="text-neutral-500 text-[10px] leading-4">
            {data?.basicInfo.state === "" && data?.basicInfo.country === ""
              ? "Your address"
              : `${data?.basicInfo.state}, ${data?.basicInfo.country}`}
          </p>
          <p className="text-neutral-500 text-[10px] leading-4">
            {data?.basicInfo.phoneNumber === ""
              ? "Your phone number"
              : data?.basicInfo.phoneNumber}
          </p>
          <p className="text-neutral-500 text-[10px] leading-4">
            {data?.basicInfo.email === "" ? "Your mail" : data?.basicInfo.email}
          </p>
        </section>

        <section className="skills">
          <h6 className="text-[#F5F5F5] text-lg leading-8">Skills</h6>
          <ul className="text-neutral-500 text-xs">
            {data?.skills.map((item, index) => {
              return (
                <li key={index}>
                  {item.skill === "" ? "HTML" : item.skill}
                  <div className="h-[3px] w-10/12 bg-gray-200 rounded-md mb-1 mt-[2px]"></div>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
};
