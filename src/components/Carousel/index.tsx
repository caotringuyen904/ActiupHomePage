// FlashSaleCarousel.tsx

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface FlashSaleCarouselProps {
  images: string[];
}

const FlashSaleCarousel: React.FC<FlashSaleCarouselProps> = ({ images }) => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={2000}
      showThumbs={false}
      showStatus={false}
      renderArrowPrev={() => null}
      renderIndicator={() => null}
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="bg-white text-gray-500 rounded-full p-1 focus:outline-none absolute right-3 top-1/2 transform -translate-y-1/2"
            style={{ zIndex: 10 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              strokeWidth={2}
              stroke="currentColor"
              className="size-3 bg-white-300 text-gray-500 w-4 h-4 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                fill-rule="evenodd"
                d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        )
      }
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default FlashSaleCarousel;
