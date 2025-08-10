import React, { useEffect, useState } from "react";
import FindTutor from "./FindTutor";

const FindTutors = () => {
  const [tutors, setTutors] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredTutors, setFilteredTutors] = useState([]);

  useEffect(() => {
    fetch(`https://assignment-11-category-14-server.vercel.app/tutorials`)
      .then((res) => res.json())
      .then((data) => {
        setTutors(data);
        setFilteredTutors(data);
      });
  }, []);

  const handleSearch = (e) => {
    const text = e.target.value;
    setSearchText(text);

    const filtered = tutors.filter((tutor) =>
      tutor.language.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredTutors(filtered);
  };

  return (
    <div className="my-10 max-w-5xl mx-auto">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by Language"
          value={searchText}
          onChange={handleSearch}
          className="w-full p-2 border rounded"
        />
      </div>

      {filteredTutors.length > 0 ? (
        <FindTutor tutors={filteredTutors} />
      ) : (
        <p className="text-center text-gray-500">No tutors found</p>
      )}
    </div>
  );
};

export default FindTutors;
