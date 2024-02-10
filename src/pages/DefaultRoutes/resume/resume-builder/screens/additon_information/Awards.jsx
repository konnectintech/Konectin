import DatePicker from "react-multi-date-picker";

function Awards({ data, handleInputChange }) {
  return data.additionalInformation["awards"].map((entry, index) => (
    <div className="bg-white border rounded-xl border-neutral-500 py-8 px-12 my-8">
      <div className="font-bold mb-4 text-neutral-300 ">Awards</div>

      <div className="flex flex-col">
        <input
          className="input-container"
          type="text"
          name="title"
          id="title"
          value={entry.title}
          onChange={(e) =>
            handleInputChange(e.target.value, "awards", index, "title")
          }
          placeholder="Award Title"
        />
      </div>
      <div className="flex flex-col">
        <input
          className="input-container"
          type="text"
          name="organization"
          id="organization"
          value={entry.organization}
          onChange={(e) =>
            handleInputChange(e.target.value, "awards", index, "organization")
          }
          placeholder="Organization"
        />
      </div>

      <div className="flex flex-col w-full">
        <DatePicker
          arrow={false}
          onlyYearPicker
          id="startYear"
          placeholder={entry.awardYear === "" ? "Award Year" : entry.awardYear}
          value={new Date(`${entry.awardYear}`)}
          inputClass="input-container"
          className="bg-primary-600 text-white"
          onChange={(e) => {
            const date = e.toDate();
            handleInputChange(date.getFullYear(), "awards", index, "awardYear");
          }}
          maxDate={new Date()}
        />
      </div>
      <div className="flex flex-col">
        <textarea
          className="input-container"
          name="description"
          id="description"
          value={entry.description}
          onChange={(e) =>
            handleInputChange(e.target.value, "awards", index, "description")
          }
          placeholder="Description"
          style={{ height: "100px" }}
        />
      </div>
    </div>
  ));
}

export default Awards;
