import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import { useState } from "react";
const App = () => {
  const [isGameStart, setIsGameStart] = useState(true);
  const toggleGamePlay = () => {
    setIsGameStart((prev) => !prev);
  };
  return (
    <>{isGameStart ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
};

export default App;
