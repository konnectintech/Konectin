import DatePicker from "react-multi-date-picker";

function Certification({ data, handleInputChange }) {
  return data.additionalInformation["certificates"].map((entry, index) => (
    <div className="bg-white border rounded-xl border-neutral-500 py-8 px-12 my-8">
      <div className="font-bold mb-4 text-neutral-300 ">Certification</div>

      <div className="flex flex-col">
        <input
          className="input-container"
          type="text"
          name="name"
          id="name"
          value={entry.name}
          onChange={(e) =>
            handleInputChange(e.target.value, "certificates", index, "name")
          }
          placeholder="Certificate Name"
        />
      </div>
      <div className="flex flex-col">
        <input
          className="input-container"
          type="text"
          name="authority"
          id="authority"
          value={entry.authority}
          onChange={(e) =>
            handleInputChange(
              e.target.value,
              "certificates",
              index,
              "authority"
            )
          }
          placeholder="Certificate Authority"
        />
      </div>
      <div className="flex flex-col">
        <input
          className="input-container"
          type="text"
          name="license"
          id="license"
          value={entry.license}
          onChange={(e) =>
            handleInputChange(e.target.value, "certificates", index, "license")
          }
          placeholder="License Number"
        />
      </div>

      <div className="flex flex-col w-full">
        <DatePicker
          arrow={false}
          onlyYearPicker
          id="startDate"
          placeholder={entry.startDate === "" ? "Start Date" : entry.startDate}
          value={new Date(`${entry.startDate}`)}
          inputClass="input-container"
          className="bg-primary-600 text-white"
          onChange={(e) => {
            const date = e.toDate();
            handleInputChange(
              date.getFullYear(),
              "certificates",
              index,
              "startDate"
            );
          }}
          maxDate={new Date()}
        />
      </div>
      <div className="flex flex-col w-full">
        <DatePicker
          arrow={false}
          onlyYearPicker
          id="endDate"
          placeholder={entry.endDate === "" ? "End Date" : entry.endDate}
          value={new Date(`${entry.endDate}`)}
          inputClass="input-container"
          className="bg-primary-600 text-white"
          onChange={(e) => {
            const date = e.toDate();
            handleInputChange(
              date.getFullYear(),
              "certificates",
              index,
              "endDate"
            );
          }}
          maxDate={new Date()}
        />
      </div>
    </div>
  ));
}

export default Certification;
