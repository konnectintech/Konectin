import { useRef, useEffect, useState } from "react";
import * as MdIcons from "react-icons/md";
import BasicInfo from "./basicInfo";
import Profile from "./profile";
import Education from "./education";
import Skills from "./skills";
import Experience from "./experience";
import { useLocation } from "react-router-dom";
import Contacts from "./contacts";

function TemplateFour(data) {
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
    <div className="modern-4">
      <style>
        {`
        .modern-4 .adjuster {
          width: 1px;
          height: ${pageMax * 1056}px;
        }
    `}
      </style>
      <div id="template">
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&family=IBM+Plex+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

            @page {
                margin: 0;
                box-sizing: border-box;
            }

            @page :first {
              margin: 0;
            }
            
            .modern-4 * {
              margin: 0;
              padding: 0;
              font-size: 16px;
              font-family: "Hind", sans-serif;
              font-style: normal;
              font-weight: 400;
              line-height: 21px;
              color: #212121;
            }
        
            .modern-4 {
              position: relative;
            }
        
            .modern-4 .parent-container {
              position: relative;
              width: 816px;
              height: 1056px;
              display: flex;
              align-items: stretch;
              background: white;
            }

            .modern-4 p, .modern-4 a, .modern-4 span, .modern-4  ul li {
              color: #7a7a7a;
            }

            .modern-4 h1,
            .modern-4 h2,
            .modern-4 h3,
            .modern-4 h4 {
              font-family: "IBM Plex Sans", sans-serif;
              opacity: 1;
            }

            .modern-4 h1 {   
              font-size: 28px;
              font-style: normal;
              font-weight: 700;
              line-height: 27px;
              margin-bottom: 10px;
            }

            .modern-4 h2 {      
              font-size: 22px;
              font-weight: 700;
              line-height: 15px;
              color: #fff;
            }

            .modern-4 h3 {
              font-size: 18px;
              font-weight: 600;
              line-height: 20px;
              margin-bottom: 6px;
            }
        
            .modern-4 .top-head {
              height: 20px;
            }

            .modern-4 .section {
              display: -webkit-box;
              display: flex;
              align-items: start;
              width: 100%;
              margin: 0px auto;
            }
        
            .modern-4 .main-content {
              height: max-content;
              display: flex;
              flex-direction: column;
              width: 71%;
              padding: 0 30px 0 24px;
            }
        
            .modern-4 .side-content {
              display: flex;
              flex-direction: column;
              width: 27%;
              background: #212121 !important;
            }
            
            .modern-4 .side-content h2, .modern-4 .side-content span {
              padding: 16px 20px;
            }

            .modern-4 .side-content span {
              padding-top: 0;
              padding-bottom: 0;
            }
            
            .modern-4 .sub-section {
              display: flex;
              flex-direction: column;
            }
            
            .modern-4 .dark-m {
              position: absolute;
              width: calc(27% + 27px);
              height: ${pageMax * 100}%;
              min-height: calc(1056px + 27px);
              left: -27px;
              top: -27px;
              background: #212121 !important;
            }

            .modern-4 .sub-section > div, .modern-4 .sub-section > p {
              -webkit-box-flex: 1;
              -webkit-flex: 1;
              flex: 1;
              margin-top: 4px;
            }

            .modern-4 .sub-section > div:first-child, .modern-4 .sub-section > p:first-child {
              margin-top: 0;
            }

            .capitalize {
              text-transform: capitalize;
            }
        
            .modern-4 .list-disc div ul,
            .modern-4 .list-disc {
              list-style-type: disc;
              margin: 0;
              padding: 0;
            }

            .modern-4 .list-none div ul,
            .modern-4 .list-none {
              list-style-type: none;
              margin: 0;
              padding: 0;
            }

            .modern-4 .mt-4 {
              margin-top: 1rem/* 16px */;
            }

            .modern-4 .mt-2 {
              margin-top: 0.5rem/* 8px */;
            }

            .modern-4 .pt-2 {
              padding-top: 0.5rem/* 8px */;
            }

            .modern-4 .pt-4 {
              padding-top: 16px;
            }

            .modern-4 .w-full {
              width: 100%;
            }
            
            .modern-4 .ps-4 {
              padding-left: 1rem/* 16px */;
            }
            
            .modern-4 .page {
              position: relative;
            }
            
            .modern-4 .contacts {
              display: -webkit-box;
              display: flex;
              width: 100%;
            }

            .modern-4 .contacts svg {
              display: block;
              margin-top: 2px;
              margin-right: 5px;
            }
            
            .modern-4 .separated-section .section {
              margin-bottom: 15px;
            }
          `}
        </style>

        <div className="modern-4">
          <div
            ref={parentPage}
            className="parent-container overflow-y-scroll no-scrollbar pointer-events-none"
          >
            <div className="dark-m" />
            <div ref={page} className="h-max w-full page">
              <BasicInfo data={data?.basicInfo} />
              <Contacts data={data?.basicInfo} />
              <Profile data={data?.bio} />
              <Education data={data} />
              <Experience data={data} />
              <Skills data={data?.skills} />
            </div>
            <div className="adjuster" />
          </div>
        </div>

        {pageMax > 1 && (
          <div className="parent-container top-head no-scrollbar">
            <div className="side-content"></div>
            <div className="main-content"></div>
          </div>
        )}
      </div>

      {pageMax > 1 && (
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
      )}
    </div>
  );
}

export default TemplateFour;
