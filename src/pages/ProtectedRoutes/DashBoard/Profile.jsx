import React from 'react'
import { editIcon } from '../../../assets'

const Profile = () => {

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
    strokeLenoffset = strokeLen * ((100 - progress) / 100),
    user = [ 
      {
        profileBg: "profile background",
        profilePic: "profile picture",
        name: "John Klostermann Doe",
        experience: "5 years",
        status: "Unemployed",
        location: "Lagos, Nigeria",
      }
    ],

    content = [
      {
        head: "Availability Status",
        text: "Keeping this section up to date will help employers & recruiters find you. They will know the field you are in, what your preferred industries are, and if you are actively looking.",
        edit: editIcon,
        editTxt: "Edit"
      },
      {
        head: "About Me",
        text: "Keeping this section up to date will help employers & recruiters find you. They will know the field you are in, what your preferred industries are, and if you are actively looking.",
        edit: editIcon,
        editTxt: "Edit"
      }
    ],

    experiences = [
      {
        head: "Work Experience",
        text: "Add your past or current experiences such as; Internships, Jobs and Volounteers",
        edit: editIcon,
        editTxt: "Add Experience",
        experience: {
          head: "Product Designer at Konectin",
          location: "Lagos, Nigeria . April 2022 - May 2023 ( 2 years)",
          text: "Full time Employment",
          link: "see all"
        }
      },
      {
        head: "Education",
        text: "List all your relevant Academic qualifications here",
        edit: editIcon,
        editTxt: "Add Experience",
        experience: {
          head: "Product Designer at Konectin",
          location: "Lagos, Nigeria . April 2022 - May 2023 ( 2 years)",
          text: "Full time Employment",
          link: "see all"
        }
      }
    ]

  return (
    <div>
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
        {
          user.map(
            (value, index) => {
              return(
                <div className='user-details border-b-2 border-slate-400 py-8' key={index}>
                  <div>{value.profileBg}</div>
                  <div>{value.profilePic}</div>
                 <div className='grid gap-2'>
                    <div className='text-md font-bold'>{value.name}</div>
                    <div className='text-sm font-bold text-slate-600'>Experience: {value.experience}</div>
                    <div className='text-sm font-bold text-slate-600'>Employment Status: {value.status}</div>
                    <div className='text-sm font-bold text-slate-600'>Location: {value.location}</div>
                  </div>
                </div>
              )
            }
          )
        }

        {
          content.map(
            (value, index) => {
              return(
                <div className='flex flex-col py-8'>
                  <div className='text-sm font-bold'>{value.head}</div>
                  <div className='flex flex-col md:flex-row text-xs'>
                    <div className='text-slate-600'>{value.text}</div>
                    <div className='text-primary-400 flex items-center justify-end'>
                      <img className='p-0 m-0 w-10 inset-0 flex items-start' src={value.edit} alt="edit"/>
                      {value.editTxt}
                    </div>
                  </div>
                </div>
              )
            }
          )
        }

        {
          experiences.map(
            (value, index) => {
              return(
                <div className='flex flex-col py-8'>
                  <div className='text-sm font-bold'>{value.head}</div>
                  <div className='text-xs text-slate-600'>{value.text}</div>

                  <div className='flex flex-col pt-6 gap-2 font-bold text-xs'>
                    <div className='text-black'>{value.experience.head}</div>
                    <div className='text-black'>{value.experience.text}</div>
                    <div className='text-black'>{value.experience.location}</div>
                    <div className='text-black'>{value.experience.link}</div>
                    <div className='text-primary-400 flex items-center justify-end'>
                      <img className='p-0 m-0 w-10 inset-0 flex items-start' src={value.edit} alt="edit"/>
                      {value.editTxt}
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

export default Profile