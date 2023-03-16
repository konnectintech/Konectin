import * as FaIcon from "react-icons/fa";

function TeamExpandedCard({ data, selected, onClose }) {
  return (
    <div>
      {data?.map(
        (team, index) =>
          selected === index && (
            <div
              key={index}
              className="h-screen bg-[#191A1Fcf] fixed w-full top-0 flex"
            >
              <div
                onClick={onClose}
                className="absolute z-10 w-full h-full"
              ></div>
              <div className="w-11/12 max-w-screen-xl m-auto bg-neutral-1000 flex flex-col md:flex-row items-stretch min-h-[50vh] z-20 relative rounded-sm">
                <div className="bg-primary-600 md:w-1/3 flex flex-col gap-4 items-center py-8 rounded-t-sm md:rounded-t-0 md:rounded-l-sm">
                  <div className="mt-auto px-6 w-9/12 sm:w-1/2 md:w-full">
                    <img
                      className="w-full"
                      src={team.profile}
                      alt={team.name}
                    />
                  </div>

                  <div className="flex gap-4 items-center justify-center text-white mb-auto">
                    <a
                      href={team.contact.twitter}
                      className="w-7 h-7 md:w-10 md:h-10 flex items-center justify-center rounded-full border-2 border-secondary-600"
                    >
                      <FaIcon.FaTwitter className="text-xs md:text-md" />
                    </a>
                    <a
                      href={team.contact.facebook}
                      className="w-7 h-7 md:w-10 md:h-10 flex items-center justify-center rounded-full border-2 border-secondary-600"
                    >
                      <FaIcon.FaFacebookF className="text-xs md:text-md" />
                    </a>
                    <a
                      href={team.contact.linkedin}
                      className="w-7 h-7 md:w-10 md:h-10 flex items-center justify-center rounded-full border-2 border-secondary-600"
                    >
                      <FaIcon.FaLinkedinIn className="text-xs md:text-md" />
                    </a>
                  </div>
                </div>

                <div className="flex flex-col gap-4 md:gap-6 md:w-2/3 h-2/3 my-auto py-8 sm:py-6 px-6 md:px-12">
                  <div className="text-neutral-100 text-sm">
                    <h1 className="text-xl font-semibold capitalize">
                      {team.name}
                    </h1>
                    <span>{team.title}</span>
                  </div>
                  <p className="w-full max-h-[30vh] overflow-y-auto text-sm">
                    Meet Jane Cooper, the visionary founder and driving force
                    behind Konectin. With over 20 years of experience in the
                    tech industry, Jane has established herself as a leading
                    expert in the field of job search and career development.
                    Driven by a deep passion for helping people achieve their
                    career goals, Jane founded Konectin with the goal of
                    revolutionizing the job search experience. Her innovative
                    approach combines cutting-edge technology with personalized
                    support and guidance, creating a platform that empowers job
                    seekers to take control of their professional futures. Under
                    Jane's leadership, Konectin has quickly become one of the
                    most trusted and respected job search platforms in the
                    industry. Her unwavering commitment to excellence has earned
                    her numerous accolades and awards, including recognition as
                    one of the Top 100 Women in Tech. In addition to her work at
                    Konectin, Jane is a sought-after speaker and thought leader,
                    regularly sharing her insights and expertise at industry
                    conferences and events. She is also a passionate advocate
                    for diversity and inclusion, working to create a more
                    equitable and accessible job market for all. When she's not
                    busy leading the charge at Konectin, Jane enjoys spending
                    time with her family and exploring new cultures through
                    travel. Her love of adventure and passion for making a
                    difference are at the heart of everything she does,
                    inspiring those around her to aim high and dream big.
                  </p>
                </div>

                <div
                  onClick={onClose}
                  className="absolute cursor-pointer right-3 top-3"
                >
                  <FaIcon.FaTimesCircle color="#F11010" size="1.3rem" />
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
}

export default TeamExpandedCard;
