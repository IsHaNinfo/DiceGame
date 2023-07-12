import styled from "styled-components";
import { useState } from "react";
const RoleDise = () => {
  const [currentDice, setCurrentDice] = useState();

  const generateRandomNumber = Math 
    <DiceContainner>
      <div className="dice">
        <img src="/images/dices/dice_1.png" alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainner>
  );
};

export default RoleDise;

const DiceContainner = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
  }
`;
