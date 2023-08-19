import { useRef, useEffect, useState } from "react";
import * as MdIcons from "react-icons/md";
import BasicInfo from "./basicInfo";
import Profile from "./profile";
import Education from "./education";
import Skills from "./skills";
import Experience from "./experience";
import Contacts from "./contacts";

function TemplateThree(data) {
  const page = useRef(null);
  const parentPage = useRef(null);

  const [pageMax, setPageMax] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const pageContainer = page.current;
    setPageMax(Math.ceil(pageContainer.clientHeight / 640));
  }, [data]);

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
      <div className="parent-container top-head no-scrollbar">
        <div className="side-content"></div>
        <div className="main-content"></div>
      </div>

      <div id="template">
        <div className="doc-body">
          <div>
            <style>
              {`
                @import url('https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&family=IBM+Plex+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

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
                  padding: 0 19.5px;
                }

                .doc-body p, .doc-body span, .doc-body  ul li {
                  color: #7a7a7a;
                }

                .doc-body h1,
                .doc-body h2,
                .doc-body h3,
                .doc-body h4 {
                  font-family: "IBM Plex Sans", sans-serif;
                  opacity: 1;
                }

                .doc-body h1 {   
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 25px;
                }

                .doc-body h2 {      
                  font-size: 13px;
                  font-weight: 700;
                  line-height: 15px;
                  margin: 15px 0;
                }

                .doc-body h3 {
                  font-weight: 600;
                  line-height: 18px;
                }

                .doc-body .page {
                  display: flex;
                  flex-direction: column;
                  min-height: 640px;
                }

                .doc-body .top-head {
                  max-width: 560px;
                  height: 10px;
                }

                .doc-body .section {
                  display: -webkit-box;
                  display: flex;
                  align-items: stretch;
                  margin: 0px auto;
                  flex-grow: 1;
                }
            
                .doc-body .main-content {
                  height: 100%;
                  display: flex;
                  flex-direction: column;
                  width: 260px;
                  padding-right: 1rem;
                }
                
                .doc-body .section .main-content {
                  border-right: 1px solid rgb(219, 219, 219);
                }
                
                .doc-body .side-content {
                  display: flex;
                  flex-direction: column;
                  width: 260px;
                  padding-left: 1rem;
                }
                
                .doc-body .section .side-content {
                  border-left: 1px solid rgb(219, 219, 219);
                }

                .doc-body .sub-section > div, .doc-body .sub-section > p {
                  -webkit-box-flex: 1;
                  -webkit-flex: 1;
                  flex: 1;
                  margin-top: 4px;
                }

                .doc-body .sub-section > div:first-child, .doc-body .sub-section > p:first-child {
                  margin-top: 0;
                }

                .doc-body .temp-head {
                  width: 525px;
                  margin-top: 20px;
                  display: -webkit-box;
                  padding-bottom: 20px;
                  border-bottom: 1px solid rgb(219, 219, 219);
                }

                .doc-body .temp-head section:first-child {
                  width: 60%;
                }

                .doc-body .temp-head .contacts {
                  text-align: left;
                }

                .capitalize {
                  text-transform: capitalize;
                }
            
                .doc-body .list-disc div ul,
                .doc-body .list-disc {
                  list-style-type: disc;
                  margin: 0;
                  padding: 0;
                }

                .doc-body .list-none div ul,
                .doc-body .list-none {
                  list-style-type: none;
                  margin: 0;
                  padding: 0;
                }

                .doc-body .mt-4 {
                  margin-top: 1rem/* 16px */;
                }

                .doc-body .mt-2 {
                  margin-top: 0.5rem/* 8px */;
                }

                .doc-body .w-full {
                  width: 100%;
                }
                
                .doc-body .ps-4 {
                  padding-left: 1rem/* 16px */;
                }
                
                .doc-body .separated-div {
                  display: -webkit-flex;
                  -webkit-flex-wrap: wrap;
                }

                .doc-body .half-pass {
                  display: -webkit-box;
                }

                .doc-body .skills.separated-div span, .doc-body .separated-div div:nth-child(even) {
                  margin-left: auto;
                }

                .doc-body .separated-div div {
                  width: 45%;
                  margin-top: 6px;
                }
                
                .doc-body .half-pass span {
                  display: block;
                  width: max-content;
                  margin-right: 12px;
                }

                .doc-body .half-pass > div {
                  width: 80%;
                }

                .doc-body .separated-div div:nth-child(2), .separated-div div:first-child {
                  margin-top: 0px;
                }

                .doc-body .mb-2 {
                  margin-bottom: 0.5rem/* 8px */;
                }

                .doc-body .mt-4 {
                  margin-top: 1rem/* 16px */;
                }
                `}
            </style>
          </div>

          <div
            ref={parentPage}
            className="parent-container !h-full max-h-[640px] !w-full overflow-y-scroll no-scrollbar pointer-events-none"
          >
            <div ref={page} className="h-max w-full page">
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
    </div>
  );
}

export default TemplateThree;
