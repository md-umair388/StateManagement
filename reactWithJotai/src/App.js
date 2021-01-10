import React from "react";
import "./assets/css/style.css";
import { atom, Provider, useAtom } from "jotai";
import Button from "./components/Button";

const countAtom = atom(0);

const App = () => (
  <Provider>
    <Counter />
  </Provider>
);

const Counter = () => {
  const [count, setCount] = useAtom(countAtom)
  return (
    <div className="app">
	  <div>React with jotai</div>
      <div>
        <div className="count">
          <h3>Count:</h3>
          <h1>
            {count}
          </h1>
        </div>
        <div className="buttons">
          <Button buttontitle="-" action={() => setCount(c => c - 1)} />
          <Button buttontitle="+" action={() => setCount(c => c + 1)} />
        </div>
      </div>
    </div>
  );
};

export default App;
