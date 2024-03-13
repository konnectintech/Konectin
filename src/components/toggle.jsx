const Toggle = ({ toggle, onHandleToggleChange, id }) => {
  return (
    <label htmlFor={id} className="relative flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        id={id}
        checked={toggle}
        onChange={onHandleToggleChange}
        value=""
      />
      <div className="h-6 w-9 p-px rounded-full bg-neutral-400 peer peer-checked:after:translate-x-2/3 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary-600"></div>
    </label>
  );
};

export default Toggle;
