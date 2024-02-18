import React from "react";
import { useState } from "react";
import Toggle from "../layout/toggle";

function Notifications() {
  const [resumeToggle, setResumeToggle] = useState(false);
  const [jobToggle, setJobToggle] = useState(false);
  const [internshipToggle, setInternshipToggle] = useState(false);
  const [blogToggle, setBlogToggle] = useState(false);
  const [reminderToggle, setReminderToggle] = useState(false);

  return (
    <div className="sm:py-10 sm:px-12 w-full">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <p className="font-bold text-base sm:text-2xl leading-[160%] text-neutral-200">Stay informed with Konectin</p>
          <p className="text-neutral-300 text-xs sm:text-base">Enable notifications for updates on Resume Status, Job Alerts, Internship Opportunities, Blog Posts, and Reminders. Customize your alerts to never miss a beat!</p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-lg shadow-dropShadow flex items-center justify-between gap-6 p-6">
            <div className="flex flex-col gap-2 sm:w-[600px]">
              <p className="font-bold text-neutral-100 text-sm sm:text-xl">Resume Status Updates</p>
              <p className="font-medium text-neutral-300 text-xs sm:text-base">Enable notifications for updates on your resume status. You'll be notified when your resume has been reviewed or edited, or if there's feedback.</p>
            </div>
            <div className="">
              <Toggle toggle={resumeToggle} id="resumeToggle" onHandleToggleChange={value => setResumeToggle(value)} />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-dropShadow flex items-center justify-between gap-6 p-6">
            <div className="flex flex-col gap-2 sm:w-[600px]">
              <p className="font-bold text-neutral-100 text-sm  sm:text-xl">Job Alerts</p>
              <p className="font-medium text-neutral-300 text-xs sm:text-base">Turn on job alerts to be notified about job opportunities that match your skills and preferences. Be the first to know when a suitable job is posted.</p>
            </div>
            <div>
              <Toggle toggle={jobToggle} id="jobToggle" onHandleToggleChange={value => setJobToggle(value)} />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-dropShadow flex items-center justify-between gap-6 p-6">
            <div className="flex flex-col gap-2 sm:w-[600px]">
              <p className="font-bold text-neutral-100 text-sm sm:text-xl">Internship Alerts</p>
              <p className="font-medium text-neutral-300 text-xs sm:text-base">Enable internship alerts to stay informed about available internships that can provide you with valuable work experience.</p>
            </div>
            <div>
              <Toggle toggle={internshipToggle} id="internshipToggle" onHandleToggleChange={value => setInternshipToggle(value)} />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-dropShadow flex items-center justify-between gap-6 p-6">
            <div className="flex flex-col gap-2 sm:w-[600px]">
              <p className="font-bold text-neutral-100 text-sm sm:text-xl">Blog Updates</p>
              <p className="font-medium text-neutral-300 text-xs sm:text-base ">Stay updated with our upcoming blog. Enable this setting to receive notifications about new blog posts and valuable tips.</p>
            </div>
            <div>
              <Toggle toggle={blogToggle} id="blogToggle" onHandleToggleChange={value => setBlogToggle(value)} />
            </div>

          </div>
          <div className="bg-white rounded-lg shadow-dropShadow flex items-center justify-between gap-6 p-6">
            <div className="flex flex-col gap-2 sm:w-[600px]">
              <p className="font-bold text-neutral-100 text-sm sm:text-xl">Reminders</p>
              <p className="font-medium text-neutral-300 text-xs sm:text-base">Stay on top of your tasks. Enable reminders to be notified about upcoming events, deadlines, or tasks you need to complete.</p>
            </div>
            <div>
            <Toggle toggle={reminderToggle} id="reminderToggle" onHandleToggleChange={value => setReminderToggle(value)} />
            </div>

          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Notifications;
