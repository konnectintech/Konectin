import { useRef, useEffect, useState } from "react";
import * as MdIcons from "react-icons/md";
import BasicInfo from "./basicInfo";
import Contacts from "./contacts";
import Profile from "./profile";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

function TemplateFive(data) {
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
                }

                .doc-body .adjuster {
                  width: 1px;
                  height: ${pageMax * 640}px;
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
                  font-size: 24px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 25px;
                }

                .doc-body h2 {      
                  font-size: 13px;
                  font-weight: 700;
                  line-height: 15px;
                  display:inline-block;
                }

                .doc-body h3 {
                  font-weight: 600;
                  line-height: 18px;
                }
                
                .doc-body .top-head {
                  max-width: 560px;
                  height: 20px;
                }

                .doc-body .section {
                  display: flex;
                  display: -webkit-box;
                  align-items: start;
                  width: 92%;
                  margin: 0px auto;
                }
            
                .doc-body .main-content {
                  height: max-content;
                  width: 80%;
                  padding: 1rem 0 1rem 1rem;
                }
            
                .doc-body .side-content {
                  width: 70%;
                  padding: 1rem;
                }

                .doc-body .sub-section {
                  display: flex;
                  flex-direction: column;
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

                .doc-body .separated-div {
                  display: flex;
                  display: -webkit-flex;
                }
                
                .doc-body ul.separated-div {
                  display: -webkit-flex;
                  -webkit-flex-wrap: wrap;
                  list-stle:none;
                }

                .doc-body .separated-div p, .doc-body .separated-div li:nth-child(even) {
                  margin-left: auto;
                }

                // .doc-body .separated-div li {
                //   width: 50%;
                //   margin-top: 6px;
                // }

                .doc-body .separated-div li:nth-child(2), .doc-body .separated-div li:first-child {
                  margin-top: 0px;
                }
            
                .doc-body .capitalize {
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
            
                .doc-body .job-desc {
                  padding-left: 1.5rem;
                }

                .doc-body .job-desc ul li {
                  margin-bottom: .5rem;
                }

                .doc-body .mb-2 {
                  margin-bottom: 0.5rem;
                }
                .doc-body .mb-lg {
                  margin-bottom: 2rem;
                }

                .doc-body .p-4 {
                  padding-left: 1rem/* 16px */;
                }
                .doc-body .p-8 {
                  padding-left: 2rem/* 32px */;
                }
                .doc-body .pl-4 {
                  padding-left: 1rem/* 16px */;
                }
                .doc-body .pl-8 {
                  padding-left: 2rem/* 32px */;
                } 
                .doc-body .py-4 {
                  padding: 1.5rem 0/* 16px */;
                }
                .doc-body .pb-4 {
                  padding-bottom: 1.5rem/* 16px */;
                }


                .doc-body .ml-sm {
                  margin-left: 1rem/* 16px */;
                }
                .doc-body .ml-md {
                  margin-left: 2rem/* 32px */;
                }
                .doc-body .ml-lg {
                  margin-left: 4rem/* 64px */;
                }


                .doc-body .relative {
                  position:relative;
                }



                .doc-body .mr-no {
                position:absolute;
                 right:5%;
                }
                
                .doc-body .w-full {
                  width: 100%;
                }

                .doc-body .toLowerCase {
                  text-transform: lowercase;
                }

                .doc-body .underline__bottom {
                  border-bottom: 1px solid #777;
                }

        ///// BOTTOM SECTION STYLIG
                .doc-body .bottom__section {
                  display:flex;
                }
                .doc-body .bottomLeft {
                  width: 70%;
                  padding-rt:0 .5rem;
                  border-right:1px solid #777;
                }
                .doc-body .block {
                  display:block;
                }
                .doc-body .inline {
                  display:inline;
                }

        //////// SKILLS SECTION
                .doc-body .skills__box-top {
                  display: flex;
                  display: -webkit-flex;
                }
                .doc-body .skills__range {
                  width:100%;
                  height:5px;
                  outline:none;
                  border-radius:200px;
                  background:#d1d1d1;
                  
                  overflow:hidden;
                }
                .doc-body .skills__range::-webkit-slider-thumb{
                  -webkit-appearance:none;
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
              <BasicInfo data={data?.basicInfo} />
              <Contacts data={data?.basicInfo} />
              <Profile data={data?.bio} />
              <section className="section bottom__section py-4">
                <div className="bottomLeft">
                  <Education
                    education={data?.education}
                    currentEditedEducation={data.currentEditedEducation}
                  />
                  <Experience
                    jobExperience={data?.jobExperience}
                    currentEditedJob={data.currentEditedJob}
                  />
                </div>

                <div className="right">
                  <Skills data={data?.skills} />
                </div>
              </section>
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

export default TemplateFive;
