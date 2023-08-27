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
              <div className="w-10/12 max-w-screen-md m-auto bg-neutral-1000 flex flex-col md:flex-row items-stretch min-h-[50vh] z-20 relative rounded-sm">
                <div className="bg-primary-600 md:w-1/3 flex flex-col gap-4 items-center py-8 rounded-t-sm md:rounded-t-0 md:rounded-l-sm">
                  <div className="mt-auto px-6 w-9/12 sm:w-1/2 md:w-10/12">
                    <img className="w-full" src={team.image} alt={team.name} />
                  </div>

                  <div className="flex gap-4 items-center justify-center text-white mb-auto">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={team.contact.twitter}
                      className="w-7 h-7 md:w-10 md:h-10 flex items-center justify-center rounded-full border-2 border-secondary-600"
                    >
                      <FaIcon.FaTwitter className="text-xs md:text-md" />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={team.contact.instagram}
                      className="w-7 h-7 md:w-10 md:h-10 flex items-center justify-center rounded-full border-2 border-secondary-600"
                    >
                      <FaIcon.FaInstagram className="text-xs md:text-md" />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
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
                  <div className="w-full max-h-[30vh] overflow-y-auto text-sm">
                    {team.bio}
                  </div>
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
