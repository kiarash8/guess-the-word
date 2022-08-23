import React, { FC, useMemo, useState } from "react";
import GameContext, { Stage } from "./game-context";
import { Layout } from "./layout";
import { Setup, Intro, Playground } from "./stages";

export const Game: FC = () => {
  const [stage, setStage] = useState<Stage>("intro");
  const [word, setWord] = useState<string>("");

  const currentStage = useMemo(() => {
    switch (stage) {
      case "intro":
        return <Intro />;
      case "setup":
        return <Setup />;
      case "playground":
        return <Playground />;
    }
  }, [stage]);

  return (
    <Layout>
      <GameContext.Provider
        value={{
          stage: stage,
          word: word,
          handleChangeStage: setStage,
          handleChangeWord: setWord,
        }}
      >
        {currentStage}
      </GameContext.Provider>
    </Layout>
  );
};
