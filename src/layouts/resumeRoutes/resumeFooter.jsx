import * as FaIcon from "react-icons/fa";

function ResumeFooter() {
  return (
    <footer className="bg-primary-600 pt-0 px-8 text-xs text-gray-200">
      <div className="w-11/12 mx-auto max-w-screen-2xl flex flex-col justify-between items-center gap-4">
        <span className=" w-full pt-8 border-b border-white"></span>
        <div className="w-full text-center text-white pb-10 md:py-6 md:flex justify-between items-center">
          <div className="flex gap-4 items-center justify-center mb-6 md:mb-0">
            <a
              href="http://www.twitter.com/KonectinInc"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border-2"
            >
              <FaIcon.FaTwitter size="1.1rem" />
            </a>
            <a
              href="https://web.facebook.com/people/Konectin-Inc/100091305090654/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border-2"
            >
              <FaIcon.FaFacebookF size="1rem" />
            </a>
            <a
              href="https://www.linkedin.com/company/konectin/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border-2"
            >
              <FaIcon.FaLinkedinIn size="1rem" />
            </a>
          </div>
          <p className="mb-4 md:mb-0">A product of konectin</p>
          <p>
            &copy; {new Date().getFullYear()} Konectin Ltd. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default ResumeFooter;
