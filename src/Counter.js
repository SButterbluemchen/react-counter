import { useState } from "react";
import data from './data'

export default function Counter(props) {
  const [count, setCount] = useState(() => 0);

  const capacity = Number(props.capacity);

  const styles = {
    backgroundColor: count >= capacity ? "red" : "green"
  }

  function add() {
    if (count < capacity) {
      setCount(prevCount => prevCount + 1)
    }
  }

  function substract() {
    if (count > 0) {
    setCount(prevCount => prevCount - 1)
    }
  }

  function reset() {
    setCount(0)
  }

  return (
    <section>
      <div className="counter">
        <button className="counter-buttons" onClick={substract}>–</button>
        <div style={styles} className="counter-count">
            <h1>{count}</h1>
        </div>
        <button className="counter-buttons" onClick={add}>+</button>
      </div>
      <button className="reset-button" onClick={reset}>Reset</button>
    </section>
  )
}
