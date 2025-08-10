

import React from "react";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.jpg";

const SisterConcern = () => {
  const concerns = [
    { id: 1, name: "Global English Academy", image: img1 },
    { id: 2, name: "Bright Future Institute", image: img2 },
    { id: 3, name: "Lingua Kids Center", image: img3 },
    { id: 4, name: "Culture Connect Hub", image: img4 },
    { id: 5, name: "Tech Language Lab", image: img5 },
    { id: 6, name: "Business English Pro", image: img6 },
  ];

  return (
    <div className="my-10 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Sister Concerns</h2>

      <div className="overflow-hidden">
        <div className="flex w-max animate-scroll">
          {/* Repeat logos twice for infinite smooth loop */}
          {[...concerns, ...concerns].map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-4 flex items-center justify-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-28 w-48 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
{/* ============ */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default SisterConcern;
