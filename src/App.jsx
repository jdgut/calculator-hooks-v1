import React, { useState, useRef } from "react";
import Button from "./components/Button";

const App = () => {
  const [dispValue, setDispValue] = useState("0");
  const resultValue = useRef(0);
  const aggregateValue = useRef(0);
  const currentOp = useRef(null);

  const calculate = () => {
    if (currentOp.current === "+") {
      resultValue.current = aggregateValue.current + resultValue.current;
    } else if (currentOp.current === "-") {
      resultValue.current = aggregateValue.current - resultValue.current;
    } else if (currentOp.current === "/") {
      resultValue.current = aggregateValue.current / resultValue.current;
    } else if (currentOp.current === "X") {
      resultValue.current = aggregateValue.current * resultValue.current;
    } else if (currentOp.current === "%") {
      resultValue.current = aggregateValue.current % resultValue.current;
    }
    aggregateValue.current = 0;
    currentOp.current = null;
    setDispValue(resultValue.current.toString());
  };

  const buttonHandler = (input) => {
    switch (input) {
      case "AC":
        resultValue.current = 0;
        aggregateValue.current = 0;
        currentOp.current = null;
        setDispValue(resultValue.current.toString());
        break;
      case "+/-":
        resultValue.current = resultValue.current * -1;
        setDispValue(resultValue.current.toString());
        break;
      case "+":
        setOp("+");
        break;
      case "-":
        setOp("-");
        break;
      case "X":
        setOp("X");
        break;
      case "/":
        setOp("/");
        break;
      case "%":
        setOp("%");
        break;
      case ".":
        setDispValue(dispValue + ".");
        break;
      case "=":
        calculate();
        break;
      default:
        const displayResult = dispValue === "0" ? input : dispValue + input;
        resultValue.current = parseFloat(displayResult);
        setDispValue(resultValue.current.toString());
        break;
    }
  };

  const setOp = (op) => {
    aggregateValue.current = resultValue.current;
    resultValue.current = 0;
    currentOp.current = op;
    setDispValue("0");
  };

  // const addNumber = (a, b) => {
  //   const aNum = Number(a);
  //   const bNum = Number(b);
  //   return aNum + bNum;
  // };

  const calculatorButtons = [
    ["AC", "+/-", "%", "/"],
    ["7", "8", "9", "X"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  const gridResultSet = calculatorButtons.map((rowData, rowIdx, rowArr) => {
    return (
      <div className="row" key={rowIdx}>
        {rowData.map((colData, colIdx) => {
          const className =
            rowIdx === rowArr.length - 1 && colIdx === 0 ? "col-6" : "col-3";
          return (
            <div className={className} key={colIdx}>
              <Button buttonValue={colData} buttonHandler={buttonHandler} />
            </div>
          );
        })}
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col">{dispValue}</div>
      </div>
      {gridResultSet}
    </div>
  );
};

export default App;
