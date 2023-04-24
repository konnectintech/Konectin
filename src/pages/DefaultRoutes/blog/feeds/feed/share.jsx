import * as SlIcons from "react-icons/sl";

function Share() {
  return (
    <div className="font-bold text-primary-500">
      <h4 className="text-[12px]">Share this article</h4>
      <div className="flex gap-3 items-center mt-2">
        <a
          className="px-6 py-2 text-white bg-primary-500 rounded-md flex gap-2 items-center"
          href="gmal"
          target="_blank"
        >
          <SlIcons.SlSocialGoogle size="1rem" />
          Gmail
        </a>
        <a
          className="px-6 py-2 text-white bg-primary-500 rounded-md flex gap-2 items-center"
          href="gmal"
          target="_blank"
        >
          <SlIcons.SlSocialLinkedin size="1rem" />
          LinkedIn
        </a>
        <a
          className="px-6 py-2 text-white bg-primary-500 rounded-md flex gap-2 items-center"
          href="gmal"
          target="_blank"
        >
          <SlIcons.SlSocialTwitter size="1rem" />
          Twitter
        </a>
        <a
          className="px-6 py-2 text-white bg-primary-500 rounded-md flex gap-2 items-center"
          href="gmal"
          target="_blank"
        >
          <SlIcons.SlSocialFacebook size="1rem" />
          Facebook
        </a>
      </div>
    </div>
  );
}

export default Share;
