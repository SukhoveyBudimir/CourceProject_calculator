import React, {useContext, useEffect, useState} from 'react';
import './Calculator.css'
import {Link} from "react-router-dom";
import {Context} from "../../index";

const Calculator = () => {

    const {history} = useContext(Context)
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState(0);
    const [historyItem, setHistoryItem] = useState('');

    const numClick = (num) => {
        setExpression((prevExpression) => prevExpression + num);
    }

    const squareClick = () => {
        setExpression((prevExpression) => prevExpression + '**2');
    };

    const squareRootClick = () => {
        setExpression((prevExpression) => `Math.sqrt(${prevExpression})`);
    };

    const acClick = () => {
        setExpression("");
        setResult(0);
    }

    const operationClick = (operator) => {
        setExpression((prevExpression) => prevExpression + operator);
    }

    const evaluateClick = () =>{
        try{
            const result = eval(expression).toString();
            const operationHistory = `${expression} = ${result}`;
            setHistoryItem(operationHistory);
            setExpression(result);
        } catch (error){
            setExpression('Error');
        }
    }
    useEffect(()=>{
        history.setHistory([...history.history, historyItem])
    },[historyItem])

    const handleKeyDown = (event) => {
        const key = event.key;

        if (/[0-9.+\-*/%]/.test(key)) {
            setExpression((prevExpression) => prevExpression + key);
        } else if (key === 'Enter') {
            evaluateClick();
        } else if (key === 'Escape') {
            acClick();
        }
    };

    return (
        <div className="container" tabIndex ="0" onKeyDown={handleKeyDown}>
            <div className='calculator-container'>
                <div className="calculator-input-container">
                    <input className="input"
                           value={expression}
                           readOnly
                    />
                </div>
                <div className="calculator-keyboard-container">
                    <div className="calculator-keyboard-container-line">
                        <button-operation onClick={()=>{acClick()}}>AC</button-operation>
                        <button-operation onClick={()=>{squareClick()}}>x²</button-operation>
                        <button-operation onClick={()=>{squareRootClick()}}>√</button-operation>
                        <button-operation onClick={()=>{operationClick('/')}}>/</button-operation>
                    </div>
                    <div className="calculator-keyboard-container-line">
                        <button-number onClick={()=> {numClick(7)}} >7</button-number>
                        <button-number onClick={()=>{numClick(8)}}>8</button-number>
                        <button-number onClick={()=>{numClick(9)}}>9</button-number>
                        <button-operation onClick={()=>{operationClick('*')}}>x</button-operation>
                    </div>
                    <div className="calculator-keyboard-container-line">
                        <button-number onClick={()=>{numClick(4)}}>4</button-number>
                        <button-number onClick={()=>{numClick(5)}}>5</button-number>
                        <button-number onClick={()=>{numClick(6)}}>6</button-number>
                        <button-operation onClick={()=>{operationClick('-')}}>-</button-operation>
                    </div>
                    <div className="calculator-keyboard-container-line">
                        <button-number onClick={()=>{numClick(1)}}>1</button-number>
                        <button-number onClick={()=>{numClick(2)}}>2</button-number>
                        <button-number onClick={()=>{numClick(3)}}>3</button-number>
                        <button-operation onClick={()=>{operationClick('+')}}>+</button-operation>
                    </div>
                    <div className="calculator-keyboard-container-line">
                        <button-number onClick={()=>{numClick(0)}}>0</button-number>
                        <button-number onClick={()=>{operationClick('.')}}>.</button-number>
                        <evaluate_button onClick={() => {evaluateClick()}}> =</evaluate_button>
                    </div>
                    <Link to="/history">Просмотреть историю</Link>
                </div>
            </div>
        </div>
    );
};

export default Calculator;