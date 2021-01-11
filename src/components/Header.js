function Header(props) {
  const numberOfNames = props.names.length;
  const numberOfPeople = props.names.reduce(
    (total, current) => total + current.amount,
    0
  );

  return (
    <header className="app-header">
      <h1>Name Application</h1>
      <p>
        The name data contains {numberOfNames} different names for a total of{" "}
        {numberOfPeople} people.
      </p>
    </header>
  );
}

export default Header;
