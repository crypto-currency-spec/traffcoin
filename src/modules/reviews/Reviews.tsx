import { useAppSelector } from "../../store/hooks";
import { Scroller } from "../scroller/Scroller";

export const Reviews = () => {
  const { data } = useAppSelector(state => state.data);
  const images = [
    'images/reviews/review-1.jpg',
    'images/reviews/review-2.jpg',
    'images/reviews/review-3.jpg',
    'images/reviews/review-4.jpg',
    'images/reviews/review-5.jpg',
    'images/reviews/review-6.jpg',
    'images/reviews/review-7.jpg',
    'images/reviews/review-8.jpg',
    'images/reviews/review-9.jpg',
    'images/reviews/review-10.jpg',
  ];

  return (
    <section className="reviews" id="reviews">
      <h2 className="title">{data.reviews.title}</h2>

      <Scroller files={images} />
    </section>
  );
};