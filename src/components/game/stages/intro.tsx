import React, { FC, Fragment, useContext } from "react";
import { Button, Typography } from "@elements";
import GameContext from "../game-context";

export const Intro: FC = () => {
  const orderContext = useContext(GameContext);
  const { handleChangeStage } = orderContext;

  return (
    <Fragment>
      <Typography
        as="p"
        color="text-blue-900"
        fontSize="text-xl"
        className="mb-5 mx-auto w-80"
      >
        This game requires at least two players but can be played with more.
      </Typography>
      <Button
        size="large"
        className="uppercase"
        onClick={() => handleChangeStage("setup")}
      >
        Start playing
      </Button>
    </Fragment>
  );
};
