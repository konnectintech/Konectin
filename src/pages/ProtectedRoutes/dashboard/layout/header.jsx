import { bell, chat, konectinIcon, person1Icon } from "../../../../assets";

function Header() {
  return (
    <div className="flex bg-neutral-1000 border-b border-neutral-400 items-center py-5 px-6 justify-between">
      <div>
        <img src={konectinIcon} alt="Konectin" />
      </div>
      <div className="flex items-center gap-6">
        <div>
          <img src={chat} alt="Konectin customer service" />
        </div>
        <div>
          <img src={bell} alt="Konectin user notification" />
        </div>
        <div className="flex items-center gap-3">
          <div>
            <img src={person1Icon} alt="Konectin user notification" />
          </div>
          <div className="flex flex-col">
            <span className="text-neutral-200">John Doe</span>
            <span className="text-neutral-grey text-xs">Johndoe@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
