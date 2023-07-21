import React from "react";
import { Routes, Route, Link } from "react-router-dom";
// import Recommended from "./recommended";
// import Saved from "./saved";
// import Latest from "./latest";

const Jobs = () => {
  function removeJob() {
    const item = Array.from(document.getElementsByClassName("active-job"));
    item.map((value) => {
      value.classList.remove("active-job");
      console.log(value.classList);
    });
  }

  return (
    <div>
      <div className="w-full flex flex-col">
        <div className="py-8">
          <h1 className="text-md font-bold">Hello John</h1>
          <p className="text-sm">
            Welcome to your dashboard, checkout what's happening.
          </p>
        </div>
        <div>
          <div>
            <ul className="font-bold flex justify-between">
              <li
                className="cursor-pointer hover:border-b-4 border-red-700  [&.active-job]:border-b-4"
                onClick={(e) => {
                  removeJob();
                  e.target.classList.toggle("active-job");
                }}
              >
                <Link to={"/dashboard/jobs/latest-jobs"}>Latest Jobs</Link>
              </li>
              <li
                className="cursor-pointer hover:border-b-4 border-red-700  [&.active-job]:border-b-4"
                onClick={(e) => {
                  removeJob();
                  e.target.classList.toggle("active-job");
                }}
              >
                <Link to={"/dashboard/jobs/recommended-jobs"}>
                  Recommended Jobs
                </Link>
              </li>
              <li
                className="cursor-pointer hover:border-b-4 border-red-700  [&.active-job]:border-b-4"
                onClick={(e) => {
                  removeJob();
                  e.target.classList.toggle("active-job");
                }}
              >
                <Link to={"/dashboard/jobs/saved-jobs"}>Saved Jobs</Link>
              </li>
            </ul>
          </div>
          <div className="py-4">
            {/* <Routes>
                <Route path={"/"} element={<Latest />} />
                <Route path={"/latest-jobs"} element={<Latest />} />
                <Route path={"/recommended-jobs"} element={<Recommended />} />
                <Route path={"/saved-jobs"} element={<Saved />} />
              </Routes> */}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Jobs;
