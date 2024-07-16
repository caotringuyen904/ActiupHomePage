import { getOranizeEvent } from "../../service/index";
import { useState, useEffect } from "react";
import { AxiosResponse } from "axios";

interface Event {
  id: string;
  cover_banner: string;
  logo: string;
  thumbnail: string;
  merchant_name_vi: string;
  number_of_events: number;
}

const OranizeEvent = () => {
  const [hotEvent, setHotEvent] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    try {
      const hotEventsResponse: AxiosResponse<{ result: { merchants: Event[] } }> = await getOranizeEvent();
      const hotEventsData: Event[] = hotEventsResponse.data.result.merchants;
      setHotEvent(hotEventsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-20 bg-main-orange ">
      <h1 className="text-2xl font-bold mb-2 ml-4 text-white">BAN TO CHUC</h1>

      {loading ? (
        <div className="flex justify-center items-center h-screen">
          Loading...
        </div>
      ) : (
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {hotEvent.map((event) => (
              <div key={event.id} className="bg-white shadow-md rounded-lg p-4">
                <img
                  src={event.thumbnail}
                  alt={event.merchant_name_vi}
                  className="w-full h-48 rounded-t-lg mb-4"
                />
                <h3 className="text-lg font-bold">{event.merchant_name_vi}</h3>
                <p className="text-gray-600">{event.number_of_events} sự kiện đang/sắp mở</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OranizeEvent;
