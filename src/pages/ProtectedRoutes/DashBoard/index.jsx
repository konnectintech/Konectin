import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Jobs from './Jobs';
import { person2Icon } from '../../../assets';
import './index.css'

const DashBoard = () => {
  return (
    <div className='dash-container'>
        <div className="dashboard-navigation" >
            <div className="profile" >
                <div className='profile-section'>
                    <div className='img-section'>
                        <img src={person2Icon} alt="male" style={{maxWidth: '20vw', height: '10vh'}}  />
                    </div>
                    <div className='name-section'>
                        <p className='username'>John Doe</p>
                        <p className='email'>johndoe@gmail.com</p>
                    </div>
                </div>

                <div className='notification'>
                    <div className='bell notify'></div>
                    <div className='chat notify'></div>
                </div>
            </div>

            <Link to='/dashboard/jobs'><div className='jobs item'>Jobs</div></Link>
            <Link to='/dashboard/jobs'><div className='application item'>Application</div></Link>
            <Link to='/dashboard/jobs'><div className='profile item'>Profile</div></Link>
            <Link to='/dashboard/jobs'><div className='blog item'>Blogs</div></Link>
            <Link to='/dashboard/jobs'><div className='help item'>Help</div></Link>
            <Link to='/dashboard/jobs'><div className="log-out item" >Log-out</div></Link>
        </div>
        
        <div className="web-content" >
            <Routes>
                <Route exact path='/jobs' element={<Jobs />}/>
                <Route exact path='/jobs' element={<Jobs />} />
                <Route exact path='/jobs' element={<Jobs />}/>
                <Route exact path='/log-out' element={<Jobs />}/>
            </Routes>
        </div>
    </div>
  )
}

export default DashBoard