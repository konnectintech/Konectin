import TemplateComponent from "../layout/template";
import testData from "../../../../utils/data.json";
import { useState, useEffect } from "react";

function Resumes({ searchQuery, sortCriteria }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setData(testData);
    setFilteredData(testData);
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) => {
      return (
        item.title &&
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    setFilteredData(filtered);
  }, [searchQuery, data]);

  useEffect(() => {
    const sorted = (data, sortCriteria) => {
      if (sortCriteria === "newest") {
        return [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
      } else if (sortCriteria === "oldest") {
        return [...data].sort((a, b) => new Date(a.date) - new Date(b.date));
      }
    };

    const sortedData = sorted(data, sortCriteria);
    setFilteredData(sortedData);
  }, [sortCriteria, data]);

  return (
    <>
      <div className="flex flex-wrap items-center px-5 md:px-14 gap-y-14 gap-x-4 justify-between xl:grid xl:grid-cols-4">
        {filteredData.map((item) => (
          <TemplateComponent key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default Resumes;