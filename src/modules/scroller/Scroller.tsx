import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  files: string[];
}

// fix this
const isVideo = (file: string) => {
  return file[0] === 'h';
};

export const Scroller: React.FC<Props> = ({ files }) => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    nextArrow: (
      <div>
        <div className="next-slick-arrow  next-slick-arrow--right" />
      </div>
    ),

    prevArrow: (
      <div>
        <div className="next-slick-arrow" />
      </div>
    ),
  };

  return (
    <div className="scroller">
      <Slider {...settings}>
        {files.map((file, i) => (
          isVideo(file) ? (
            <video className="scroller__image" autoPlay>
              <source src={file} type="video/mp4" />
            </video>
          ) : (
            <img className="scroller__image" src={file} alt={`review-${i + 1}`} key={i} />
          )
        ))}
      </Slider>
    </div>
  );
};