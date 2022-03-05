import {React, useState, useEffect} from 'react';

function Calculator(){
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState(0)

    const num1Handler = (event) => {
        setNum1(state => state = event.target.value);
    }

    const num2Handler = (event) => {
        setNum2(state => state = event.target.value);
    }



    const multiplyHandler = () => {
        setResult(result => result = parseInt(num1) * parseInt(num2));
    }

    const divideHandler = () => {
        setResult(result => result = parseInt(num1) / parseInt(num2));
    }

    const sumHandler = () => {
        setResult(result => result = parseInt(num1) + parseInt(num2));
    }

    const substractionHandler = () => {
        setResult(result => result = parseInt(num1) - parseInt(num2));
    }

    const clearHandler = () => {
        setResult(result => result = 0);
        setNum1(num => num = '');
        setNum2(num => num = '');
    }

    return (
        <div>
            <input type="text" onChange={num1Handler} value={num1}/>
            <input type="text"  onChange={num2Handler} value={num2}/>
            <buton onClick={multiplyHandler}>X</buton>
            <button onClick={divideHandler}>/</button>
            <button onClick={sumHandler}>+</button>
            <button onclick={substractionHandler}>-</button>
            <button onClick={clearHandler}>CLEAR</button>
            <h1>{result}</h1>
        </div>
    );
}

export default Calculator;