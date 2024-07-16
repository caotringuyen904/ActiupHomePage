
import SportFilter from "./Event/SportFilter/sportFilter";
import AttractionFilter from "./Event/AttractionFilter/attractionFilter";
import Footer from "./Footer";
import CardImage from "./CardBuyTicket";
import HotEvent from "./HotEvent";
import CardImageBLarge from "./CardBuyTicket/index_1";
import OranizeEvent from "./OrganizeEvent";
import Blog from "./Blog/index";
import Insurance from "./Insurance";
import Header from "./Header";
import YoutubeBanner from "./YoutubeBanner";
// import Searchbar from "./Searchbar/index_NonBg";

const Desktop = () => {

  return (
    <div>
      <Header />
      <YoutubeBanner />
      {/* <Searchbar /> */}
      <CardImage />
      <HotEvent />
      <CardImageBLarge />
      <SportFilter />
      <AttractionFilter />
      <CardImageBLarge />
      <Insurance />
      <OranizeEvent />
      <Blog />

      <Footer />
      
    </div>
  );
};

export default Desktop;
