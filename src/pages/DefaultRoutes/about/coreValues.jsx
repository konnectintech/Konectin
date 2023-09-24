function CoreValues({ data }) {
  return (
    <section className="w-11/12 mx-auto max-w-screen-2xl flex flex-col gap-8 -translate-y-12">
      <div className="headings">
        <div className="bg-primary-600 text-center py-2 text-white">
          <h2 className="text-2xl uppercase">
            Our <font className="text-secondary-600">Core Values</font>
          </h2>
        </div>
        <p className="w-10/12 text-center mx-auto font-semibold text-[15px] mt-4">
          At <font className="text-primary-600">Konectin</font>, Our mission is
          in alignment with our values and reflects all that we aim to achieve.
          At our company, we are dedicated to ensuring a user-friendly and
          top-tier experience for all our customers. Below are 5 core values we
          are driven by:
        </p>
      </div>

      <div className="selector-grid">
        {data?.map((selector, index) => (
          <div key={index} className={`selectors selector${index + 1}`}>
            <img
              className="variant"
              src={selector.variant}
              alt={selector.name}
            />
            <img
              className="w-1/2 rounded-full lg:w-3/12 mt-auto cursor-pointer border-2 border-transparent hover:border-secondary-500"
              src={selector.rep}
              alt={selector.name}
            />
          </div>
        ))}
      </div>

      <div className="custom-grid mx-auto">
        {data?.map((tab, index) => (
          <div
            key={index}
            className={`bg-white tab${
              index + 1
            } flex flex-col py-6 px-4 gap-4 items-center text-center rounded-md`}
          >
            <img src={tab.icon} alt={tab.name} />
            <h4 className="text-md font-semibold text-secondary-600 capitalize">
              {tab.name}
            </h4>
            <q className="text-xs leading-normal">{tab.text}</q>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoreValues;
