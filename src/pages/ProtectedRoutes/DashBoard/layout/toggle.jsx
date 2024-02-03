import { useEffect, useState } from "react";

const Toggle = ({ toggle, onHandleToggleChange, id }) => {
    const [toggled, setToggled] = useState(toggle);

    useEffect(() => {
        onHandleToggleChange(toggled)
    }, [toggled, onHandleToggleChange])

    return (
        <label for={id} className="relative flex items-center cursor-pointer">
            <input 
                type="checkbox" 
                className="sr-only peer" 
                id={id} 
                toggle={toggled}
                onChange={() => setToggled(x => !x)}
                value=""
            />
            <div className="h-6 w-9 p-px rounded-full bg-neutral-400 peer peer-checked:after:translate-x-2/3 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary-600"></div>

        </label>



        // <div className="h-6 w-9 p-px rounded-full flex justify-end items-center bg-secondary-600" id="toggle-container" onClick={handleToggleChange}>
        //     <div className="h-5 w-5 rounded-full bg-white" id="toggle-btn">
        //     </div>
        // </div>
    )
}

export default Toggle;