import React, { FC, Fragment, useContext } from "react";
import { Button, Typography } from "@elements";
import GameContext from "../../game-context";

export const Result: FC<{
  win: boolean;
}> = ({ win }) => {
  const orderContext = useContext(GameContext);
  const { handleChangeStage } = orderContext;

  return (
    <Fragment>
      <Typography
        as="h6"
        color={win ? "text-green-500" : "text-red-500"}
        fontSize="text-xl"
        fontWeight="font-bold"
        className="mb-2"
      >
        {win ? "Congratulations you won!" : "Game over!"}
      </Typography>
      <Typography
        as="h6"
        color="text-black"
        fontSize="text-lg"
        className="mb-5"
      >
        {win ? "I'm impressed, you're a genius." : "Sorry, maybe next time."}
      </Typography>
      <Button
        size="medium"
        className="uppercase"
        onClick={() => handleChangeStage("setup")}
      >
        Start over
      </Button>
    </Fragment>
  );
};
