import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Controls from "./Controls";
import Results from "./Results";
import data from "../data/names.json";

function App() {
  // import data, can extend to read API with fetch()
  const names = data.names;

  // sort types "amount", "name"
  const [sortType, setSortType] = useState("amount");
  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  const sortByName = (event) => {
    setSortType("name");
  };
  const sortByAmount = (event) => {
    setSortType("amount");
  };

  return (
    <div className="app">
      <Header names={names} />
      <main className="app-main">
        <Controls
          filter={filter}
          sortType={sortType}
          handleFilterChange={handleFilterChange}
          sortByAmount={sortByAmount}
          sortByName={sortByName}
        />
        <Results names={names} sortType={sortType} filter={filter} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
