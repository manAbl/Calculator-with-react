import React from 'react';
import '../styles/calculator-styles.css';
import Screen from './Screen/Screen';
import Buttons from './Buttons/Buttons';

class Calculator extends React.Component {
  constructor(props){
    super(props);
   this.state = {
    value: null,
    displayValue: '0',
    operator: null,
    waitingForOperand: false,
   }
    this.inputNumber = this.inputNumber.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.inputDot = this.inputDot.bind(this);
    this.toggleSign = this.toggleSign.bind(this);
    this.inputPorcent = this.inputPorcent.bind(this);
    this.operatorSimbols = this.operatorSimbols.bind(this);
   }
  clearAll() {
    this.setState({
      displayValue: '0'
    })
  }
  inputNumber(number) {
    const {displayValue, waitingForOperand} = this.state;
    const selected = number.target.value;

    if(waitingForOperand) {
      this.setState({
        displayValue: selected,
        waitingForOperand: false
      })
    } else {
      this.setState({
        displayValue: displayValue === '0' ? selected : displayValue + selected
      })
    }
  }
  inputDot() {
    const { displayValue, waitingForOperand } = this.state;
    if(waitingForOperand) {
      this.setState({
        displayValue: '.',
        waitingForOperand: false
      })
    } else if(displayValue.indexOf('.')  === -1) {
      this.setState({
        displayValue: displayValue + '.',
        waitingForOperand: false
      })
    }
  }
  toggleSign() {
    const { displayValue } = this.state;

    this.setState({
      displayValue: displayValue.charAt(0) === '-' ? displayValue.substr(1) : '-' + displayValue
    })
  }
  inputPorcent() {
    const { displayValue } = this.state;
    const value = parseFloat(displayValue);

    this.setState({
      displayValue: String(value / 100)
    })
  }
  operatorSimbols(nextOperator) {
    const { displayValue, operator, value } = this.state;

    const nextValue = parseFloat(displayValue);

    const operations = {
      '/': (firstValue, nextValue) => firstValue / nextValue,
      '*': (firstValue, nextValue) => firstValue * nextValue,
      '+': (firstValue, nextValue) => firstValue + nextValue,
      '-': (firstValue, nextValue) => firstValue - nextValue,
      '=': (firstValue, nextValue) => nextValue
    }

    if(value === null) {
      this.setState({
        value: nextValue
      })
    } else if(operator) {
      const currentValue = value || 0;
      const computedValue = operations[operator](currentValue, nextValue);
      this.setState({
        value: computedValue,
        displayValue: String(computedValue)
      })
    }

    this.setState({
      waitingForOperand: true,
      operator: nextOperator
    })
  }
  render() {
    const props = {
      clearAll: this.clearAll,
      inputNumber: this.inputNumber,
      inputDot: this.inputDot,
      toggleSign: this.toggleSign,
      inputPorcent: this.inputPorcent,
      operatorSimbols: this.operatorSimbols,
    };
   return (
      <div className="container-calculator">
        <Screen displayValue={this.state.displayValue}/>
        <Buttons inputNumber={props.inputNumber}
                 clearAll={props.clearAll}
                 inputDot={props.inputDot}
                 toggleSign={props.toggleSign}
                 inputPorcent={props.inputPorcent}
                 operatorSimbols={props.operatorSimbols} />
      </div>
   )
 }
}

export default Calculator;
