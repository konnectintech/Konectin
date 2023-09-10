import * as MdIcons from "react-icons/md";

function TeamCollapsedCard({ data, onCardClick }) {
  return (
    <div className="w-11/12 min-h-[30vh] mx-auto max-w-screen-xl text-neutral-300">
      <div className="team-grid text-center capitalize">
        {data?.map((team, index) => (
          <div key={index} className={`team-mate mate${index + 1}`}>
            <div
              onClick={() => onCardClick(index)}
              className="my-auto flex flex-col gap-1 items-center hover:bg-primary-500 hover:text-white py-8 px-6 rounded-lg cursor-pointer"
            >
              <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
                <img
                  className="aspect-square object-cover object-top"
                  src={team.image}
                  alt={team.name}
                />
              </div>
              <MdIcons.MdArrowForward className="my-2 arrow" />
              <h4 className="font-semibold">{team.name}</h4>
              <p className="text-xs text-neutral-400">{team.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamCollapsedCard;
