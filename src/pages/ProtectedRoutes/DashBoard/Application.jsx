import React from 'react'
import { arrowIcon, homeIcon, more, ninjaIcon } from '../../../assets'

const Application = () => {

  const applications = [
    {
      icon: homeIcon,
      role: [
        {
          head: "UX Reseacher",
          company: "Quirks Digital Solutions",
          location: "Lagos, Nigeria",
          workload: "Remote",
          timepost: "Applied on Oct 12",
          statusjob: "Approved",
          color: "text-green-800"
        }
      ],
      spec: [more]
    },

    {
      icon: ninjaIcon,
      role: [
        {
          head: "UX Reseacher",
          company: "NinjaTech Solutions",
          location: "Abuja, Nigeria",
          workload: "Remote",
          timepost: "Applied on Oct 12",
          statusjob: "Not Selected",
          color: "text-red-800"
        }
      ],
      spec: [more]
    },

    {
      icon: arrowIcon,
      role: [
        {
          head: "UX Reseacher",
          company: "NinjaTech Solutions",
          location: "Jos, Nigeria",
          workload: "Remote",
          timepost: "Applied on Oct 12",
          statusjob: "Pending",
          color: "text-primary-600"
        }
      ],
      spec: [more]
    }
  ]


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

  return (
    <div className='flex flex-col gap-8'>
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
        <div className='text-md font-bold'>My Job Applications</div>
        <div className='text-sm'>Here is an overview of your applications so far.</div>
      </div>

      <div className='w-full grid gap-4'>
      {
        applications.map(
          (job, indexJob) => {
            return(
              <div key={indexJob} className="flex flex-col gap-4 bg-slate-100 border-2 border-slate-400 p-4 rounded-lg">
                <div className='flex items-start gap-4 overflow-hidden'>
                  <div><img src={job.icon} alt="" srcset="" /></div>
                  <div className='grow'>
                    {
                      job.role.map(
                        (role) => {
                          return(
                            <div className='flex flex-col gap-1'>
                              <div className='font-bold text-md'>{role.head}</div>
                              <div className='font-[600] text-slate-800 text-sm'>{role.company}</div>
                              <div className='flex flex-col gap-2'>
                                <div className='font-[600] text-sm text-slate-700 text-sm items-center gap-2'>
                                  {role.location}
                                </div>
                                <div className='font-[600] text-sm text-slate-700 text-sm items-center gap-2'>
                                  {role.workload}
                                </div>
                              </div>
                              <div className='text-slate-600 italic text-sm'>{role.timepost}</div>
                              <div className='font-[600] text-slate-600 text-xs'>Status: <span className={`${role.color} text-xxs`}>{role.statusjob}</span></div>
                            </div>
                          )
                        }
                      )
                    }
                  </div>
                  <div className='flex item-start'>
                    <div className='font-[400] text-xs rounded-sm text-center p-3 bg-primary-500 text-white'>View more</div>
                    {
                      job.spec.map(
                        (spec) => {
                          return <img className='rounded-full rotate-90 w-5' src={spec} alt="" />
                        }
                      )
                    }
                  </div>
                </div>
                
              </div>
            )
          }
        )
      }
      </div>
    </div>
  )
}

export default Application