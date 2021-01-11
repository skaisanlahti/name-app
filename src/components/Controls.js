function Controls(props) {
  const {
    filter,
    sortType,
    handleFilterChange,
    sortByAmount,
    sortByName,
  } = props;

  // highlight sort
  let sortButtons = [];
  if (sortType === "amount") {
    sortButtons.push(
      <button onClick={sortByAmount} className="selected">
        Sort By Popularity
      </button>
    );
    sortButtons.push(<button onClick={sortByName}>Sort Alphabetically</button>);
  } else {
    sortButtons.push(
      <button onClick={sortByAmount}>Sort By Popularity</button>
    );
    sortButtons.push(
      <button onClick={sortByName} className="selected">
        Sort Alphabetically
      </button>
    );
  }

  return (
    <div className="app-controls">
      <input
        type="text"
        placeholder="Search name..."
        value={filter}
        onChange={handleFilterChange}
      />
      {sortButtons}
    </div>
  );
}

export default Controls;
