import React, { FC, Fragment, useContext, useMemo, useState } from "react";
import { Box, Button } from "@elements";
import GameContext from "../../game-context";
import { MultipleInput } from "@components/multiple-input";
import { Result } from "./result";
import { GuessedList, GuessItem } from "./guessed-list";

const MAX_GUESSING_TURN = 3;
const REGX = new RegExp(/^[a-zA-Z]+$/);

export const Playground: FC = () => {
  const orderContext = useContext(GameContext);
  const { word } = orderContext;
  const [inputValue, setInputValue] = useState("");
  const [guessed, setGuessed] = useState<Array<GuessItem>>([]);
  const [win, setWin] = useState(false);

  const gameOver = useMemo(() => {
    return guessed.length === MAX_GUESSING_TURN;
  }, [guessed]);

  const handleChange = (value: string) => {
    setInputValue(value);
  };

  const disableSubmit = useMemo(() => {
    if (inputValue.length < word.length) return true;

    const isValid = REGX.test(inputValue);

    return !isValid;
  }, [inputValue]);

  const submit = () => {
    const matchedCount = getMatchedCount(inputValue.toLocaleLowerCase());

    setGuessed([
      ...guessed,
      {
        guess: inputValue,
        matchedCount: matchedCount,
      },
    ]);
    setInputValue("");
    if (matchedCount === word.length) {
      setWin(true);
    }
  };

  const getMatchedCount = (value: string) => {
    let result = 0;
    for (let i in word.split("")) {
      if (word[i] === value[i]) {
        result++;
      }
    }

    return result;
  };

  return (
    <Fragment>
      {gameOver || win ? (
        <Result win={win} />
      ) : (
        <Fragment>
          <Box className="mb-3">
            <MultipleInput
              length={word.length}
              value={inputValue}
              onChange={handleChange}
              regxPattern={REGX}
            />
          </Box>
          <Button size="medium" onClick={submit} disabled={disableSubmit}>
            submit
          </Button>
        </Fragment>
      )}
      <GuessedList data={guessed} />
    </Fragment>
  );
};
