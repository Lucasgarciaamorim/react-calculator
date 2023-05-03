import Buttom from "./Components/Button";
import Input from "./Components/Input";
import { Container, Content, Row, Column } from "./styles";
import { useState } from "react";

function App() {
  const [currentNumber, setCurrentNumber] = useState([]);
  const [firstNumber, setFirstNumber] = useState("0");
  const [ operation, setOperation] = useState('');

 


 //Limpeza de Campo
  const handleOnClear = () => {
    setCurrentNumber("0");   
    setOperation('')
  };
  const handleMaxClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
   
  }

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
  };

 
  const handleSumNumber = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      handleOnClear();
      setOperation('+');
    } else {
      const sum = parseFloat(firstNumber) + parseFloat(currentNumber);
     
      setCurrentNumber(String(sum));
      setOperation('')
    }
  };
  const handleMinusNumber = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      handleOnClear();
      setOperation('-');
    } else {
      const sum = parseFloat(firstNumber) - parseFloat(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }
  };
  const handleMultiNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      handleOnClear();
      setOperation('*');
    }else{
      const sum = parseFloat(firstNumber) * parseFloat(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }
  const handleDivideNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      handleOnClear();
      setOperation('/');
    }else{
      const sum = parseFloat(firstNumber) / parseFloat(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }
  }

  const handleEquals = () =>{
    if (firstNumber !== '0' && operation !=='' && currentNumber !== '0')
    switch(operation){
      case '+':
        handleSumNumber()
      break;
      case '-':
        handleMinusNumber()
      break;
      case '*':
        handleMultiNumber()
        break;
        case '/':
          handleDivideNumber()
          break;
      default:
        break;
    }
  }
  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Buttom label="C" onClick={handleMaxClear} />
          <Buttom label="CE" onClick={handleOnClear} />
          <Buttom label="%" />
          <Buttom label="/" onClick={handleDivideNumber} />
        </Row>
        <Row>
          <Buttom label="7" onClick={() => handleAddNumber("7")} />
          <Buttom label="8" onClick={() => handleAddNumber("8")} />
          <Buttom label="9" onClick={() => handleAddNumber("9")} />
          <Buttom label="x" onClick={handleMultiNumber} />
        </Row>
        <Row>
          <Buttom label="4" onClick={() => handleAddNumber("4")} />
          <Buttom label="5" onClick={() => handleAddNumber("5")} />
          <Buttom label="6" onClick={() => handleAddNumber("6")} />
          <Buttom label="-" onClick={handleMinusNumber} />
        </Row>
        <Row>
          <Buttom label="1" onClick={() => handleAddNumber("1")} />
          <Buttom label="2" onClick={() => handleAddNumber("2")} />
          <Buttom label="3" onClick={() => handleAddNumber("3")} />
          <Buttom label="+" onClick={handleSumNumber} />
        </Row>
        <Row>
          <Buttom label="+/-" onClick={() => handleAddNumber("")} />
          <Buttom label="0" onClick={() => handleAddNumber("0")} />
          <Buttom label="." onClick={() => handleAddNumber(".")} />
          <Buttom label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
