export const Footer = () => {
  const goUp = () => window.scrollTo(0, 0);

  return (
    <section className="footer">
      <a href="https://t.me/+4_5fcazDgBViN2Fi" target="_blank" rel="noreferrer">
        <div className="icon-left" />
      </a>

      <div className="logo" />

      <div className="arrow-up" onClick={goUp} />
    </section>
  );
};
