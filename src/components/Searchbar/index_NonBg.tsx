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
    <div className="absolute container bottom-[-45px] left-1/2 transform -translate-x-1/2 mt-10 w-[30%]">
      <div className="flex items-center justify-center bg-white h-[90px] w-auto border rounded-lg p-4 shadow-lg">
        <div className="relative border-r-4 border-gray-300" ref={ref}>
          <button
            onClick={() =>
              setOpenPopup(openPopup === "location" ? null : "location")
            }
            className="px-4 bg-white text-gray-400  focus:outline-none  focus:ring-gray-500"
          >
            {location || "Nhap dia diem hoac su kien"}
          </button>
          {openPopup === "location" && (
            <div className="absolute top-full left-0 w-96 bg-white border rounded shadow-lg p-4 flex space-x-6 mt-8">
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
              <div className="flex-2">
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
          showMonthYearPicker
          dateFormat="MM-yyyy"
          locale="vi"
          placeholderText="Thoi gian dien ra su kien"
          className="bg-gray-50 text-gray-900 text-sm focus:ring-gray-500 w-full pl-8 pb-8 mt-8 border-none focus:outline-none   "
        />
        <button
          onClick={handleSearch}
          className="px-5 py-1 border rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-8"
        >
          Tim
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
