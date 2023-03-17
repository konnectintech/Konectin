import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Recommended from './Recommended';
import Saved from './Saved';
import Latest from './Latest';

const Jobs = () => {

  const size = 100,
    circleSize = size / 2,
    strokeCirce1 = "#555",
    strokeCirce2 = "#fff",
    circleFill = "transparent",
    strokeSize = 10,
    strokeCap = "round",
    progress = 70,
    rad = circleSize - strokeSize,
    strokeLen = 2 * Math.PI * rad,
    strokeLenoffset = strokeLen * ((100 - progress) / 100)

    function removeJob() {
      const item = Array.from(document.getElementsByClassName('active-job'))
      item.map(
          (value) => {
              value.classList.remove('active-job')
              console.log(value.classList)

          }
      )
  }
  

  return (
    <div>
      <div className='w-full flex flex-col'>
        <div className='w-full p-10 bg-primary-500 text-white grid grid-cols-2 gap-10 items-center'>
          <div className='flex justify-center'>
            <svg width={size} height={size}>
              <circle fill={circleFill} cx={circleSize} cy={circleSize} 
              strokeWidth={strokeSize} stroke={strokeCirce1} r={rad}/>
              <circle fill={circleFill} cy={circleSize} 
              cx={circleSize} strokeWidth={strokeSize} strokeLinecap={strokeLen} 
              stroke={strokeCirce2} r={rad} strokeDasharray={strokeLen} 
              strokeDashoffset={strokeLenoffset} strokeLinecap={strokeCap} 
              style={{transformOrigin: "center", transform: "rotate(-90deg)"}} />
              <text x={circleSize} y={circleSize} alignmentBaseline='central' 
              stroke={strokeCirce2} strokeWidth={"1px"} textAnchor='middle'>{progress}%</text>
            </svg>
          </div>
          <div className='tracking-wide'>Stand out by completing your <br/> Profile and applying with it..</div>
        </div>
        <div>
          <div className='py-8'>
            <h1 className='text-md font-bold'>Hello John</h1>
            <p className='text-sm'>Welcome to your dashboard, checkout what's happening.</p>
          </div>
          <div>
            <div>
              <ul className='font-bold flex justify-between'>
                <li className='cursor-pointer hover:border-b-4 border-red-700  [&.active-job]:border-b-4' onClick={
                  (e) => {
                    removeJob()
                    e.target.classList.toggle('active-job')
                  }
                }><Link to={'/dashboard/jobs/latest-jobs'}>Latest Jobs</Link></li>
                <li className='cursor-pointer hover:border-b-4 border-red-700  [&.active-job]:border-b-4'onClick={
                  (e) => {
                    removeJob()
                    e.target.classList.toggle('active-job')
                  }
                }><Link to={'/dashboard/jobs/recommended-jobs'}>Recommended Jobs</Link></li>
                <li className='cursor-pointer hover:border-b-4 border-red-700  [&.active-job]:border-b-4' onClick={
                  (e) => {
                    removeJob()
                    e.target.classList.toggle('active-job')
                  }
                }><Link to={'/dashboard/jobs/saved-jobs'}>Saved Jobs</Link></li>
              </ul>
            </div>
            <div className='py-4'>
              <Routes>
                <Route path={'/'} element={<Latest />}/>
                <Route path={'/recommended-jobs'} element={<Recommended />}/>
                <Route path={'/saved-jobs'} element={<Saved />}/>
              </Routes>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Jobs