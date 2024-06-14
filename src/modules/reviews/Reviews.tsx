import { useAppSelector } from "../../store/hooks";
import { Scroller } from "../scroller/Scroller";

export const Reviews = () => {
  const { data } = useAppSelector(state => state.data);
  const images = [
    'images/reviews/review-1.jpeg',
    'images/reviews/review-2.jpeg',
    'images/reviews/review-3.jpeg',
    'images/reviews/review-4.jpeg',
    'images/reviews/review-5.jpeg',
    'images/reviews/review-6.jpeg',
    'images/reviews/review-7.jpeg',
    'images/reviews/review-8.jpeg',
    'images/reviews/review-9.jpeg',
  ];

  return (
    <section className="reviews" id="reviews">
      <h2 className="title">{data.reviews.title}</h2>

      <Scroller files={images} />
    </section>
  );
};