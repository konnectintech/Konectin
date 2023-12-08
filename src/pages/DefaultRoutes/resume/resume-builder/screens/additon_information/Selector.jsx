import React from "react";
import { Link } from "react-router-dom";

function Selector({ data }) {
  return (
    <div className="flex flex-col gap-2 py-2">
      {data.additionalInformation &&
        Object.keys(data.additionalInformation).map((sectionName) => (
          <div key={sectionName}>
            <Link className="capitalize" to={sectionName}>
              {sectionName}
            </Link>
          </div>
        ))}
    </div>
  );
}

export default Selector;
