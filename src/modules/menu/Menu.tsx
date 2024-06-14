import { useAppSelector } from "../../store/hooks";

interface Props {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setLanguage: React.Dispatch<React.SetStateAction<"eng" | null>>;
}

export const Menu: React.FC<Props> = ({ setIsMenuOpen, setLanguage }) => {
  const { data } = useAppSelector((state) => state.data);
  const handleMenuClose = () => setIsMenuOpen(false);
  const handleLanguage = () => {
    setLanguage((prev) => (prev === "eng" ? null : 'eng'));
  };

  return (
    <section className="menu">
      <div className="menu__top">
        <div className="menu__close" onClick={handleMenuClose} />

        <div className="menu__language" onClick={handleLanguage}>
          {data.menu.language}
        </div>
      </div>

      <nav className="menu__bottom">
        <ul className="menu__links">
          {data.menu.links.map((link) => (
            <li
              className="menu__item"
              onClick={handleMenuClose}
              key={link.link}
            >
              <a href={link.link} className="menu__link">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};
