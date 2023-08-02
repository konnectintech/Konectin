import { useRef, useEffect, useState } from "react";
import * as MdIcons from "react-icons/md";

export const TemplateTwo = ({ data }) => {
  const page = useRef(null);
  const parentPage = useRef(null);

  const [pageMax, setPageMax] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const pageContainer = page.current;
    setPageMax(Math.ceil(pageContainer.clientHeight / 640));
  }, []);

  const nextPage = () => {
    if (pageNumber !== pageMax) setPageNumber((prev) => prev + 1);
  };

  const previousPage = () => {
    if (pageNumber !== 1) setPageNumber((prev) => prev - 1);
  };

  useEffect(() => {
    parentPage.current.scrollTo({
      top: (pageNumber - 1) * 635,
    });
  }, [pageNumber]);

  return (
    <div className="doc-body">
      <div className="parent-container top-head no-scrollbar">
        <div className="side-content"></div>
        <div className="main-content"></div>
      </div>

      <div id="template">
        <div>
          <div>
            <style>
              {`
                * {
                  margin: 0;
                  padding: 0;
                }

                @page  {
                  margin: 0;
                  size: letter; /*or width then height 150mm 50mm*/
                }
            
                h1,
                h2,
                h3,
                h4 {
                  font-family: "Merriweather", sans-serif;
                }
            
                .doc-body {
                  position: relative;
                }
            
                .parent-container {
                  position: relative;
                  width: 100%;
                  max-width: 515px;
                  min-width: 460px;
                  height: 810px;
                  display: flex;
                  display: -webkit-box;
                  align-items: items-stretch;
                  background: white;
                }
            
                .top-head {
                  max-width: 560px;
                  height: 10px;
                }
            
                .main-content {
                  height: max-content;
                  display: flex;
                  flex-direction: column;
                  width: 66.666667%;
                  padding: 1rem 1.5rem;
                }

                .main-content > section {
                  -webkit-box-flex: 1;
                  -webkit-flex: 1;
                  flex: 1;
                  margin-top: .5rem;
                }

                .main-content > section:first-child {
                  margin-top: 0;
                }
            
                .side-content {
                  display: flex;
                  flex-direction: column;
                  background: #3D008B;
                  width: 33.333333%;
                  height: ${pageMax * 100}%;
                  padding: 1rem;
                }

                .side-content > section {
                  margin-top: 1.5rem;
                }

                .side-content > section:first-child {
                  margin-top: 0;
                }
            
                .top-head .side-content {
                  height: 10px;
                  padding: 0;
                }
            
                .sub-section {
                  display: flex;
                  flex-direction: column;
                }

                .sub-section > div,.sub-section > p,.sub-section > h3,.sub-section > h6 {
                  margin-top: 6px;
                }
            
                .capitalize {
                  text-transform: capitalize;
                }

                .contact-header {
                  font-size: 1rem;
                  color: #fff;
                  line-height: 2rem;
                  padding-bottom: .4rem;
                  border-bottom: 1.5px solid #fff;
                  margin-bottom: 1rem;
                }

                .details {
                  display: flex;
                  flex-direction: column;
                }

                .details > div {
                  margin-top: 20px;
                }

                .details > div:first-child {
                  margin-top: 0;
                }
            
                .headings {
                  font-size: 18px;
                  font-weight: 900;
                }
            
                .smallest-text {
                  font-size: 10px;
                }
            
                .text-white {
                  color: white;
                }
            
                .text-neutral-200 {
                  color: rgba(63, 64, 68,1);
                }
            
                .text-neutral-300 {
                  color: rgb(102, 102, 106);
                }
            
                .text-neutral-500 {
                  color: rgb(178, 179, 180);
                }
            
                .leading-relaxed {
                  line-height: 1.625;
                }
            
                .leading-4 {
                  line-height: 1rem;
                }
            
                .leading-8 {
                  line-height: 2rem;
                }
            
                .list-disc div ul,
                .list-disc {
                  list-style-type: disc;
                  margin: 0;
                  padding: 0;
                }

                .list-none div ul,
                .list-none {
                  display: block;
                  list-style-type: none;
                  margin: 0;
                  padding: 0;
                }
                
                .list-none div {
                  display: inline;
                }
            
                .small-text {
                  font-size: 0.875rem;
                  line-height: 1.25rem;
                  font-weight: bold;
                }

                .mb-2 {
                  margin-bottom: 0.5rem;
                }

                .ps-4 {
                  padding-inline-start: 1rem/* 16px */;
                }

                .job-desc {
                  padding-left: 1.5rem;
                }
            `}
            </style>
          </div>

          <div
            ref={parentPage}
            className="parent-container !h-[640px] !w-full overflow-y-scroll no-scrollbar pointer-events-none"
          >
            <div className="side-content text-white">
              <section>
                {(data.basicInfo.state ||
                  data.basicInfo.country ||
                  data.basicInfo.city ||
                  data.basicInfo.zipCode ||
                  data.basicInfo.email ||
                  data.basicInfo.phoneNumber) && (
                  <>
                    <h3 className="contact-header">Contact</h3>

                    <div className="details smallest-text">
                      {data.basicInfo.phoneNumber && (
                        <div>
                          Phone
                          <p className="text-neutral-500 leading-4">
                            {data.basicInfo.phoneNumber}
                          </p>
                        </div>
                      )}

                      {data.basicInfo.email && (
                        <div>
                          Email
                          <p className="text-neutral-500 leading-4">
                            {data.basicInfo.email}
                          </p>
                        </div>
                      )}

                      {(data.basicInfo.state ||
                        data.basicInfo.country ||
                        data.basicInfo.city ||
                        data.basicInfo.zipCode) && (
                        <div>
                          Address
                          <p className="text-neutral-500 leading-4">
                            {data.basicInfo.zipCode && data.basicInfo.zipCode}

                            {data.basicInfo.zipCode &&
                              data.basicInfo.city &&
                              ", "}

                            {data.basicInfo.city && data.basicInfo.city}

                            {(data.basicInfo.zipCode || data.basicInfo.city) &&
                              data.basicInfo.state && <br />}

                            {data.basicInfo.state && data.basicInfo.state}

                            {data.basicInfo.state &&
                              data.basicInfo.country &&
                              ", "}

                            {data.basicInfo.country && data.basicInfo.country}
                          </p>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </section>

              {data.education.length >= 1 && (
                <section>
                  <h3 className="contact-header">Education</h3>
                  <div className="details smallest-text text-white">
                    {data?.education.map((edu, index) => (
                      <div className="sub-section" key={index}>
                        {edu?.month && edu?.year && (
                          <p>
                            {edu?.month && edu.month}
                            {edu?.month && edu?.year && " "}
                            {edu?.year && edu.year}
                          </p>
                        )}

                        {edu?.relevantCourses &&
                          edu?.relevantCourses?.map(
                            (item, index) =>
                              item !== "" && <p key={index}>{item}</p>
                          )}

                        {edu?.schoolName && <p>{edu.schoolName}</p>}

                        {edu?.degree && <p>{edu.degree}</p>}

                        {edu?.state && edu?.country && (
                          <p>
                            {edu?.state && edu?.state}
                            {edu?.state && edu?.country && ", "}

                            {edu?.country && edu?.country}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {data.skills.length >= 1 && (
                <section className="skills">
                  <h3 className="contact-header">Skills</h3>
                  <ul className="smallest-text capitalize sub-section list-disc job-desc">
                    {data.skills.map((item, index) => (
                      <li key={index} className="mb-2">
                        {item === "" ? `Skill ${index + 1}` : item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            <div ref={page} className="main-content">
              <section className="sub-section">
                <h2 className="capitalize font-black headings">
                  {data.basicInfo.firstName && data.basicInfo.lastName
                    ? `${data.basicInfo.firstName} ${data.basicInfo.lastName}`
                    : data.basicInfo.firstName
                    ? data.basicInfo.firstName
                    : data.basicInfo.lastName
                    ? data.basicInfo.lastName
                    : "Your Name"}
                </h2>
                <p className="small-text capitalize text-neutral-300">
                  {data.basicInfo.profession
                    ? data.basicInfo.profession
                    : "Your Profession"}
                </p>
              </section>

              {data.bio && (
                <section className="smallest-text leading-relaxed list-none text-neutral-300">
                  <div dangerouslySetInnerHTML={{ __html: data.bio }} />
                </section>
              )}

              {!data.currentEditedJob <= 0 && (
                <section className="details">
                  {data.jobExperience.map((experience, index) => (
                    <div key={index} className="sub-section">
                      <h3 className="headings small-text">Experience</h3>

                      {(experience.startYear ||
                        experience.endYear ||
                        experience.current ||
                        experience.state ||
                        experience.city ||
                        experience.country) && (
                        <div className="smallest-text">
                          {(experience.startYear ||
                            experience.endYear ||
                            experience.current) && (
                            <p>
                              {experience.startYear !== "" &&
                                experience.startYear}

                              {experience.current || experience.endYear === ""
                                ? " - Present"
                                : ` - ${experience.endYear}`}
                            </p>
                          )}

                          {(experience.state ||
                            experience.city ||
                            experience.country) && (
                            <p>
                              {experience.city && experience.city}

                              {experience.city &&
                                experience.state &&
                                ` ${experience.state}`}

                              {experience.state &&
                                experience.country &&
                                ` ${experience.country}`}
                            </p>
                          )}
                        </div>
                      )}

                      {(experience.jobTitle || experience.company) && (
                        <p className="small-text font-semibold text-neutral-200">
                          {experience.jobTitle}

                          {(experience.jobTitle || experience.company) && ", "}

                          {experience.company && experience.company}
                        </p>
                      )}

                      <div className="list-none smallest-text">
                        {experience.workDesc !== "" && (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: experience.workDesc,
                            }}
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </section>
              )}

              {/* <section>
                <h3 className="headings">Reference</h3>
              </section> */}
            </div>
          </div>
        </div>
      </div>

      <div className="parent-container top-head no-scrollbar">
        <div className="side-content"></div>
        <div className="main-content"></div>
      </div>

      <div className="flex w-full justify-end items-center gap-2 mt-3 text-neutral-300">
        <MdIcons.MdArrowBackIos
          onClick={previousPage}
          size="0.6rem"
          className="cursor-pointer text-neutral-200"
        />
        <span className="text-xs">
          {pageNumber} of {pageMax}
        </span>
        <MdIcons.MdArrowForwardIos
          onClick={nextPage}
          size="0.6rem"
          className="text-neutral-200 cursor-pointer"
        />
      </div>
    </div>
  );
};
