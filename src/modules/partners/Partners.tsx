import { useAppSelector } from "../../store/hooks";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";

export const Partners = () => {
  const { data } = useAppSelector((state) => state.data);
  const isMobile = useMediaQuery({ maxWidth: 639 });

  const slidesCount = isMobile ? 2 : 3;

  const settings = {
    dots: false,
    speed: 7000,
    slidesToShow: slidesCount,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 0,
    infinite: true,
    cssease: "linear",
    pauseOnHover: false,
  };

  const row2Settings = { ...settings, rtl: true };

  return (
    <section className="partners" id="partners">
      <h2 className="title">{data.partners.title}</h2>

      <div className="rows">
        <Slider {...settings}>
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24,
          ].map((partner) => (
            <div
              className={`partners__partner partners__partner--${partner}`}
              key={partner}
            />
          ))}
        </Slider>

        <Slider {...row2Settings }>
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24,
          ].map((partner) => (
            <div
              className={`partners__partner partners__partner--${partner}`}
              key={partner}
            />
          ))}
        </Slider>
      </div>

      {/* <div className="partners__rows">
        <div className="partners__row partners__row--1">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((partner) => (
            <div
              className={`partners__partner partners__partner--${partner}`}
              key={partner}
            />
          ))}
        </div>

        <div className="partners__row partners__row--2">
          {[13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map((partner) => (
            <div
              className={`partners__partner partners__partner--${partner}`}
              key={partner}
            />
          ))}
        </div>
      </div> */}
    </section>
  );
};
