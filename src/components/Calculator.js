import { useState } from 'react';
import styled from 'styled-components';

function Calculator({ theme }) {
  const [input, setInput] = useState(0);
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [num1, setNum1] = useState(0);

  // console.log(theme);

  const handleClick = (e) => {
    if (input === 0) {
      setInput(parseInt(e.target.innerHTML));
      setInput1(parseInt(e.target.innerHTML));
      console.log(parseInt(e.target.innerHTML));
    } else if (input1) {
      setInput(parseInt(e.target.innerHTML));
      setInput2(parseInt(e.target.innerHTML));
    }
  };

  const addNums = () => {
    setNum1(input1);
  };

  const equateNums = () => {
    const total = num1 + input2;
    setInput(total);
  };

  return (
    <Wrapper>
      <Settings>
        <h2>calc</h2>
      </Settings>
      <Input
        style={{
          backgroundColor: theme.colors.cal_bg,
          color: theme.colors.text,
        }}
        type='number'
        value={input}
        onChange={handleClick}
        // placeholder='0'
      />
      <Buttons
        style={{
          backgroundColor: theme.colors.cal_bg,
        }}
      >
        <Button
          style={{
            backgroundColor: theme.colors.cal_btn,
            color: theme.colors.cal_btnTxt,
          }}
          onClick={handleClick}
        >
          <p>7</p>
        </Button>
        <Button
          style={{
            backgroundColor: theme.colors.cal_btn,
            color: theme.colors.cal_btnTxt,
          }}
          onClick={handleClick}
        >
          <p>8</p>
        </Button>
        <Button
          style={{
            backgroundColor: theme.colors.cal_btn,
            color: theme.colors.cal_btnTxt,
          }}
          onClick={handleClick}
        >
          <p>9</p>
        </Button>
        <DeleteBtn
          style={{ backgroundColor: theme.colors.cal_del }}
          onClick={() => {
            setInput1(0);
            setInput2(0);
            setInput(0);
          }}
        >
          <p>del</p>
        </DeleteBtn>
        <Button
          style={{
            backgroundColor: theme.colors.cal_btn,
            color: theme.colors.cal_btnTxt,
          }}
          onClick={handleClick}
        >
          <p>4</p>
        </Button>
        <Button
          style={{
            backgroundColor: theme.colors.cal_btn,
            color: theme.colors.cal_btnTxt,
          }}
          onClick={handleClick}
        >
          <p>5</p>
        </Button>
        <Button
          style={{
            backgroundColor: theme.colors.cal_btn,
            color: theme.colors.cal_btnTxt,
          }}
          onClick={handleClick}
        >
          <p>6</p>
        </Button>
        <Button
          style={{
            backgroundColor: theme.colors.cal_btn,
            color: theme.colors.cal_btnTxt,
          }}
          onClick={addNums}
        >
          <p>+</p>
        </Button>
        <Button
          style={{
            backgroundColor: theme.colors.cal_btn,
            color: theme.colors.cal_btnTxt,
          }}
          onClick={handleClick}
        >
          <p>1</p>
        </Button>
        <Button
          style={{
            backgroundColor: theme.colors.cal_btn,
            color: theme.colors.cal_btnTxt,
          }}
          onClick={handleClick}
        >
          <p>2</p>
        </Button>
        <Button
          style={{
            backgroundColor: theme.colors.cal_btn,
            color: theme.colors.cal_btnTxt,
          }}
          onClick={handleClick}
        >
          <p>3</p>
        </Button>
        <Button
          style={{
            backgroundColor: theme.colors.cal_btn,
            color: theme.colors.cal_btnTxt,
          }}
        >
          <p>-</p>
        </Button>
        <Button
          style={{
            backgroundColor: theme.colors.cal_btn,
            color: theme.colors.cal_btnTxt,
          }}
        >
          <p>.</p>
        </Button>
        <Button
          style={{
            backgroundColor: theme.colors.cal_btn,
            color: theme.colors.cal_btnTxt,
          }}
          onClick={handleClick}
        >
          <p>0</p>
        </Button>
        <Button
          style={{
            backgroundColor: theme.colors.cal_btn,
            color: theme.colors.cal_btnTxt,
          }}
        >
          <p>/</p>
        </Button>
        <Button
          style={{
            backgroundColor: theme.colors.cal_btn,
            color: theme.colors.cal_btnTxt,
          }}
        >
          <p>x</p>
        </Button>
        <ResetBtn
          style={{ backgroundColor: theme.colors.cal_reset }}
          onClick={() => {
            setInput1(0);
            setInput2(0);
            setInput(0);
          }}
        >
          <p>Reset</p>
        </ResetBtn>
        <EqualBtn
          style={{ backgroundColor: theme.colors.cal_equal }}
          onClick={equateNums}
        >
          <p>=</p>
        </EqualBtn>
      </Buttons>
    </Wrapper>
  );
}

export default Calculator;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 540px;
  height: 768px;
  box-sizing: border-box;
`;

const Settings = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  color: white;
`;
const Input = styled.input`
  border-radius: 8px;
  outline: none;
  height: 118px;
  width: 100%;
  display: flex;
  text-align: right;
  border-width: 0;
  margin-bottom: 15px;
  box-sizing: border-box;
  font-size: 50px;
  padding: 10px;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const Buttons = styled.div`
  display: grid;
  justify-items: center;
  width: 100%;
  padding: 25px;
  color: white;
  border-radius: 6px;
  /* grid-template-rows: 1fr, 1fr, 1fr, 1fr, 1fr;
  grid-template-columns: 1fr, 1fr, 1fr, 1fr; */

  grid-template: repeat(5, 1fr) / repeat(4, 1fr);
  grid-gap: 15px;
`;
const Button = styled.button`
  font-size: 25px;
  border-radius: 6px;
  width: 101px;
  height: 64px;
  border-width: 0;
  :hover {
    background-color: aquamarine;
  }
`;
const ResetBtn = styled.button`
  border-radius: 6px;
  grid-column: 1 / span 2;
  width: 95%;
  color: white;
  border-width: 0;
  font-size: 25px;
  :hover {
    opacity: 0.8;
  }
`;
const EqualBtn = styled.button`
  border-radius: 6px;
  background-color: red;
  grid-column: 3 / span 2;
  width: 95%;
  border-width: 0;
  color: white;
  font-size: 25px;
  :hover {
    opacity: 0.8;
  }
`;
const DeleteBtn = styled.button`
  font-size: 25px;
  border-radius: 6px;
  width: 101px;
  height: 64px;
  color: white;
  border-width: 0;
  :hover {
    opacity: 0.8;
  }
`;
