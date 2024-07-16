import React, { useRef, useState } from "react";
import { data } from "./data";

const Insurance: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const scrollTo = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      if (direction === "left") {
        container.scrollLeft -= 200; // Adjust as needed
      } else {
        container.scrollLeft += 200; // Adjust as needed
      }
    }
  };

  return (
    <div
      className="container mx-auto mt-20 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="text-2xl font-bold mb-4 mt-10">BẢO HIỂM</h1>

      {/* Previous Button */}
      <svg
        onClick={() => scrollTo("left")}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-white rounded-full w-10 h-10 flex items-center justify-center ${
          isHovered ? "visible" : "invisible"
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>

      {/* Next Button */}
      <svg
        onClick={() => scrollTo("right")}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-white rounded-full w-10 h-10 flex items-center justify-center ${
          isHovered ? "visible" : "invisible"
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 justify-start scrollbar-hide"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="flex-none bg-white shadow-md rounded-lg w-350 h-70 mb-10 mt-8"
          >
            <img src={item.img_url} alt={item.title} className="w-90 h-60" />
            <div className="p-7">
              <h4 className="text-l font-semibold mb-10">{item.title}</h4>
              <div className="flex justify-between items-center">
                <p className="text-gray-600 text-xs">
                  Chi tu <br /> <strong>{item.price} d</strong>
                </p>
                <button className="bg-blue-800 hover:bg-blue-600 text-white py-1 px-3 rounded text-center">
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insurance;
