import { useRef, useEffect, useState } from "react";
import * as MdIcons from "react-icons/md";
import BasicInfo from "./basicInfo";
import Contacts from "./contacts";
import Profile from "./profile";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import { useLocation } from "react-router-dom";

function TemplateOneA(data) {
  const page = useRef(null);
  const parentPage = useRef(null);
  const { pathname } = useLocation();

  const [pageMax, setPageMax] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const pageContainer = page.current;
    const pageX = Math.ceil(pageContainer.clientHeight / 640);
    setPageMax(pageX);
    setPageNumber(pageX);
  }, [pathname, data]);

  const nextPage = () => {
    if (pageNumber !== pageMax) setPageNumber((prev) => prev + 1);
  };

  const previousPage = () => {
    if (pageNumber !== 1) setPageNumber((prev) => prev - 1);
  };

  useEffect(() => {
    parentPage.current.scrollTo({
      top: (pageNumber - 1) * 640,
    });
  }, [pageNumber]);

  return (
    <div className="doc-body">
      <style>
        {`
        .doc-body .adjuster {
          width: 1px;
          height: ${pageMax * 640}px;
        }
    `}
      </style>

      <div id="template">
        <div className="doc-body">
          <div>
            <style>
              {`
                @import url('https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&family=IBM+Plex+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

                .doc-body * {
                  margin: 0;
                  padding: 0;
                  font-size: 11px;
                  font-family: "Hind", sans-serif;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 19px;
                  color: #212121;
                }

                .doc-body {
                  position: relative;
                }

                .doc-body .parent-container {
                  position: relative;
                  width: 100%;
                  max-width: 560px;
                  min-width: 460px;
                  height: 810px;
                  display: flex;
                  align-items: stretch;
                  background: white;
                }

                .doc-body p, .doc-body span, .doc-body  ul li {
                  color: #7a7a7a;
                }

                .doc-body .top-head {
                  max-width: 560px;
                  height: 10px;
                  background:#ffffff
                }

                .doc-body .parent-container {
                  position: relative;
                  width: 100%;
                  max-width: 560px;
                  min-width: 460px;
                  height: 810px;
                  display: flex;
                  align-items: stretch;
                  background: white;
                }


                .doc-body h1,
                .doc-body h2,
                .doc-body h3,
                .doc-body h4 {
                  font-family: "IBM Plex Sans", sans-serif;
                  opacity: 1;
                }

                .doc-body h1 {   
                  font-size: 48px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 65px;
                }

                .doc-body h2 {      
                  font-size: 14px;
                  font-weight: 700;
                  line-height: 15px;
                  font-family:poppins;
                }

                .doc-body h3 {
                  font-weight: 700;
                  line-height: 15px;
                  text-transform:capitalize;
                }
                
              
            `}
            </style>
          </div>

          {/* Use h-full and then control with max h */}
          <div
            ref={parentPage}
            className="parent-container !h-full max-h-[640px] !w-full overflow-y-scroll no-scrollbar pointer-events-none"
          >
            <div ref={page} className="real-content h-full w-full">
              <Contacts data={data?.basicInfo} />
              <BasicInfo data={data?.basicInfo} theme={data?.theme} />
              <Profile data={data?.bio} />
              <Education
                education={data?.education}
                currentEditedEducation={data.currentEditedEducation}
              />
              <Experience
                jobExperience={data?.jobExperience}
                currentEditedJob={data.currentEditedJob}
              />
              <Skills data={data?.skills} />
            </div>
            <div className="adjuster" />
          </div>
        </div>
      </div>

      <div className="top-head no-scrollbar">
        <div className="main-content"></div>
      </div>

      <div className="flex w-full justify-end items-center gap-2 !mt-4 text-neutral-300">
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
}

export default TemplateOneA;
