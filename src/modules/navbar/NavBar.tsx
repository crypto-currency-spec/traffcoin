import { useState } from "react";
import { Menu } from "../menu";

interface Props {
  setLanguage: React.Dispatch<React.SetStateAction<"eng" | null>>;
}

export const NavBar: React.FC<Props> = ({ setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => setIsMenuOpen(true);

  return (
    <section className="top">
      {isMenuOpen && (
        <Menu setIsMenuOpen={setIsMenuOpen} setLanguage={setLanguage} />
      )}

      <section className="navbar">
        <a href="https://t.me/traffcoin" target="_blank" rel="noreferrer">
          <div className="icon-left" />
        </a>

        <div className="logo" />

        <div className="menu-icon" onClick={handleOpenMenu} />
      </section>
    </section>
  );
};
