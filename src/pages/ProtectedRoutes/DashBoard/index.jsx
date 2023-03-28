import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Jobs from './Jobs';
import { application, web, help, job, chat, profile, bell, logOut, person2Icon, arrowBack } from '../../../assets';
const Application = React.lazy(() => import('./Application'));
import LogOut from './Log-out';
import Profile from './Profile';
import Help from './Help';
import Blog from "../../../pages/DefaultRoutes/blog";
import BlogContent from "../../../pages/DefaultRoutes/blog/feeds/feed/blogContent";
import Feeds from "../../../pages/DefaultRoutes/blog/feeds";
import './index.css'
import { Suspense } from 'react'


const DashBoard = () => {
  function items() {
    const item = Array.from(document.getElementsByClassName("item"));
    item.map((value) => {
      value.classList.remove("active");
      console.log(value.classList);
    });
  }

  function webIndex() {
    const web = Array.from(document.getElementsByClassName("web-content"));
    web.map((value) => {
      value.classList.remove("-z-10");
      value.classList.add("z-1");
    });
  }

  function backArrow() {
    const web = Array.from(document.getElementsByClassName("web-content"));
    web.map((value) => {
      value.classList.remove("z-1");
      value.classList.add("-z-10");
    });
  }

  return (
    <div className='dash-container w-full flex gap-4 md:h-screen md:overflow-hidden '>
        <div className="dashboard-navigation w-full flex flex-col justify-between gap-20 py-10 px-5 text-white md:w-1/3 lg:w-1/4 md:bg-white md:text-black md:font-bold bg-primary-800" >
            <div className="profile grid grid-cols-2 md:scale-95 lg:scale-100 items-center" >
                <div className='profile-section flex items-center gap-2'>
                    <div className='img-section'>
                        <img src={person2Icon} alt="male" style={{maxWidth: '20vw', height: '10vh'}}  />
                    </div>
                    <div className='name-section'>
                        <p className='username font-bold text-lg'>John Doe</p>
                        <p className='email text-xs font-light'>johndoe@gmail.com</p>
                    </div>
                </div>

                <div className='notification flex justify-end  gap-2'>
                    <div className='bell notify rounded-md bg-neutral-600 p-2 flex items-center'>
                    <img src={bell} alt="jobs available" />
                    </div>
                    <div className='chat notify rounded-md bg-neutral-600 p-2 flex items-center'>
                    <img src={chat} alt="jobs available" />
                    </div>
                </div>
            </div>

            <div className='navigation-content flex flex-col gap-5'>
                <Link to='/dashboard/jobs'><div className={`jobs item flex item-center bg-primary-600 md:bg-white [&.active]:bg-neutral-600 [&.active]:text-black [&.active]:border-l-4 [&.active]:border-primary-800 gap-3 p-3 pl-12 font-sm hover:bg-white hover:text-black group hover:border-l-4 hover:border-primary-800 rounded-sm md:hover:bg-neutral-600`} onClick={(e) => {
                    items()
                    e.target.classList.toggle('active')
                    webIndex()
                }}>
                    <img src={job} alt="jobs available" className='invert sepia saturate-0 hue-rotate-100 contrast-108 md:invert-0 md:sepia-0 md:saturate-100 md:hue-rotate-188 md:brightness-101 md:contrast-102 group-hover:filter-none w-5 h-5' />
                    Jobs
                </div></Link>
                <Link to='/dashboard/application'><div className='application item gap-3 flex item-center bg-primary-600 md:bg-white [&.active]:bg-neutral-600 [&.active]:text-black [&.active]:border-l-4 [&.active]:border-primary-800 gap-3 p-3 pl-12 font-sm hover:bg-white hover:text-black group hover:border-l-4 hover:border-primary-800 rounded-sm md:hover:bg-neutral-600' onClick={(e) => {
                    items()
                    e.target.classList.toggle('active')
                    webIndex()
                }}>
                    <img src={application} alt="jobs available" className='invert sepia saturate-0 hue-rotate-100 contrast-108 md:invert-0 md:sepia-0 md:saturate-100 md:hue-rotate-188 md:brightness-101 md:contrast-102 group-hover:filter-none w-5 h-5'/>{" "}
                    Application
                </div></Link>
                <Link to='/dashboard/profile'><div className='profile item gap-3 flex item-center bg-primary-600 md:bg-white [&.active]:bg-neutral-600 [&.active]:text-black [&.active]:border-l-4 [&.active]:border-primary-800 gap-3 p-3 pl-12 font-sm hover:bg-white hover:text-black group hover:border-l-4 hover:border-primary-800 rounded-sm md:hover:bg-neutral-600' onClick={(e) => {
                    items()
                    e.target.classList.toggle('active')
                    webIndex()
                }}>
                    <img src={profile} alt="jobs available" className='invert sepia saturate-0 hue-rotate-100 contrast-108 md:invert-0 md:sepia-0 md:saturate-100 md:hue-rotate-188 md:brightness-101 md:contrast-102 group-hover:filter-none w-5 h-5'/>
                    Profile
                </div></Link>
                <Link to='/dashboard/blog'><div className='blog item gap-3 flex item-center bg-primary-600 md:bg-white [&.active]:bg-neutral-600 [&.active]:text-black [&.active]:border-l-4 [&.active]:border-primary-800 gap-3 p-3 pl-12 font-sm hover:bg-white hover:text-black group hover:border-l-4 hover:border-primary-800 rounded-sm md:hover:bg-neutral-600' onClick={(e) => {
                    items()
                    e.target.classList.toggle('active')
                    webIndex()
                }}>
                    <img src={web} alt="jobs available" className='invert sepia saturate-0 hue-rotate-100 contrast-108 md:invert-0 md:sepia-0 md:saturate-100 md:hue-rotate-188 md:brightness-101 md:contrast-102 group-hover:filter-none w-5 h-5'/>
                    Blogs
                </div></Link>
                <Link to='/dashboard/help'><div className='help item gap-3 flex item-center bg-primary-600 md:bg-white [&.active]:bg-neutral-600 [&.active]:text-black [&.active]:border-l-4 [&.active]:border-primary-800 gap-3 p-3 pl-12 font-sm hover:bg-white hover:text-black group hover:border-l-4 hover:border-primary-800 rounded-sm md:hover:bg-neutral-600' onClick={(e) => {
                    items()
                    e.target.classList.toggle('active')
                    webIndex()
                }}>
                    <img src={help} alt="jobs available" className='invert sepia saturate-0 hue-rotate-100 contrast-108 md:invert-0 md:sepia-0 md:saturate-100 md:hue-rotate-188 md:brightness-101 md:contrast-102 group-hover:filter-none w-5 h-5'/>
                    Help
                </div></Link>
            </div>
          

            <div className='navigation-footer flex p-2 pl-12'>
                <Link to='/dashboard/log-out'><div className="log-out flex gap-3 text-secondary-800 font-800" onClick={(e) => {
                    items()
                }}>
                    <img src={logOut} alt="jobs available" className='invert sepia saturate-0 hue-rotate-100 contrast-108 md:invert-0 md:sepia-0 md:saturate-100 md:hue-rotate-188 md:brightness-101 md:contrast-102 group-hover:filter-none w-5 h-5'/>
                    Log-out
                </div></Link>
            </div>
            <div className="chat notify rounded-md bg-white p-2 flex items-center">
              <img src={chat} alt="jobs available" />
            </div>
        </div>
        
        <div className="web-content w-full absolute -z-10 bg-white 
        md:relative md:grid flex-1 py-4 px-5 overflow-y-scroll h-screen bg-neutral-600" >
            <div className='md:hidden cursor-pointer rounded-full 
            w-16 items-center justify-center bg-slate-400 scale-75
            mb-4 hover:bg-slate-300' onClick={
                () => {
                    backArrow()
                }
            }>
                <img src={arrowBack} alt="previous page" /> 
            </div>
            <Routes>
                <Route exact path='/jobs/*' element={<Jobs />}/>
                <Route exact path='/application' element={
                    <Suspense fallback={<div className='animate-spin'>Loading</div>}>
                        <Application />
                    </Suspense>
                } />
                <Route exact path='/profile' element={
                    <Suspense fallback={<div className='animate-spin'>Loading</div>}>
                        <Profile />
                    </Suspense>
                }/>
                <Route exact path='/help' element={<Help />}/>
                <Route path="/blog/" element={<Blog />}>
                    <Route path="/blog/:feed" element={<Feeds />} />
                    <Route path="/blog/:feed/:title" element={<BlogContent />} />
                </Route>
                <Route exact path='/log-out' element={<LogOut />}/>
            </Routes>
        </div>
        
      
    </div>
  );
};

export default DashBoard;
