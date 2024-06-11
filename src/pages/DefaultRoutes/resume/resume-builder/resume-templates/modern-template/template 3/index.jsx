import { useRef, useEffect, useState } from "react";
import * as MdIcons from "react-icons/md";
import BasicInfo from "./basicInfo";
import Profile from "./profile";
import Education from "./education";
import Skills from "./skills";
import Experience from "./experience";
import Contacts from "./contacts";
import { useLocation } from "react-router-dom";

function TemplateThree(data) {
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
    <div className="three-modern">
      <style>
        {`
          .three-modern .adjuster {
            width: 1px;
            height: ${pageMax * 1056}px;
          }
      `}
      </style>

      <div id="template">
        <div className="three-modern">
          <div>
            <style>
              {`
                @import url('https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&family=IBM+Plex+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

                .three-modern * {
                  margin: 0;
                  padding: 0;
                  font-size: 16px;
                  font-family: "Hind", sans-serif;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 21px;
                  color: #212121;
                }
            
                .three-modern {
                  position: relative;
                }
            
                .three-modern .parent-container {
                  position: relative;
                  width: 100%;
                  max-width: 816px;
                  height: 1056px;
                  display: flex;
                  align-items: stretch;
                  background: white;
                  padding: 0 19.5px;
                }

                .three-modern p, .three-modern a, .three-modern span, .three-modern  ul li {
                  color: #7a7a7a;
                }

                .three-modern h1,
                .three-modern h2,
                .three-modern h3,
                .three-modern h4 {
                  font-family: "IBM Plex Sans", sans-serif;
                  opacity: 1;
                }

                .three-modern h1 {   
                  font-size: 28px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 27px;
                  margin-bottom: 10px;
                }

                .three-modern h2 {      
                  font-size: 22px;
                  font-weight: 700;
                  line-height: 15px;
                  margin: 30px 0;
                }
                
                .three-modern h3 {
                  font-size: 18px;
                  font-weight: 600;
                  line-height: 20px;
                  margin-bottom: 6px;
                }

                .three-modern .page {
                  display: flex;
                  flex-direction: column;
                  min-height: 1056px;
                }

                .three-modern .top-head {
                  max-width: 816px;
                  height: 10px;
                }

                .three-modern .section {
                  display: -webkit-box;
                  display: flex;
                  align-items: stretch;
                  flex-grow: 1;
                }
            
                .three-modern .main-content {
                  height: 100%;
                  display: flex;
                  flex-direction: column;
                  width: calc(408px - 1rem - 19.5px);
                  padding-right: 1rem;
                }
                
                .three-modern .section .main-content {
                  border-right: 1px solid rgb(219, 219, 219);
                }
                
                .three-modern .side-content {
                  display: flex;
                  flex-direction: column;
                  width: calc(408px - 1rem - 19.5px);
                  padding-left: 1rem;
                }
                
                .three-modern .section .side-content {
                  border-left: 1px solid rgb(219, 219, 219);
                }

                .three-modern .sub-section > div, .three-modern .sub-section > p {
                  -webkit-box-flex: 1;
                  -webkit-flex: 1;
                  flex: 1;
                  margin-top: 4px;
                }

                .three-modern .sub-section > div:first-child, .three-modern .sub-section > p:first-child {
                  margin-top: 0;
                }

                .three-modern .temp-head {
                  width: calc(816px - 39px);
                  margin-top: 20px;
                  display: -webkit-box;
                  padding-bottom: 20px;
                  border-bottom: 1px solid rgb(219, 219, 219);
                }

                .three-modern .temp-head section:first-child {
                  width: 60%;
                }

                .three-modern .temp-head .contacts {
                  text-align: left;
                }

                .capitalize {
                  text-transform: capitalize;
                }
            
                .three-modern .list-disc div ul,
                .three-modern .list-disc {
                  list-style-type: disc;
                  margin: 0;
                  padding: 0;
                }

                .three-modern .list-none div ul,
                .three-modern .list-none {
                  list-style-type: none;
                  margin: 0;
                  padding: 0;
                }

                .three-modern .mt-4 {
                  margin-top: 1rem/* 16px */;
                }

                .three-modern .mt-2 {
                  margin-top: 0.5rem/* 8px */;
                }

                .three-modern .w-full {
                  width: 100%;
                }
                
                .three-modern .ps-4 {
                  padding-left: 1rem/* 16px */;
                }
                
                .three-modern .separated-div {
                  display: -webkit-flex;
                  -webkit-flex-wrap: wrap;
                }

                .three-modern .half-pass {
                  display: -webkit-box;
                }

                .three-modern .skills.separated-div span, .three-modern .separated-div div:nth-child(even) {
                  margin-left: auto;
                }

                .three-modern .separated-div div {
                  width: 45%;
                  margin-top: 6px;
                }
                
                .three-modern .half-pass span {
                  display: block;
                  width: max-content;
                  margin-right: 12px;
                }

                .three-modern .half-pass > div {
                  width: 80%;
                }

                .three-modern .separated-div div:nth-child(2), .separated-div div:first-child {
                  margin-top: 0px;
                }

                .three-modern .mb-2 {
                  margin-bottom: 0.5rem/* 8px */;
                }

                .three-modern .mt-4 {
                  margin-top: 1rem/* 16px */;
                }
                `}
            </style>
          </div>

          <div
            ref={parentPage}
            className="parent-container overflow-y-scroll no-scrollbar pointer-events-none"
          >
            <div ref={page} className="w-full page">
              <div className="temp-head">
                <BasicInfo data={data?.basicInfo} />
                <Contacts data={data?.basicInfo} />
              </div>
              <div className="section mt-4 h-max">
                <div className="main-content">
                  <Profile data={data?.bio} />
                  <Education
                    education={data?.education}
                    currentEditedEducation={data.currentEditedEducation}
                  />
                  <Skills data={data?.skills} />
                </div>
                <div className="side-content">
                  <Experience
                    jobExperience={data?.jobExperience}
                    currentEditedJob={data.currentEditedJob}
                  />
                </div>
              </div>
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

export default TemplateThree;
