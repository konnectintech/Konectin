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
import { Suspense } from 'react';
const Admin = () => {
    return (
        <div className='w-full flex flex-col gap-2'>
            <div className='w-full hidden md:flex px-10 pt-5'>
                <div className="profile flex md:scale-95 lg:scale-100 items-center w-full justify-between" >
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
            </div>
            <div className='dash-container w-full flex gap-4 h-screen overflow-hidden '>
                <div className="dashboard-navigation w-full flex flex-col justify-between gap-20 py-10 px-5 text-white md:w-1/3 lg:w-1/4 md:bg-white md:text-black md:font-bold bg-primary-800" >
                    <div className="profile grid grid-cols-2 md:hidden md:scale-95 lg:scale-100 items-center" >
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
                    
                    
                    <div className='navigation-footer flex p-2 pl-12'>
                        <Link to='/dashboard/log-out'><div className="log-out flex gap-3 text-secondary-800 font-800" onClick={(e) => {
                            items()
                        }}>
                            <img src={logOut} alt="jobs available" className='invert sepia saturate-0 hue-rotate-100 contrast-108 md:invert-0 md:sepia-0 md:saturate-100 md:hue-rotate-188 md:brightness-101 md:contrast-102 group-hover:filter-none w-5 h-5'/>
                            Log-out
                        </div></Link>
                    </div>
                    
                </div>
            
                <div className="web-content w-full absolute hidden md:block bg-white 
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
                        <Route exact path='/log-out' element={<LogOut />}/>
                    </Routes>
                </div> 
            </div>
        </div>
      );
}

export default Admin