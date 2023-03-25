
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Jobs from './Jobs';
import { application, web, help, job, chat, profile, bell, logOut, person2Icon, arrowBack } from '../../../assets';
import Application from './Application';
import LogOut from './Log-out';
import Profile from './Profile';
import Help from './Help';
import Blog from './Blog';
import './index.css'

const DashBoard = () => {

    
    function items() {
        const item = Array.from(document.getElementsByClassName('item'))
        item.map(
            (value) => {
                value.classList.remove('active')
                console.log(value.classList)

            }
        )
    }

    function webIndex() {
        const web = Array.from(document.getElementsByClassName('web-content'))
        web.map(
            (value) => {
                value.classList.remove('-z-10')
                value.classList.add('z-1')
            }
        )
    }

    function backArrow() {
        const web = Array.from(document.getElementsByClassName('web-content'))
        web.map(
            (value) => {
                value.classList.remove('z-1')
                value.classList.add('-z-10')
            }
        )
    }
    
    

  return (
    <div className='dash-container w-full flex gap-4 md:h-screen md:overflow-hidden'>
        <div className="dashboard-navigation w-full flex flex-col justify-between gap-20 py-10 px-5 text-white md:w-1/3 lg:w-1/4 bg-primary-500" >
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
                    <div className='bell notify rounded-md bg-white p-2 flex items-center'>
                    <img src={bell} alt="jobs available" />
                    </div>
                    <div className='chat notify rounded-md bg-white p-2 flex items-center'>
                    <img src={chat} alt="jobs available" />
                    </div>
                </div>
            </div>

            <div className='navigation-content flex flex-col gap-5'>
                <Link to='/dashboard/jobs'><div className={`jobs item flex item-center [&.active]:bg-white [&.active]:text-black [&.active]:border-l-4 [&.active]:border-red-700 gap-3 p-3 pl-12 font-sm hover:bg-white hover:text-black group hover:border-l-4 hover:border-red-700 rounded-sm`} onClick={(e) => {
                    items()
                    e.target.classList.toggle('active')
                    webIndex()
                }}>
                    <img src={job} alt="jobs available" className='invert sepia saturate-0 hue-rotate-305 brightness-103 contrast-103 group-hover:filter-none' />
                    Jobs
                </div></Link>
                <Link to='/dashboard/application'><div className='application item gap-3 flex item-center [&.active]:bg-white [&.active]:text-black [&.active]:border-l-4 [&.active]:border-red-700 p-3 pl-12 font-sm hover:bg-white hover:text-black group hover:border-l-4 hover:border-red-700 rounded-sm' onClick={(e) => {
                    items()
                    e.target.classList.toggle('active')
                    webIndex()
                }}>
                    <img src={application} alt="jobs available" className='invert sepia saturate-0 hue-rotate-305 brightness-103 contrast-103 group-hover:filter-none'/>{" "}
                    Application
                </div></Link>
                <Link to='/dashboard/profile'><div className='profile item gap-3 flex item-center [&.active]:bg-white [&.active]:text-black [&.active]:border-l-4 [&.active]:border-red-700 p-3 pl-12 font-sm hover:bg-white hover:text-black group hover:border-l-4 hover:border-red-700 rounded-sm' onClick={(e) => {
                    items()
                    e.target.classList.toggle('active')
                    webIndex()
                }}>
                    <img src={profile} alt="jobs available" className='invert sepia saturate-0 hue-rotate-305 brightness-103 contrast-103 group-hover:filter-none'/>
                    Profile
                </div></Link>
                <Link to='/dashboard/blog'><div className='blog item gap-3 flex item-center [&.active]:bg-white [&.active]:text-black [&.active]:border-l-4 [&.active]:border-red-700 p-3 pl-12 font-sm hover:bg-white hover:text-black group hover:border-l-4 hover:border-red-700 rounded-sm' onClick={(e) => {
                    items()
                    e.target.classList.toggle('active')
                    webIndex()
                }}>
                    <img src={web} alt="jobs available" className='invert sepia saturate-0 hue-rotate-305 brightness-103 contrast-103 group-hover:filter-none'/>
                    Blogs
                </div></Link>
                <Link to='/dashboard/help'><div className='help item gap-3 flex item-center [&.active]:bg-white [&.active]:text-black [&.active]:border-l-4 [&.active]:border-red-700 p-3 pl-12 font-sm hover:bg-white hover:text-black group hover:border-l-4 hover:border-red-700 rounded-sm' onClick={(e) => {
                    items()
                    e.target.classList.toggle('active')
                    webIndex()
                }}>
                    <img src={help} alt="jobs available" className='invert sepia saturate-0 hue-rotate-305 brightness-103 contrast-103 group-hover:filter-none'/>
                    Help
                </div></Link>

            </div>
          </div>

          <div className="notification">
            <div className="bell notify rounded-lg"></div>
            <div className="chat notify rounded-lg"></div>
          </div>
        </div>

            <div className='navigation-footer flex p-2 pl-12'>
                <Link to='/dashboard/log-out'><div className="log-out flex gap-3" onClick={(e) => {
                    items()
                }}>
                    <img src={logOut} alt="jobs available" className='invert sepia saturate-0 hue-rotate-305 brightness-103 contrast-103 group-hover:filter-none'/>
                    Log-out
                </div></Link>
            </div>
          </Link>
          <Link to="/dashboard/application">
            <div
              className="application item flex item-center p-3 pl-12 font-sm hover:bg-white hover:text-black hover:border-l-4 hover:border-red-700 rounded-sm"
              onClick={(e) => {
                items();
                e.target.classList.toggle("active");
              }}
            >
              Application
            </div>
          </Link>
          <Link to="/dashboard/profile">
            <div
              className="profile item flex item-center p-3 pl-12 font-sm hover:bg-white hover:text-black hover:border-l-4 hover:border-red-700 rounded-sm"
              onClick={(e) => {
                items();
                e.target.classList.toggle("active");
              }}
            >
              Profile
            </div>
          </Link>
          <Link to="/dashboard/blog">
            <div
              className="blog item flex item-center p-3 pl-12 font-sm hover:bg-white hover:text-black hover:border-l-4 hover:border-red-700 rounded-sm"
              onClick={(e) => {
                items();
                e.target.classList.toggle("active");
              }}
            >
              Blogs
            </div>
          </Link>
          <Link to="/dashboard/help">
            <div
              className="help item flex item-center p-3 pl-12 font-sm hover:bg-white hover:text-black hover:border-l-4 hover:border-red-700 rounded-sm"
              onClick={(e) => {
                items();
                e.target.classList.toggle("active");
              }}
            >
              Help
            </div>
          </Link>
        </div>

        
        <div className="web-content w-full absolute -z-10 bg-white 
        md:relative md:grid flex-1 py-4 px-5 overflow-y-scroll h-screen" >
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
                <Route exact path='/application' element={<Application />} />
                <Route exact path='/profile' element={<Profile />}/>
                <Route exact path='/help' element={<Help />}/>
                <Route exact path='/blog' element={<Blog />}/>
                <Route exact path='/log-out' element={<LogOut />}/>
            </Routes>
            
        </div>
      </div>

      <div className="web-content hidden md:grid pt-20">
        <Routes>
          <Route exact path="/jobs" element={<Jobs />} />
          <Route exact path="/application" element={<Application />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/help" element={<Help />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/log-out" element={<LogOut />} />
        </Routes>
      </div>
    </div>
  );
};

export default DashBoard;
