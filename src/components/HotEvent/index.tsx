import { getHotEvent } from "../../service/index";
import { useState, useEffect } from "react";
import { AxiosResponse } from "axios";

interface Event {
  id: string;
  event_slug: string;
  banner_url: string;
  min_price: number;
  start_date: string;
}
const HotEvent = () => {
  const [hotEvent, setHotEvent] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    try {
      const [hotEventsResponse]: [AxiosResponse<Event>] = await Promise.all([
        getHotEvent(),
      ]);

      let hotEventsData: Event[] = Array.isArray(hotEventsResponse.data)
        ? hotEventsResponse.data
        : Object.values(hotEventsResponse.data);
      hotEventsData = hotEventsData.flat();
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
    <div className="container mx-auto mt-20">
      <h1 className="container mx-auto text-2xl font-bold mb-4 mt -10">
        SỰ KIỆN NỔI BẬT
      </h1>

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
                  src={event.banner_url}
                  alt={event.event_slug}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-lg font-bold">{event.event_slug}</h3>
                <p className="text-gray-600">
                  Start Date: {new Date(event.start_date).toLocaleDateString()}
                </p>
                <p className="text-gray-600">Từ {event.min_price} đ</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HotEvent;
