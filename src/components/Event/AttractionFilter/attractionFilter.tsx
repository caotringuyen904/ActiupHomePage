import { attractionCategories } from "../../../service/dataAPI"; // Adjust path as per your project structure
import { getEventAttractionById } from "../../../service/index";
import { useState, useEffect } from "react";
import { AxiosResponse } from "axios";

interface Event {
  id: string;
  event_slug: string;
  banner_url: string;
  min_price: number;
  start_date: string;
}

const AttractionFilter = () => {
  const [attractionEvent, setAttractionEvent] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const fetchData = async (categoryId: string) => {
    setLoading(true);

    try {
      const [sportsResponse]: [AxiosResponse<Event>] = await Promise.all([
        getEventAttractionById(categoryId),
      ]);

      let attractionData: Event[] = Array.isArray(sportsResponse.data)
        ? sportsResponse.data
        : Object.values(sportsResponse.data);
      attractionData = attractionData.flat();
      setAttractionEvent(attractionData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (attractionCategories.length > 0) {
      const defaultCategoryId = attractionCategories[0].event_category_id;
      setSelectedCategory(defaultCategoryId);
      fetchData(defaultCategoryId);
    }
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetchData(selectedCategory);
    }
  }, [selectedCategory]);

  return (
    <div className="bg-blue-rgb p-10">
      <h1 className="container mx-auto text-2xl font-bold mb-8 text-white">
        GIẢI TRÍ
      </h1>
      <div className="flex flex-wrap gap-2 mb-6 container mx-auto">
        {attractionCategories.map((category) => (
          <button
            key={category.event_category_id}
            onClick={() => setSelectedCategory(category.event_category_id)}
            className={`py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
              selectedCategory === category.event_category_id
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-orange-500 hover:text-white"
            }`}
          >
            {category.cat_name}
          </button>
        ))}
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          Loading...
        </div>
      ) : (
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
            {attractionEvent.map((event, index) => (
              <div
                key={event.id}
                className={`${
                  index === 0 ? "md:col-span-3 flex" : "bg-white"
                } text-center p-4 text-2xl rounded-lg`}
              >
                {index === 0 ? (
                  <>
                    <div className="w-full md:w-2/3">
                      <img
                        src={event.banner_url}
                        alt={event.event_slug}
                        className="w-full h-full object-cover rounded-lg mb-4"
                      />
                    </div>
                    <div className="flex-grow md:w-1/3 p-4 bg-white ml-8 rounded-lg">
                      <h3 className="text-lg font-bold ">{event.event_slug}</h3>
                      <p className="text-gray-600">
                        Start Date:{" "}
                        {new Date(event.start_date).toLocaleDateString()}
                      </p>
                      <p className="text-gray-600">Từ {event.min_price}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      src={event.banner_url}
                      alt={event.event_slug}
                      className="w-full h-48 object-cover rounded-t-lg mb-4"
                    />
                    <h3 className="text-lg font-bold">{event.event_slug}</h3>
                    <p className="text-gray-600">
                      Start Date:{" "}
                      {new Date(event.start_date).toLocaleDateString()}
                    </p>
                    <p className="text-gray-600">Từ {event.min_price}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AttractionFilter;
