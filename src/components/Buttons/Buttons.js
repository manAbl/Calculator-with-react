import React from 'react';
import '../../styles/buttons-styles.css';

const Buttons = ({inputNumber, clearAll, inputDot, toggleSign, inputPorcent, operatorSimbols}) => {
  return(
    <div className="wrapper-numbers">
      <button value={1} onClick={inputNumber}>1</button>
      <button value={2} onClick={inputNumber}>2</button>
      <button value={3} onClick={inputNumber} >3</button>
      <button value={4} onClick={inputNumber}>4</button>
      <button value={5} onClick={inputNumber}>5</button>
      <button value={6} onClick={inputNumber}>6</button>
      <button value={7} onClick={inputNumber}>7</button>
      <button value={8} onClick={inputNumber}>8</button>
      <button value={9} onClick={inputNumber}>9</button>
      <button value={0} onClick={inputNumber}>0</button>

      <button htmlFor="dot" onClick={inputDot}>.</button>
      <button htmlFor="erase" onClick={clearAll}>AC</button>
      <button htmlFor="porcent" onClick={inputPorcent}>%</button>
      <button htmlFor="less-or-plus" onClick={toggleSign}>+-</button>

      <button htmlFor="less"
              onClick={() => operatorSimbols('-')}>-</button>
      <button htmlFor="plus"
              onClick={() => operatorSimbols('+')}>+</button>
      <button htmlFor="divition"
              onClick={() => operatorSimbols('/')}>/</button>
      <button htmlFor="multiply"
              onClick={() => operatorSimbols('*')}>x</button>
      <button htmlFor="equal"
              onClick={() => operatorSimbols('=')}>=</button>
    </div>
    )
}

export default Buttons;
