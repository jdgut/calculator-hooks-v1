import React, {useState, useEffect} from "react";
import Button from './components/Button';


const App = () => {
    const [resultValue, setResultValue] = useState('0');
    const [aggregateValue, setAggregateValue] = useState(0);

    const buttonHandler = (input) => {
        switch(input) {
            case 'AC':
                setResultValue('0');
                setAggregateValue(0);
            break;
            case '+/-':
                const currentValue = resultValue;
                const displayValue = currentValue.indexOf('-') >= 0 ? currentValue.replace('-','') : '-' + currentValue;
                setResultValue(displayValue);
            break;
            case '+':
            break;
            case '':
            break;
            case '':
            break;
            case '':
            break;
            case '':
            break;
            case '':
            break;
            default:
                const displayResult = resultValue === 0 ? input : resultValue + '' + input;
                setResultValue(displayResult);
            break;
        }
    }

    const addNumber = (a, b) => {
        const aNum = Number(a);
        const bNum = Number(b);
        return aNum + bNum;
    }

    const calculatorButtons = [
        ['AC', '+/-', '%', '/'],
        ['7', '8', '9', 'X'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '='],
    ];

    const gridResultSet = calculatorButtons.map( (rowData, rowIdx, rowArr) => {
        return (
            <div className="row" key={rowIdx}>
            {
                rowData.map( (colData, colIdx) => {
                    const className = (rowIdx === (rowArr.length - 1)) && colIdx === 0 ? 'col-6' : 'col-3'; 
                    return (
                        <div className={className} key={colIdx}>
                            <Button buttonValue={colData} buttonHandler={buttonHandler} />
                        </div>
                    )
                })
            }
            </div>
        )
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">{resultValue}</div>
            </div>
            {gridResultSet}
        </div>
    )
}

export default App;