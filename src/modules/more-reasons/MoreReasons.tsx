import { useAppSelector } from "../../store/hooks";

export const MoreReasons = () => {
  const { data } = useAppSelector(state => state.data);

  return (
    <section className="more-reasons">
      {data.why_choose_us.items.map((item, i) => (
        <article className={`more-reason more-reason--${i + 1}`} key={i}>
          <div className={`more-reason__icon more-reason__icon--${i + 1}`} />

          <p className="more-reason__text">{item}</p>
        </article>
      ))}
    </section>
  );
};