export const Footer = () => {
  const goUp = () => window.scrollTo(0, 0);

  return (
    <section className="footer">
      <a href="https://www.telegram.com">
        <div className="icon-left" />
      </a>

      <div className="logo" />

      <div className="arrow-up" onClick={goUp} />
    </section>
  );
};