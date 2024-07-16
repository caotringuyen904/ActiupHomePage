import { useState, useEffect } from "react";
import { getBlog } from "../../service/index";
import { AxiosResponse } from "axios";

interface BlogPost {
  id: string;
  img_url: string;
  title_vi: string;
  short_description_vi: string;
  category: string; // Assuming each post has a category field
}

const Blog = () => {
  // State variables for managing blog posts, loading state, filtered posts, and active filter
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("Tat ca");

  // Function to fetch blog data from an API using Axios
  const fetchData = async () => {
    setLoading(true);

    try {
      const [blogPostsResponse]: [AxiosResponse<BlogPost[]>] =
        await Promise.all([getBlog()]);

      // Flatten the response data if necessary and set it to state
      let blogsData: BlogPost[] = Array.isArray(blogPostsResponse.data)
        ? blogPostsResponse.data
        : Object.values(blogPostsResponse.data);
      blogsData = blogsData.flat();
      setBlogPosts(blogsData);
      setFilteredPosts(blogsData); // Initially, show all posts
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Function to filter blog posts based on category
  const filterPosts = (category: string) => {
    setActiveFilter(category);
    if (category === "Tat ca") {
      setFilteredPosts(blogPosts); // Show all posts when "Tat ca" (All) filter is selected
    } else {
      const filtered = blogPosts.filter((post) => post.category === category);
      setFilteredPosts(filtered); // Filter posts based on selected category
    }
  };

  // Function to get random posts from the list
  const getRandomPosts = (posts: BlogPost[], count: number) => {
    const shuffled = [...posts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // useEffect hook to update filtered posts when active filter changes
  useEffect(() => {
    if (activeFilter !== "Tat ca") {
      const randomPosts = getRandomPosts(blogPosts, 3);
      setFilteredPosts(randomPosts); // Show random posts if filter is not "Tat ca" (All)
    }
  }, [activeFilter, blogPosts]);

  // JSX structure for rendering the Blog component
  return (
    <div className="container mx-auto mt-20 mb-10">
      <h1 className="text-2xl font-bold mb-4 mt-10">BLOG</h1>

      {/* Filter buttons */}
      <div className="flex space-x-4 mb-8">
        {["Tat ca", "Uu dai", "Tin tuc", "Kien thuc", "Khac"].map((filter) => (
          <button
            key={filter}
            className={`px-4 py-2 rounded ${
              activeFilter === filter
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => filterPosts(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Loading or displaying blog post grid */}
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          Loading...
        </div>
      ) : (
          <div className="grid grid-cols-1 grid-cols-2 gap-4">
          {/* First column for the main featured post */}
          <div className=" row-span-2 bg-white shadow-md rounded-lg p-4">
            {filteredPosts.slice(0, 1).map((post) => (
              <div key={post.id} className="flex flex-col h-full">
                <img
                  src={post.img_url}
                  alt={post.title_vi}
                  className="w-full h-200 rounded-t-lg mb-4"
                />
                <h3 className="text-lg font-bold">{post.title_vi}</h3>
                <p className="text-gray-600 line-clamp-2">
                  {post.short_description_vi}
                </p>
              </div>
            ))}
          </div>

          {/* Second column for additional posts */}
          <div className="grid grid-cols-1 gap-4 col-span-1 row-span-2 ">
            {filteredPosts.slice(1, 3).map((post) => (
              <a
                key={post.id}
                href="#"
                className="flex items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                  <div className="flex flex-col  justify-start p-4 leading-normal">
                    <h3 className="text-lg font-bold">{post.title_vi}</h3>
                    <p className="text-gray-600 line-clamp-2">
                      {post.short_description_vi}
                    </p>
                  </div>
                  <img
                    src={post.img_url}
                    alt={post.title_vi}
                    className=" mr-3 object-cover w-full rounded-t-lg h-60 w-80 rounded-none rounded-l-lg"
                  />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
