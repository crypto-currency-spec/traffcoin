import { useAppSelector } from "../../store/hooks";

export const Header = () => {
  const { data } = useAppSelector((state) => state.data);

  return (
    <section className="header">
      <div className="header__image" />

      <div className="header__right-group">
        <p className="header__title">{data.header.title}</p>

        <p className="header__text">{data.header.subtitle}</p>

        <a
          href="https://t.me/+4_5fcazDgBViN2Fi"
          target="_blank"
          rel="noreferrer"
          className="link-button"
        >
          {data.header.button}
        </a>
      </div>
    </section>
  );
};
