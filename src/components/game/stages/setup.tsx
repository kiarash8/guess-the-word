import React, { FC, Fragment, useContext, useState } from "react";
import { Box, Button, Input, Typography } from "@elements";
import GameContext from "../game-context";

export const Setup: FC = () => {
  const orderContext = useContext(GameContext);
  const { handleChangeStage, handleChangeWord } = orderContext;
  const [value, setValue] = useState("");

  const handleChangeValue = (event: React.ChangeEvent<any>) => {
    const _value = event.target.value as string;

    /**
     * Matches any characters between a-z or A-Z.
     * Matches the backspace control character.
     */
    const regx = new RegExp(/^[a-zA-Z\b]+$/g);
    const isValid = regx.test(_value);

    if (isValid || !_value) {
      setValue(_value);
    }
  };

  const submit = () => {
    handleChangeWord(value.toLocaleLowerCase());
    handleChangeStage("playground");
  };

  return (
    <Fragment>
      <Typography
        as="p"
        color="text-blue-900"
        fontSize="text-xl"
        className="mb-5 mx-auto w-80"
      >
        Ask your friend to turn around, then set the word.
      </Typography>
      <Box className="mb-3">
        <Input
          textAlign="text-center"
          placeholder="enter the word"
          value={value}
          onChange={handleChangeValue}
          maxLength={12}
        />
      </Box>
      <Button size="medium" onClick={submit} disabled={value.length < 1}>
        Start
      </Button>
    </Fragment>
  );
};
