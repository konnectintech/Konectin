import styles from "./template-1.module.css";
// import { FaBriefcase, FaGraduationCapl, FaP } from "react-icons/fa";

export const TemplateTwo = ({ data }) => {
  const {
    firstName,
    lastName,
    company,
    profession,
    phoneNumber,
    bio,
    state,
    country,
    email,

    skills,
  } = data;

  let capitalizedFirstName =
    firstName.charAt(0).toUpperCase() + firstName.slice(1);
  let capitalizedLastName =
    lastName.charAt(0).toUpperCase() + lastName.slice(1);

  return (
    <main
      className={`${styles.container} hidden lg:grid border border-gray-300`}
    >
      <div className={styles.left_section}>
        <section className="flex items-center">
          <div className="h-16 w-16 border border-gray-200 bg-gray-300 rounded-full"></div>
          <div className="ml-6">
            <h2 className=" text-xl font-black">{`${capitalizedFirstName} ${capitalizedLastName}`}</h2>
            <p className=" text-[12px] text-[#66666A]">{profession}</p>
          </div>
        </section>
        <section className="mt-8">
          <h3 className="text-lg font-black">Profile</h3>
          <p className="text-[13px] w-[70ch] font-extralight text-[#3F4044] mt-3">
            {bio}
          </p>
        </section>
        <section className="mt-8">
          <h3 className="text-lg font-black">Employement History</h3>
          <p className="mt-4 text-[13px] font-semibold text-[#3F4044]">
            Senior Product Designer, {company} | Lagos, Nigeria
          </p>
          <p className=" text-[10px] text-[#b2b3b4]">Jan 2021 - Mar 2022</p>
          <ul className="list-disc text-[#3f4044] text-[13px] font-thin ml-10 mt-2">
            <li>duty</li>
            <li>duty</li>
            <li>duty</li>
            <li>duty</li>
          </ul>
        </section>
        <section className="mt-8">
          <h3 className="text-lg font-black">Education</h3>
          <p className="mt-4 text-[13px] font-semibold text-[#3F4044]">
            Msc. Human Interaction, University of Lagos | Lagos, Nigeria
          </p>
          <p className=" text-[10px] text-[#b2b3b4]">Jan 2021 - Mar 2022</p>
        </section>
        <section className="mt-8">
          <h3 className="text-lg font-black">Reference</h3>
        </section>
      </div>
      <div className="flex flex-col item-center bg-[#072A4C] h-screen">
        <div className={styles.right_section}>
          <section className="mt-36 ml-8">
            <h6 className="text-[#F5F5F5] text-lg leading-8">Details</h6>
            {state && (
              <p className="text-[#b2b3b4] text-[10px] leading-4">
                {state}, {country}
              </p>
            )}
            <p className="text-[#b2b3b4] text-[10px] leading-4">
              {phoneNumber}
            </p>
            <p className="text-[#b2b3b4] text-[10px] leading-4">{email}</p>
          </section>
          <section className="mt-8 ml-8">
            <h6 className="text-[#F5F5F5] text-lg leading-8">Skills</h6>
            <ul className="text-[#b2b3b4] text-[12px]">
              {skills.map((skill, index) => {
                return (
                  <li key={index}>
                    {skill.skill}{" "}
                    <div className="h-[3px] w-10/12 bg-blue-400 rounded-md"></div>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
};
