import React from 'react'
import { arrowIcon, bookmark, dislike, homeIcon, job, like, ninjaIcon, profileLocation } from '../../../assets'

const Latest = () => {

  const jobset = [
    {
      icon: homeIcon,
      role: [
        {
          head: "UX Reseacher",
          company: "Quirks Digital Solutions",
          position: "Engineering & Technology",
          location: "Lagos",
          workload: "Full time",
          timepost: "Job posted on Oct 12",
          brief: "We are looking for a good UX researcher with 5 years experience pellentesque..",
          locationIcons: profileLocation,
          workloadIcons: job
        }
      ],
      spec: [like, dislike, bookmark],
      tag: ["User experience", "Wireframing", "Figma"]
    },

    {
      icon: ninjaIcon,
      role: [
        {
          head: "UX Reseacher",
          company: "Quirks Digital Solutions",
          position: "Engineering & Technology",
          location: "Lagos",
          workload: "Full time",
          timepost: "Job posted on Oct 12",
          brief: "We are looking for a good UX researcher with 5 years experience pellentesque..",
          locationIcons: profileLocation,
          workloadIcons: job
        }
      ],
      spec: [like, dislike, bookmark],
      tag: ["User experience", "Wireframing", "Figma"]
    },

    {
      icon: arrowIcon,
      role: [
        {
          head: "UX Reseacher",
          company: "Quirks Digital Solutions",
          position: "Engineering & Technology",
          location: "Lagos",
          workload: "Full time",
          timepost: "Job posted on Oct 12",
          brief: "We are looking for a good UX researcher with 5 years experience pellentesque..",
          locationIcons: profileLocation,
          workloadIcons: job
        }
      ],
      spec: [like, dislike, bookmark],
      tag: ["User experience", "Wireframing", "Figma"]
    }
  ]

  return (
    <div className='w-full grid gap-4'>
      {
        jobset.map(
          (job, indexJob) => {
            return(
              <div key={indexJob} className="flex flex-col gap-4 bg-slate-100 border-2 border-slate-400 p-2 rounded-lg">
                <div className='flex items-start gap-2 overflow-hidden'>
                  <div><img className='w-36 md:w-fit' src={job.icon} alt="" srcset="" /></div>
                  <div className='flex grow'>
                    {
                      job.role.map(
                        (role) => {
                          return(
                            <div className='flex flex-col gap-1'>
                              <div className='font-bold text-md'>{role.head}</div>
                              <div className='font-[600] text-slate-800 text-sm'>{role.company}</div>
                              <div className='font-[600] text-slate-800 text-xs mb-3'>{role.position}</div>
                              <div className='flex gap-2'>
                                <div className='font-[600] text-sm text-slate-700 text-sm flex items-center gap-1'>
                                  <img className='w-4 h-4' src={role.locationIcons} alt="location or venue" />
                                  {role.location}
                                </div>
                                <div className='font-[600] text-sm text-slate-700 text-sm flex items-center gap-1'>
                                  <img className='w-4 h-4' src={role.workloadIcons} alt="job-type" />
                                  {role.workload}
                                </div>
                              </div>
                              <div className='text-slate-600 italic text-sm'>{role.timepost}</div>
                              <div className='font-[600] text-slate-600 text-xs mt-3 flex flex-wrap'>{role.brief}</div>
                            </div>
                          )
                        }
                      )
                    }
                  </div>
                  <div className='flex gap-2 md:flex-1 w-fit justify-end'>
                    {
                      job.spec.map(
                        (spec) => {
                          return <img className='rounded-full bg-secondary-400 w-1/4' src={spec} alt="" />
                        }
                      )
                    }
                  </div>
                </div>
                <div className='flex gap-2'>
                  {
                    job.tag.map(
                      (tags, indexTag) => {
                        return(
                          <div key={indexTag} className="bg-secondary-200 text-sm text-primary-500 font-[600] p-3 flex rounded-lg items-center">{tags}</div>
                        )
                      }
                    )
                  }
                </div>
              </div>
            )
          }
        )
      }
    </div>
  )
}

export default Latest