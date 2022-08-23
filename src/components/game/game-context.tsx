import React from "react";

export type Stage = "intro" | "setup" | "playground";
interface GameContextProps {
  stage: Stage;
  word: string;
  handleChangeStage: (newStage: Stage) => void;
  handleChangeWord: (value: string) => void;
}

const GameContext = React.createContext<GameContextProps>(
  {} as GameContextProps
);

if (process.env.NODE_ENV !== "production") {
  GameContext.displayName = "GameContext";
}

export default GameContext;
