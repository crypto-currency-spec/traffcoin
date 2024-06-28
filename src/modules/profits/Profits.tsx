import Slider from "react-slick";

import { useAppSelector } from "../../store/hooks";

export const Profits = () => {
  const { data } = useAppSelector((state) => state.data);
  const images = [
    "images/profits/profit.jpeg",
    "images/profits/profit.jpeg",
    "images/profits/profit.jpeg",
    "images/profits/profit.jpeg",
    "images/profits/profit.jpeg",
    "images/profits/profit.jpeg",
    "images/profits/profit.jpeg",
  ];

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    nextArrow: (
      <div>
        <div className="next-slick-arrow next-slick-arrow--right" />
      </div>
    ),

    prevArrow: (
      <div>
        <div className="next-slick-arrow" />
      </div>
    ),
  };

  return (
    <section className="profits" id="profits">
      <h2 className="title">{data.profits.title}</h2>

      <div className="scroller">
        <Slider {...settings}>
          {images.map((file, i) => (
            <img
              className="profits__image"
              src={file}
              alt={`review-${i + 1}`}
              key={i}
            />
          ))}
        </Slider>
      </div>

      <a
        href="https://t.me/+4_5fcazDgBViN2Fi"
        target="_blank"
        rel="noreferrer"
        className="link-button link-button--others"
      >
        {data.header.button}
      </a>
    </section>
  );
};
