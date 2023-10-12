import * as SlIcons from "react-icons/sl";

function Share({ pathname, htmlTitle, rssSummary }) {
  const url = `https://konectin.org${pathname}`;

  return (
    <div className="font-bold text-primary-500">
      <h4 className="text-[12px]">Share this article</h4>
      <div className="flex flex-wrap gap-3 items-center mt-2">
        <a
          className="px-6 py-2 text-white bg-primary-500 rounded-md flex gap-2 items-center"
          href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=${htmlTitle}&body=${rssSummary}+&ui=2&tf=1&pli=1`}
          target="_blank"
          rel="noreferrer"
        >
          <SlIcons.SlSocialGoogle size="1rem" />
          Gmail
        </a>
        <a
          className="px-6 py-2 text-white bg-primary-500 rounded-md flex gap-2 items-center"
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&htmlTitle=${htmlTitle}&summary=${rssSummary}&source=Konectin`}
          target="_blank"
          rel="noreferrer"
        >
          <SlIcons.SlSocialLinkedin size="1rem" />
          LinkedIn
        </a>
        <a
          className="px-6 py-2 text-white bg-primary-500 rounded-md flex gap-2 items-center"
          target="_blank"
          href={`https://twitter.com/share?url=${url}&text=${htmlTitle}`}
          rel="noreferrer"
        >
          <SlIcons.SlSocialTwitter size="1rem" />
          Twitter
        </a>
        <a
          className="px-6 py-2 text-white bg-primary-500 rounded-md flex gap-2 items-center"
          target="_blank"
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          rel="noreferrer"
        >
          <SlIcons.SlSocialFacebook size="1rem" />
          Facebook
        </a>
      </div>
    </div>
  );
}

export default Share;
