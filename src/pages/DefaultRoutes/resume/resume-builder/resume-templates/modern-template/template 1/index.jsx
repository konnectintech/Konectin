import { useRef, useEffect, useState } from "react";
import * as MdIcons from "react-icons/md";
import BasicInfo from "./basicInfo";
import Contacts from "./contacts";
import Profile from "./profile";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import { useLocation } from "react-router-dom";

function TemplateOne(data) {
  const page = useRef(null);
  const parentPage = useRef(null);
  const { pathname } = useLocation();

  const [pageMax, setPageMax] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const pageContainer = page.current;
    const pageX = Math.ceil(pageContainer.clientHeight / 1056);
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
      top: (pageNumber - 1) * 1056,
    });
  }, [pageNumber]);

  return (
    <div className="doc-body">
      <style>
        {`
        .doc-body .adjuster {
          width: 1px;
          height: ${pageMax * 1056}px;
        }
    `}
      </style>

      <div id="template">
        <div className="doc-body modern-1">
          <div>
            <style>
              {`
                @import url('https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&family=IBM+Plex+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

                .modern-1.doc-body * {
                  margin: 0;
                  padding: 0;
                  font-size: 16px;
                  font-family: ${data.theme.font}, sans-serif;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 21px;
                  color: #212121;
                }

                .modern-1.doc-body {
                  position: relative;
                }

                .modern-1.doc-body .parent-container {
                  position: relative;
                  width: 816px;
                  height: 1056px;
                  display: flex;
                  align-items: stretch;
                  background: white;
                  padding-top: 2rem;
                  // padding: 2rem 4rem 0 1.5rem;
                }

                .modern-1.doc-body p, .modern-1.doc-body a, .modern-1.doc-body span, .modern-1.doc-body  ul li {
                  color: #7a7a7a;
                }

                .modern-1.doc-body h1,
                .modern-1.doc-body h2,
                .modern-1.doc-body h3,
                .modern-1.doc-body h4 {
                  font-family: "IBM Plex Sans", sans-serif;
                  opacity: 1;
                }

                .modern-1.doc-body h1 { 
                  font-size: 28px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 27px;
                  margin-bottom: 10px;
                }

                .modern-1.doc-body h2 {       
                  font-size: 20px;
                  font-weight: 700;
                  line-height: 15px;
                }

                .modern-1.doc-body h3 {
                  font-size: 17px;
                  font-weight: 600;
                  line-height: 20px;
                }
                
                .modern-1.doc-body .top-head {
                  height: 20px;
                }

                .modern-1.doc-body .section {
                  display: flex;
                  display: -webkit-box;
                  align-items: start;
                  width: 92%;
                  margin: 0px auto;
                }
            
                .modern-1.doc-body .main-content {
                  height: max-content;
                  width: 80%;
                  padding: 1rem 0 1rem 1rem;
                }
            
                .modern-1.doc-body .side-content {
                  width: 20%;
                  padding: 1rem 0;
                }

                .modern-1.doc-body .sub-section {
                  display: flex;
                  flex-direction: column;
                }

                .modern-1.doc-body .sub-section > div, .modern-1.doc-body .sub-section > p {
                  -webkit-box-flex: 1;
                  -webkit-flex: 1;
                  flex: 1;
                  margin-top: 4px;
                }

                .modern-1.doc-body .sub-section > div:first-child, .modern-1.doc-body .sub-section > p:first-child {
                  margin-top: 0;
                }

                .modern-1.doc-body .separated-div {
                  display: flex;
                  display: -webkit-flex;
                }
                
                .modern-1.doc-body ul.separated-div {
                  display: -webkit-flex;
                  -webkit-flex-wrap: wrap;
                }

                .modern-1.doc-body .separated-div p, .modern-1.doc-body .separated-div li:nth-child(even) {
                  margin-left: auto;
                }

                .modern-1.doc-body .separated-div li {
                  width: 50%;
                  margin-top: 6px;
                }

                .modern-1.doc-body .separated-div li:nth-child(2), .modern-1.doc-body .separated-div li:first-child {
                  margin-top: 0px;
                }
            
                .modern-1.doc-body .capitalize {
                  text-transform: capitalize;
                }
            
                .modern-1.doc-body .list-disc div ul,
                .modern-1.doc-body .list-disc {
                  list-style-type: disc;
                  margin: 0;
                  padding: 0;
                }

                .modern-1.doc-body .list-none div ul,
                .modern-1.doc-body .list-none {
                  list-style-type: none;
                  margin: 0;
                  padding: 0;
                }
            
                .modern-1.doc-body .job-desc {
                  padding-left: 1.5rem;
                }

                .modern-1.doc-body .job-desc ul li {
                  margin-bottom: .5rem;
                }

                .modern-1.doc-body .mb-2 {
                  margin-bottom: 0.5rem;
                }

                .modern-1.doc-body .ps-4 {
                  padding-left: 1rem/* 16px */;
                }
                
                .modern-1.doc-body .w-full {
                  width: 100%;
                }
            `}
            </style>
          </div>

          <div
            ref={parentPage}
            className="parent-container overflow-y-scroll no-scrollbar pointer-events-none"
          >
            <div ref={page} className="w-full">
              <BasicInfo data={data?.basicInfo} />
              <Contacts data={data?.basicInfo} />
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

      {pageMax > 1 && (
        <>
          <div className="parent-container top-head no-scrollbar">
            <div className="side-content"></div>
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
        </>
      )}
    </div>
  );
}

export default TemplateOne;
