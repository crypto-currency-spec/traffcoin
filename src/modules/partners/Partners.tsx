import { generateRowElements } from "../../helpers";
import { useAppSelector } from "../../store/hooks";

export const Partners = () => {
  const { data } = useAppSelector((state) => state.data);

  const firstRow = generateRowElements(1, 12);
  const secondRow = generateRowElements(13, 24);
  
  return (
    <section className="partners" id="partners">
      <h2 className="title">{data.partners.title}</h2>

      <div className="partners__rows">
        <ul className="partners__row partners__row--1">
          {firstRow.map((partner, i) => (
            <li
              className={`partners__partner partners__partner--${partner}`}
              key={i}
            />
          ))}
        </ul>

        <ul className="partners__row partners__row--2">
          {secondRow.map((partner, i) => (
            <li
              className={`partners__partner partners__partner--${partner}`}
              key={i}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
