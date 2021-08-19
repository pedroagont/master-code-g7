function Header(props) {
  const { title, description } = props;
  return (
    <header className="header">
      <h1 className="header-title">{ title }</h1>
      <p className="header-description">{ description }</p>
    </header>
  );
}

export default Header;
