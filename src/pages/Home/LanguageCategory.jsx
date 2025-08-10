import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FaArrowRight, FaMagento } from "react-icons/fa6";
import { RiEnglishInput } from "react-icons/ri";
import { GiPortugal, GiSpain, GiEgyptianProfile, GiIndiaGate } from "react-icons/gi";
import { SiAirchina } from "react-icons/si";
import { LuBadgeJapaneseYen, LuSwissFranc } from "react-icons/lu";

const categoryIcons = {
  English: <RiEnglishInput size={30} />,
  Spanish: <GiSpain size={30} />,
  French: <LuSwissFranc size={30} />,
  German: <FaMagento size={30} />,
  Chinese: <SiAirchina size={30} />,
  Japanese: <LuBadgeJapaneseYen size={30} />,
  Arabic: <GiEgyptianProfile size={30} />,
  Hindi: <GiIndiaGate size={30} />,
  Portuguese: <GiPortugal size={30} />,
};

const LanguageCategory = () => {
  const [tutorials, setTutorials] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://assignment-11-category-14-server.vercel.app/tutorials`)
      .then((res) => res.json())
      .then((data) => setTutorials(data));
  }, []);

  const languageCounts = tutorials.reduce((acc, tutorial) => {
    acc[tutorial.language] = (acc[tutorial.language] || 0) + 1;
    return acc;
  }, {});

  const categories = [
    "English",
    "Spanish",
    "French",
    "German",
    "Chinese",
    "Japanese",
    "Arabic",
    "Hindi",
    "Portuguese",
  ];

  return (
    <div className="bg-base-200 dark:bg-gray-900 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-10 max-w-6xl mx-auto">
        {categories.map((language) => (
          <div
            key={language}
            className="flex justify-between items-center p-4 
                       bg-white dark:bg-gray-800 
                       text-gray-900 dark:text-gray-100 
                       rounded-lg shadow-md hover:shadow-lg 
                       cursor-pointer transition"
            onClick={() => navigate(`/find-tutors/${language}`)}
          >
            <div className="flex items-center gap-3">
              {categoryIcons[language]}
              <div>
                <h3 className="font-bold text-lg">{language} tutors</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {languageCounts[language] || 0} teachers
                </p>
              </div>
            </div>
            <FaArrowRight />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageCategory;
