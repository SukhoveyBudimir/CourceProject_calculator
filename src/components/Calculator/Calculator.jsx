import React,{useState} from 'react';
import './Calculator.css'

const Calculator = () => {

    const [expression, setExpression] = useState('');
    const [result, setResult] = useState(0);

    const numClick = (num) => {
        setExpression(expression + num);
    }

    const acClick = () =>{
        setExpression("")
    }

    const operation = (operation) =>{
        setExpression(expression + operation)
    }

    return (
        <div className="container">
            <div className='calculator-container'>
                <div className="calculator-input-container">
                    <input className="input" value={expression}/>
                </div>
                <div className="calculator-keyboard-container">
                    <div className="calculator-keyboard-container-line">
                        <button-operation onClick={()=>{acClick()}}>AC
                        </button-operation>
                        <button-operation>+/-</button-operation>
                        <button-operation>%</button-operation>
                        <button-operation>/</button-operation>
                    </div>
                    <div className="calculator-keyboard-container-line">
                        <button-number onClick={()=> {numClick(7)}} >7</button-number>
                        <button-number onClick={()=>{numClick(8)}}>8</button-number>
                        <button-number onClick={()=>{numClick(9)}}>9</button-number>
                        <button-operation>x</button-operation>
                    </div>
                    <div className="calculator-keyboard-container-line">
                        <button-number onClick={()=>{numClick(4)}}>4</button-number>
                        <button-number onClick={()=>{numClick(5)}}>5</button-number>
                        <button-number onClick={()=>{numClick(6)}}>6</button-number>
                        <button-operation>-</button-operation>
                    </div>
                    <div className="calculator-keyboard-container-line">
                        <button-number onClick={()=>{numClick(1)}}>1</button-number>
                        <button-number onClick={()=>{numClick(2)}}>2</button-number>
                        <button-number onClick={()=>{numClick(3)}}>3</button-number>
                        <button-operation>+</button-operation>
                    </div>
                    <div className="calculator-keyboard-container-line">
                        <button-number onClick={()=>{numClick(0)}}>0</button-number>
                        <button-number>.</button-number>
                        <evaluate_button> =</evaluate_button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;