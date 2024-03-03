<<<<<<< HEAD
<<<<<<< HEAD
// import { Routes, Route, Outlet } from "react-router-dom";
=======
>>>>>>> 3550d443878a55b4cf639c5c52355b042656b171
import { Routes, Route } from "react-router-dom";
import { dashboardRoutes } from "./layout/navigation";

import Header from "./layout/header";
import Sidebar from "./layout/sidebar";
<<<<<<< HEAD
// import Header from "./layout/header";
// import AsideBar from "./layout/asidebar";
// import Jobs from "./pages/job";
import Main from "./pages/main";
import UserInfo from "./pages/userInfo";
=======
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
// import Sidebar from "./layout/sidebar";
import Main from "./pages/main";
import UserProfile from "./pages/userProfile";
// import { dashboardRoutes } from "./layout/navigation";

import "./index.css";
>>>>>>> 5e20bd8ddd917e078c6efde1fc1be8be9785962a

const DashBoard = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="py-40 px-14 flex flex-col gap-5 sm:flex-row items-start justify-between min-h-screen bg-[#F0EFF5] ">
        <div className="w-full sm:w-1/4 min-w-[170px] md:min-w-[230px]">
<<<<<<< HEAD
          {/* <div className="border border-solid border-red-500 sm:h-screen sm:bg-white bg-gray-25 sm:w-2/12 min-w-[170px] md:min-w-[230px]"> */}
          <Sidebar />
=======
          {/* <div className="sm:h-screen sm:bg-white bg-gray-25 sm:w-2/12 min-w-[170px] md:min-w-[230px]"> */}
          {/* <Sidebar /> */}
>>>>>>> 5e20bd8ddd917e078c6efde1fc1be8be9785962a
          {/* </div> */}
        </div>

        <div className="flex flex-1 h-full flex-col gap-6 justify-between min-h-screen bg-gray-25">
          <Routes>
            <Route
              element={
                <Suspense
                  fallback={<div className="animate-spin">Loading</div>}
                >
                  <Main />
                </Suspense>
              }
            >
<<<<<<< HEAD
              <Route path="/" element={<UserInfo />} />
              {newdashboardRoutes.map((route) => (
=======
              <Route path="/" element={<UserProfile />} />
              {/* {dashboardRoutes.map((route) => (
>>>>>>> 5e20bd8ddd917e078c6efde1fc1be8be9785962a
=======

function DashBoard() {
  return (
    <main className="bg-primary-100">
      <div className="w-11/12 mx-auto max-w-screen-2xl flex max-md:flex-col gap-6 md:gap-8 py-4">
        <div className="w-full sm:max-w-[240px] lg:max-w-[290px] sm:hidden md:block">
          <Sidebar />
        </div>

        <div className="flex w-full min-w-0 h-full flex-col gap-8 justify-between sm:bg-white rounded-lg bg-primary-100">
          <Header />

          <div className="sm:pb-8 sm:px-6 lg:px-10">
            <Routes>
              {dashboardRoutes.map((route) => (
>>>>>>> 3550d443878a55b4cf639c5c52355b042656b171
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.element />}
                />
              ))}
            </Routes>
          </div>
        </div>

        <div className="sm:hidden text-center text-gray-600 text-sm mt-10 -mb-12 mx-auto">
          Member Since:{" "}
          <span className="font-bold text-black">October 1, 2020</span>
        </div>
      </div>
    </main>
  );
}

export default DashBoard;
