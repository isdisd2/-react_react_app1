import { Component, useState } from 'react';

const counterList = [
  {
    id: 1,
    name: "C1",
    startValue: 0,
  },
  {
    id: 3,
    name: "C3",
    startValue: 3,
  }
]

function CounterButton({ count, onClick }) {
  return <button onClick={onClick}>pocet klikov: {count}</button>;
}

function Counter({ startValue }) {
  const [count, setCount] = useState(startValue);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <CounterButton count={count} onClick={handleClick}/>
  );

}

class Counters extends Component {
  render() {
    const generateCounters = counterList.map(counter => <div key={counter.id}>{counter.name} <Counter startValue={counter.startValue}/></div>)

    return (
      <>
        {generateCounters}
      </>
    );
  }
}

export default Counters;