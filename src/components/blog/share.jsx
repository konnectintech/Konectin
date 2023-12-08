import { useState } from "react";
import { motion } from "framer-motion";
import * as AiIcons from "react-icons/ai";
import {
  SFacebook,
  SGoogle,
  SInstagram,
  SLinkedin,
  STwitter,
  SWhatsapp,
} from "../../assets";

function Share({
  pathname,
  htmlTitle,
  rssSummary,
  isLoading,
  numOfShares,
  updateBlogActions,
}) {
  const [share, setShare] = useState(false);
  const url = `https://konectin.org${pathname}`;

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-150%" },
  };

  const socials = [
    {
      image: SFacebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      name: "facebook",
    },
    {
      image: SGoogle,
      url: `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=${htmlTitle}&body=${rssSummary}+&ui=2&tf=1&pli=1`,
      name: "google",
    },
    {
      image: SInstagram,
      url: "https://www.instagram.com/?url=https://www.drdrop.co/",
      name: "instagram",
    },
    {
      image: SLinkedin,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&htmlTitle=${htmlTitle}&summary=${rssSummary}&source=Konectin`,
      name: "linkedin",
    },
    {
      image: STwitter,
      url: `https://twitter.com/share?url=${url}&text=${htmlTitle}`,
      name: "twitter",
    },
    {
      image: SWhatsapp,
      url: `https://wa.me/?text=Check%20out%20this%20blog%0aTitle%20-%20${htmlTitle}%0aLink%20-%20${encodeURIComponent(
        url
      )}`,
      name: "whatsapp",
    },
  ];

  const toShared = () => {
    updateBlogActions((prev) => ({ ...prev, shares: numOfShares + 1 }));
  };

  return (
    <div className="flex gap-3 items-center">
      <div className="overflow-hidden w-fit">
        <motion.div
          animate={share ? "open" : "closed"}
          variants={{
            open: { display: "flex" },
            closed: { display: "none" },
          }}
          className="flex-wrap gap-1 items-center"
        >
          {socials.map((social, id) => (
            <motion.a
              key={social.name + id}
              title={`Share to ${social.name}`}
              animate={share ? "open" : "closed"}
              variants={variants}
              transition={{ delay: 0.5 / (id + 1) }}
              target="_blank"
              href={social.url}
              rel="noreferrer"
              onClick={toShared}
              className="w-[28px] h-[28px] block"
            >
              <img
                className="w-full h-full"
                src={social.image}
                alt={`Share to ${social.name}`}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <div
        className={
          isLoading
            ? "blurry-text p-2"
            : "bg-neutral-1000 p-2 cursor-pointer w-fit flex items-center justify-center gap-1"
        }
        onClick={() => !isLoading && setShare((prev) => !prev)}
      >
        <AiIcons.AiOutlineShareAlt />
        <p>{numOfShares}</p>
      </div>
    </div>
  );
}

export default Share;
