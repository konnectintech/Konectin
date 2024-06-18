import { useRef, useEffect, useState } from "react";
import * as MdIcons from "react-icons/md";
import BasicInfo from "./basicInfo";
import Profile from "./profile";
import Education from "./education";
import Skills from "./skills";
import Experience from "./experience";
import { useLocation } from "react-router-dom";

function TemplateTwo(data) {
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
    <div className="modern-two">
      <style>
        {`
        .modern-two .adjuster {
          width: 1px;
          height: ${pageMax * 1056}px;
        }
    `}
      </style>

      <div id="template">
        <div className="modern-two">
          <div>
            <style>
              {`
                @import url('https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&family=IBM+Plex+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

                @page { 
                  size: letter;
                  margin:0; 
                }

                .modern-two * {
                  margin: 0;
                  padding: 0;
                  font-size: 16px;
                  font-family: "Hind", sans-serif;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 21px;
                  color: #212121;
                }
            
                .modern-two {
                  position: relative;
                }
            
                .modern-two .parent-container {
                  position: relative;
                  width: 816px;
                  height: 1056px;
                  display: flex;
                  align-items: stretch;
                  background: white;
                  padding: 2rem 4rem 0 1.5rem;
                }

                .modern-two p, .modern-two a, .modern-two span, .modern-two  ul li {
                  color: #7a7a7a;
                }

                .modern-two h1,
                .modern-two h2,
                .modern-two h3,
                .modern-two h4 {
                  font-family: "IBM Plex Sans", sans-serif;
                  opacity: 1;
                }

                .modern-two h1 {   
                  font-size: 28px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 27px;
                  margin-bottom: 15px;
                }

                .modern-two h2 { 
                  font-size: 20px;
                  font-weight: 700;
                  line-height: 15px;
                }

                .modern-two h3 {  
                  font-size: 17px;
                  font-weight: 600;
                  line-height: 20px;
                  margin: 7px 0;
                }

                .modern-two .dataset-container > section {
                  padding: 10px 0;
                  border-top: 1px solid rgb(219, 219, 219);
                }
            
                .modern-two .top-head {
                  height: 20px;
                }

                .modern-two .section {
                  display: flex;
                  display: -webkit-box;
                  align-items: start;
                  margin: 0px auto;
                }
            
                .modern-two .main-content {
                  height: max-content;
                  display: flex;
                  flex-direction: column;
                  width: 77%;
                  padding: 0 0 0 1rem;
                }
            
                .modern-two .side-content {
                  display: flex;
                  flex-direction: column;
                  width: 23%;
                  margin: 7px 0;
                }

                .modern-two .sub-section {
                  display: flex;
                  flex-direction: column;
                }

                .modern-two .sub-section > div, .modern-two .sub-section > p {
                  -webkit-box-flex: 1;
                  -webkit-flex: 1;
                  flex: 1;
                  margin-top: 4px;
                }

                .modern-two .sub-section > div:first-child, .modern-two .sub-section > p:first-child {
                  margin-top: 0;
                }

                .capitalize {
                  text-transform: capitalize;
                }
            
                .modern-two .list-disc div ul,
                .modern-two .list-disc {
                  list-style-type: disc;
                  margin: 0;
                  padding: 0;
                }

                .modern-two .list-none div ul,
                .modern-two .list-none {
                  list-style-type: none;
                  margin: 0;
                  padding: 0;
                }

                .modern-two .mt-4 {
                  margin-top: 1rem/* 16px */;
                }

                .modern-two .mt-2 {
                  margin-top: 0.5rem/* 8px */;
                }

                .modern-two .w-full {
                  width: 100%;
                }
                
                .modern-two .ps-4 {
                  padding-left: 1rem/* 16px */;
                }
                `}
            </style>
          </div>

          <div
            ref={parentPage}
            className="parent-container !px-8 overflow-y-scroll no-scrollbar pointer-events-none"
          >
            <div ref={page} className="h-max w-full">
              <BasicInfo data={data?.basicInfo} />
              <div className="dataset-container mt-4">
                <Profile data={data?.bio} />
                <Education data={data} />
                <Experience data={data} />
                <Skills data={data?.skills} />
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

export default TemplateTwo;
