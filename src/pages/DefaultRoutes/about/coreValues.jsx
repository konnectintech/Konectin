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
          At <font className="text-primary-600">Konectin</font>, our mission is
          to connect talented job seekers with top employers from around the
          world. We are driven by 5 core values:
        </p>
      </div>

      <div className="custom-grid mx-auto">
        {data?.map((value, index) => (
          <div
            key={index}
            className="bg-white flex flex-col py-6 px-4 gap-4 items-center text-center rounded-md"
          >
            <img src={value.icon} alt={value.name} />
            <h4 className="text-md font-semibold text-secondary-600 capitalize">
              {value.name}
            </h4>
            <q className="text-xs leading-normal">{value.text}</q>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoreValues;
