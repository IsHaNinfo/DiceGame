import NumberSelector from "./NumberSelector";
import RoleDise from "./RoleDise";
import TotalScore from "./TotalScore";
import styled from "styled-components";
const GamePlay = () => {
  return (
    <MainContainner>
      <div className="top_section">
        <TotalScore />
        <NumberSelector />
      </div>
      <RoleDise />
    </MainContainner>
  );
};

export default GamePlay;

const MainContainner = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
`;
