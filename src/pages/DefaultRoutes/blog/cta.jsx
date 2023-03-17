import { Link } from "react-router-dom";
import { BlogCTA1Image, BlogCTA2Image, BlogCTAImage } from "../../../assets";

function CTASection() {
  return (
    <div className="blog-grid-system w-full max-w-screen-lg mx-auto gap-6">
      <div className="rounded-md h-full flex flex-col">
        <img src={BlogCTAImage} alt="Konectin Resume Builder" />
        <div className="text-sm text-neutral-200 px-2 py-4 bg-white flex flex-col h-full rounded-b-md">
          <h4>Konectin Resume Builder</h4>
          <ul className="text-neutral-300 list-disc list-inside mt-4 sm:my-auto">
            <li>Choose your template</li>
            <li>Download pdf for free</li>
            <li>Apply for jobs easily</li>
          </ul>

          <Link
            className="mt-6 sm:mt-auto mx-auto py-2 px-10 rounded-sm text-center text-white bg-neutral-400"
            to="/resume"
          >
            Get started
          </Link>
        </div>
      </div>

      <div className="rounded-md h-full flex flex-col">
        <img
          src={BlogCTA1Image}
          alt="Stay informed, enlightened and updated with the job and career world."
        />
        <div className="text-lg font-medium text-neutral-200 px-2 py-4 bg-white flex flex-col h-full rounded-b-md">
          <p>
            Stay informed, enlightened and updated with the job and career
            world.
          </p>

          <Link
            className="mt-6 sm:mt-auto mx-auto py-2 px-10 rounded-sm text-center text-white bg-neutral-400 text-sm"
            to="/blog/all"
          >
            Go to blog
          </Link>
        </div>
      </div>

      <div className="rounded-md h-full flex flex-col">
        <img
          className="block w-full h-full"
          src={BlogCTA2Image}
          alt="Konectin Resume Builder"
        />
      </div>
    </div>
  );
}

export default CTASection;
