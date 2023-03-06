import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Jobs from './Jobs';
import { person2Icon } from '../../../assets';
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

    
    

  return (
    <div className='dash-container w-full md:grid md:grid-cols-2'>
        <div className="dashboard-navigation w-full pt-20 flex flex-col justify-between gap-10 px-8 text-white md:w-1/2 bg-secondaryBtn" >
            <div className="profile grid grid-cols-2 grid-flow-col" >
                <div className='profile-section flex items-center gap-2'>
                    <div className='img-section'>
                        <img src={person2Icon} alt="male" style={{maxWidth: '20vw', height: '10vh'}}  />
                    </div>
                    <div className='name-section'>
                        <p className='username font-bold text-lg'>John Doe</p>
                        <p className='email text-xs font-light'>johndoe@gmail.com</p>
                    </div>
                </div>

                <div className='notification'>
                    <div className='bell notify rounded-lg'></div>
                    <div className='chat notify rounded-lg'></div>
                </div>
            </div>

            <div className='navigation-content flex flex-col gap-4'>
                <Link to='/dashboard/jobs'><div className={`jobs item flex item-center p-3 pl-12 font-sm hover:bg-white hover:text-black hover:border-l-4 hover:border-red-700 rounded-sm`} onClick={(e) => {
                    items()
                    e.target.classList.toggle('active')
                }}>Jobs</div></Link>
                <Link to='/dashboard/application'><div className='application item flex item-center p-3 pl-12 font-sm hover:bg-white hover:text-black hover:border-l-4 hover:border-red-700 rounded-sm' onClick={(e) => {
                    items()
                    e.target.classList.toggle('active')
                }}>Application</div></Link>
                <Link to='/dashboard/profile'><div className='profile item flex item-center p-3 pl-12 font-sm hover:bg-white hover:text-black hover:border-l-4 hover:border-red-700 rounded-sm' onClick={(e) => {
                    items()
                    e.target.classList.toggle('active')
                }}>Profile</div></Link>
                <Link to='/dashboard/blog'><div className='blog item flex item-center p-3 pl-12 font-sm hover:bg-white hover:text-black hover:border-l-4 hover:border-red-700 rounded-sm' onClick={(e) => {
                    items()
                    e.target.classList.toggle('active')
                }}>Blogs</div></Link>
                <Link to='/dashboard/help'><div className='help item flex item-center p-3 pl-12 font-sm hover:bg-white hover:text-black hover:border-l-4 hover:border-red-700 rounded-sm' onClick={(e) => {
                    items()
                    e.target.classList.toggle('active')
                }}>Help</div></Link>
            </div>

            <div className='navigation-footer flex p-2 pl-12'>
                <Link to='/dashboard/log-out'><div className="log-out" onClick={(e) => {
                    items()
                }}>Log-out</div></Link>
            </div>
        </div>
        
        <div className="web-content hidden md:grid pt-20" >
            <Routes>
                <Route exact path='/jobs' element={<Jobs />}/>
                <Route exact path='/application' element={<Application />} />
                <Route exact path='/profile' element={<Profile />}/>
                <Route exact path='/help' element={<Help />}/>
                <Route exact path='/blog' element={<Blog />}/>
                <Route exact path='/log-out' element={<LogOut />}/>
            </Routes>
        </div>
    </div>
  )
}

export default DashBoard