import  { useState, useEffect } from 'react';
import Navbar from "../Navbar";
import SearchBar from "../Searchbar";
import FashCarousel from "../Carousel";

const Header = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [hideFashCarousel, setHideFashCarousel] = useState(true);


  const flashSaleImages = [
    "https://pix.raceez.com/2022/10/14/Moving_ActiUp_Banner_Top_Website_-_Deskop_-_1920x55.png",
    "https://pix.raceez.com/2022/12/07/VIHM_Event_Page_Banner_-_Center___Desktop___4000x164.png",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) { // Adjust the scroll position as needed
        setShowSearchBar(true);
        setHideFashCarousel(false);
      } else {
        setShowSearchBar(false);
        setHideFashCarousel(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {hideFashCarousel && <FashCarousel images={flashSaleImages} />}
      <Navbar />
      {showSearchBar && <SearchBar />}
    </div>
  );
};

export default Header;
