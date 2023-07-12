import styled from "styled-components";
import "../App.css";
const StartGame = (props) => {
  return (
    <Container>
      <img src="/images/dices.png"></img>
      <div className="content">
        <h1> Dice Game</h1>
        <Button onClick={props.toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
  padding: 10px 18px;
  gap: 5px;
  color: white;

  background: #000000;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;

  &:hover {
    background-color: white;
    border-color: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
