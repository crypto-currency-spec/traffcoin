import { useAppSelector } from "../../store/hooks";

export const Reasons = () => {
  const { data } = useAppSelector((state) => state.data);

  return (
    <section className="reasons" id="reasons">
      <h1 className="reasons__title">{data.reasons.title}</h1>

      <div className="reasons__reasons">
        {data.reasons.items.map((item, i) => (
          <article className="reason" key={i}>
            <div className="reason__counter">{i + 1}</div>

            <p className="reason__title">{item.title}</p>

            <p className="reason__description">{item.description}</p>
          </article>
        ))}
      </div>

      <p className="reasons__conclusion">{data.reasons.conclusion}</p>
    </section>
  );
};
