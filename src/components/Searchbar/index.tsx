import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const vietnamLocations = [
  "Hanoi",
  "Ho Chi Minh City",
  "Da Nang",
  "Nha Trang",
  "Hoi An",
  "Hue",
  "Phu Quoc",
  "Sa Pa",
  "Ha Long",
];

const internationalLocations = ["Paris", "New York", "Tokyo"];

const getRandomLocations = (locations: string[], count: number) => {
  const shuffled = [...locations].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const Searchbar: React.FC = () => {
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [openPopup, setOpenPopup] = useState<"location" | "date" | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenPopup(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    // Implement search functionality here
    console.log("Location:", location);
    console.log("Date:", startDate);
  };

  const handleLocationSelect = (location: string) => {
    setLocation(location);
    setOpenPopup(null);
  };

  return (
    <div
      className="relative flex items-center justify-center p-4 w-full bg-main-blue transition-all duration-300 h-[50px] opacity-100 z-10"
      style={{ backgroundColor: "rgb(1, 27, 182)", width: "100%" }}
    >
      <div className="relative" ref={ref}>
        <button
          onClick={() =>
            setOpenPopup(openPopup === "location" ? null : "location")
          }
          className=" px-4 py-2 bg-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {location || "Select Location"}
        </button>
        {openPopup === "location" && (
          <div className="absolute top-12 left-0 w-96 bg-white border rounded shadow-lg p-4 flex space-x-4">
            <div className="flex-1">
              <h3 className="font-bold mb-2">
                Các địa điểm nổi bật ở Việt Nam
              </h3>
              <ul>
                {getRandomLocations(vietnamLocations, 9).map((loc) => (
                  <li
                    key={loc}
                    className="cursor-pointer hover:bg-gray-200 p-2 rounded"
                    onClick={() => handleLocationSelect(loc)}
                  >
                    {loc}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <h3 className="font-bold mb-2">Các địa điểm quốc tế</h3>
              <ul>
                {getRandomLocations(internationalLocations, 3).map((loc) => (
                  <li
                    key={loc}
                    className="cursor-pointer hover:bg-gray-200 p-2 rounded"
                    onClick={() => handleLocationSelect(loc)}
                  >
                    {loc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      <DatePicker
        selected={startDate}
        onChange={(date: Date | null) => setStartDate(date)}
        open={openPopup === "date"}
        className="px-4 py-2 border-t border-b focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholderText="Select Date"
        dateFormat="MM/yyyy"
        showMonthYearPicker
        onFocus={() => setOpenPopup("date")}
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 border rounded-r-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
    </div>
  );
};

export default Searchbar;
