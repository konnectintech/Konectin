function NavigationButton({ back, cont }) {
  return (
    <div className="w-full flex max-xxs:flex-col-reverse justify-between gap-4 mt-auto">
      <button
        onClick={back}
        className="border bg-neutral-1000 border-primary-200 rounded-lg text-sm py-3 px-10 sm:px-16 -transparent"
      >
        Back
      </button>
      <button
        onClick={cont}
        className="rounded-lg text-sm text-white py-3 px-10 sm:px-16 bg-primary-500"
      >
        Continue
      </button>
    </div>
  );
}

export default NavigationButton;
