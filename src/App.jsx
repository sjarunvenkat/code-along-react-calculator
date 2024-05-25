import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isResult, setIsResult] = useState(false);

  const handleButtonClick = (value) => {
    if (value === "=") {
      calculateResult();
    } else if (value === "AC") {
      clearInput();
    } else if (value === "DEL") {
      deleteLast();
    } else {
      if (isResult) {
        if (/[0-9.]/.test(value)) {
          setInput(value);
        } else {
          setInput(result + value);
        }
        setIsResult(false);
      } else {
        setInput(input + value);
      }
    }
  };

  const calculateResult = () => {
    try {
      const evalResult = eval(input);
      setResult(evalResult);
      setInput(evalResult.toString());
      setIsResult(true);
    } catch (error) {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
    setIsResult(false);
  };

  const deleteLast = () => {
    if (isResult) {
      clearInput();
    } else {
      setInput(input.slice(0, -1));
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        <button className="ac" onClick={() => handleButtonClick("AC")}>
          AC
        </button>
        <button onClick={() => handleButtonClick("DEL")}>DEL</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button className="equals" onClick={() => handleButtonClick("=")}>
          =
        </button>
      </div>
    </div>
  );
};

export default App;
