import uniqid from "uniqid";
import Bar from "./Bar";

function Results(props) {
  if (!props.names || !props.sortType) return null;

  let sorted;
  let results;

  // get max for bar lengths
  let max = props.names[0].amount;
  for (let i = 0; i < props.names.length; i++) {
    if (props.names[i].amount >= max) {
      max = props.names[i].amount;
    }
  }

  // sort names based on sort type
  if (props.sortType === "amount") sorted = sortByAmount(props.names);
  else sorted = sortByName(props.names);

  // apply filter
  if (props.filter) {
    results = sorted
      .filter((item) =>
        item.name.toLowerCase().includes(props.filter.toLowerCase())
      )
      .map((item) => (
        <div className="list-item" key={uniqid()}>
          <p className="list-name">{item.name}</p>
          <Bar max={max} value={item.amount} />
          <p className="list-number">{item.amount}</p>
        </div>
      ));
  } else {
    results = sorted.map((item) => (
      <div className="list-item" key={uniqid()}>
        <p className="list-name">{item.name}</p>
        <Bar max={max} value={item.amount} />
        <p className="list-number">{item.amount}</p>
      </div>
    ));
  }

  // render
  return <div className="app-results">{results}</div>;
}

export default Results;

const sortByAmount = (names) => {
  return names.sort((a, b) => b.amount - a.amount);
};

const sortByName = (names) => {
  names.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
  return names;
};
