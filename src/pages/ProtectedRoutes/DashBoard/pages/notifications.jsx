import React from "react";

function Notifications() {
  return (
    <div className="py-14 px-12">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <p className="font-bold text-2xl leading-[160%] text-neutral-200">Stay informed with Konectin</p>
          <p className="text-neutral-300">Enable notifications for updates on Resume Status, Job Alerts, Internship Opportunities, Blog Posts, and Reminders. Customize your alerts to never miss a beat!</p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="rounded-lg shadow-dropShadow flex items-center justify-between gap-6 p-6">
            <div className="flex flex-col gap-2 w-[600px]">
              <p className="font-bold text-neutral-100 text-xl">Resume Status Updates</p>
              <p className="font-medium text-neutral-300">Enable notifications for updates on your resume status. You'll be notified when your resume has been reviewed or edited, or if there's feedback.</p>
            </div>
            <div className="h-6 w-6 flex items-center justify-center border border-dashed border-blue-500">
              1
            </div>
          </div>
          <div className="rounded-lg shadow-dropShadow flex items-center justify-between gap-6 p-6">
            <div className="flex flex-col gap-2 w-[600px]">
              <p className="font-bold text-neutral-100 text-xl">Job Alerts</p>
              <p className="font-medium text-neutral-300">Turn on job alerts to be notified about job opportunities that match your skills and preferences. Be the first to know when a suitable job is posted.</p>
            </div>
            <div className="h-6 w-6 flex items-center justify-center border border-dashed border-blue-500">
              1
            </div>
          </div>
          <div className="rounded-lg shadow-dropShadow flex items-center justify-between gap-6 p-6">
            <div className="flex flex-col gap-2 w-[600px]">
              <p className="font-bold text-neutral-100 text-xl">Internship Alerts</p>
              <p className="font-medium text-neutral-300">Enable internship alerts to stay informed about available internships that can provide you with valuable work experience.</p>
            </div>
            <div className="h-6 w-6 flex items-center justify-center border border-dashed border-blue-500">
              1
            </div>
          </div>
          <div className="rounded-lg shadow-dropShadow flex items-center justify-between gap-6 p-6">
            <div className="flex flex-col gap-2 w-[600px]">
              <p className="font-bold text-neutral-100 text-xl">Blog Updates</p>
              <p className="font-medium text-neutral-300">Stay updated with our upcoming blog. Enable this setting to receive notifications about new blog posts and valuable tips.</p>
            </div>
            <div className="h-6 w-6 flex items-center justify-center border border-dashed border-blue-500">
              1
            </div>
          </div>
          <div className="rounded-lg shadow-dropShadow flex items-center justify-between gap-6 p-6">
            <div className="flex flex-col gap-2 w-[600px]">
              <p className="font-bold text-neutral-100 text-xl">Reminders</p>
              <p className="font-medium text-neutral-300">Stay on top of your tasks. Enable reminders to be notified about upcoming events, deadlines, or tasks you need to complete.</p>
            </div>
            <div className="h-6 w-6 flex items-center justify-center border border-dashed border-blue-500">
              1
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Notifications;
