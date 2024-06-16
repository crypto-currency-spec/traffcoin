import { useAppSelector } from "../../store/hooks";

export const Header = () => {
  const { data } = useAppSelector((state) => state.data);

  return (
    <section className="header">
      <div className="header__image" />

      <div className="header__right-group">
        <p className="header__title">{data.header.title}</p>

        <p className="header__text">{data.header.subtitle}</p>

        <a href="https://t.me/traffcoin" className="header__button">{data.header.button}</a>
      </div>

    </section>
  );
};