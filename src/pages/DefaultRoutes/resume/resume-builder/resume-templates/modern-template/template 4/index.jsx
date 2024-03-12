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
            
            .doc-body * {
              margin: 0;
              padding: 0;
              font-size: 16px;
              font-family: "Hind", sans-serif;
              font-style: normal;
              font-weight: 400;
              line-height: 21px;
              color: #212121;
            }
        
            .doc-body {
              position: relative;
            }
        
            .doc-body .parent-container {
              position: relative;
              width: 816px;
              height: 1056px;
              display: flex;
              align-items: stretch;
              background: white;
            }

            .doc-body p, .doc-body a, .doc-body span, .doc-body  ul li {
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
              font-size: 28px;
              font-style: normal;
              font-weight: 700;
              line-height: 27px;
              margin-bottom: 10px;
            }

            .doc-body h2 {      
              font-size: 22px;
              font-weight: 700;
              line-height: 15px;
              color: #fff;
            }

            .doc-body h3 {
              font-size: 18px;
              font-weight: 600;
              line-height: 20px;
              margin-bottom: 6px;
            }
        
            .doc-body .top-head {
              height: 20px;
            }

            .doc-body .section {
              display: -webkit-box;
              display: flex;
              align-items: start;
              width: 100%;
              margin: 0px auto;
            }
        
            .doc-body .main-content {
              height: max-content;
              display: flex;
              flex-direction: column;
              width: 71%;
              padding: 0 30px 0 24px;
            }
        
            .doc-body .side-content {
              display: flex;
              flex-direction: column;
              width: 27%;
              background: #212121 !important;
            }
            
            .doc-body .side-content h2, .doc-body .side-content span {
              padding: 16px 20px;
            }

            .doc-body .side-content span {
              padding-top: 0;
              padding-bottom: 0;
            }
            
            .doc-body .sub-section {
              display: flex;
              flex-direction: column;
            }
            
            .doc-body .dark-m {
              position: absolute;
              width: calc(27% + 27px);
              height: ${pageMax * 100}%;
              min-height: calc(1056px + 27px);
              left: -27px;
              top: -27px;
              background: #212121 !important;
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

            .doc-body .pt-2 {
              padding-top: 0.5rem/* 8px */;
            }

            .doc-body .pt-4 {
              padding-top: 16px;
            }

            .doc-body .w-full {
              width: 100%;
            }
            
            .doc-body .ps-4 {
              padding-left: 1rem/* 16px */;
            }
            
            .doc-body .page {
              position: relative;
            }
            
            .doc-body .contacts {
              display: -webkit-box;
              display: flex;
              width: 100%;
            }

            .doc-body .contacts svg {
              display: block;
              margin-top: 2px;
              margin-right: 5px;
            }
            
            .doc-body .separated-section .section {
              margin-bottom: 15px;
            }
          `}
        </style>
        <div className="parent-container top-head no-scrollbar">
          <div className="side-content"></div>
          <div className="main-content"></div>
        </div>

        <div className="doc-body">
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

        <div className="parent-container top-head no-scrollbar">
          <div className="side-content"></div>
          <div className="main-content"></div>
        </div>
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

export default TemplateFour;
