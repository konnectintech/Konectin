import { useAuth } from "../../middleware/auth";


const Dropdown = () => {
    const { user } = useAuth();
    return (
        <div className="w-[300px] bg-white pt-11 pb-4 px-4 rounded-md absolute right-4 drop-shadow-dropdown">
            <div className="flex items-center gap-4 text-xs text-neutral-400 mb-6">
                {user?.picture ? (
                  <img
                    src={user?.picture}
                    alt={user?.fullname}
                    className="w-16 h-16 rounded-full bg-neutral-grey"
                  />
                ) : (
                  <div className="rounded-full bg-neutral-1000 flex items-center justify-center w-16 h-16">
                    <h3 className="text-uppercase sm:text-3xl font-black text-neutral-100">
                      {user?.fullname.split(" ")[0].charAt(0)}
                      {user?.fullname.split(" ")[1].charAt(0)}
                    </h3>
                  </div>
                )}
              <div>
                <p
                  className="text-neutral-100 text-base font-bold"
                >
                  {user?.fullname}
                </p>
                <p>{user?.email}</p>
              </div>
            </div>
            <hr />
            <ul className="my-4 flex flex-col gap-2">
                <li className="p-2 rounded-md hover:bg-primary-100">Profile</li>
                <li className="p-2 rounded-md hover:bg-primary-100">Saved Resumes & Cover Letters</li>
            </ul>
            <hr />
            <ul className="mt-4 flex flex-col gap-2">
                <li className="p-2 rounded-md hover:bg-primary-100">Help</li>
                <li className="p-2 rounded-md hover:bg-primary-100">Log out</li>
            </ul>
        </div>
    )
}

export default Dropdown;