import { Box, Input } from "@elements";
import React, { useEffect, useRef, useState } from "react";

export type MultipleInputProps = {
  length: number;
  value: string;
  onChange: (value: string) => void;
  regxPattern?: RegExp;
};

export function MultipleInput({
  length,
  value,
  onChange,
  regxPattern,
}: MultipleInputProps) {
  const firstInput = useRef<HTMLInputElement>(null);
  const [values, setValues] = useState<Array<string>>(Array(length).fill(""));

  useEffect(() => {
    start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (value === "") {
      const resetValues = values.map((x) => (x !== "" ? " " : x));
      setValues([...resetValues]);
      start();
    }
  }, [value]);

  const start = () => {
    if (firstInput.current) {
      firstInput.current.focus();
    }
  };

  useEffect(() => {
    const result = values.map((x) => (x === "" ? " " : x)).join("");

    onChange(result);
  }, [values]);

  const focusToNextInput = (target: HTMLElement) => {
    const nextElementSibling =
      target?.nextElementSibling as HTMLInputElement | null;

    if (nextElementSibling) {
      nextElementSibling.focus();
    }
  };
  const focusToPrevInput = (target: HTMLElement) => {
    const previousElementSibling =
      target?.previousElementSibling as HTMLInputElement | null;

    if (previousElementSibling) {
      previousElementSibling.focus();
    }
  };
  const inputOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const target = e.target;
    let targetValue = target.value;

    const backspaceControl = targetValue === "";
    const isTargetValueValid = regxPattern
      ? regxPattern.test(targetValue)
      : true;

    if (!isTargetValueValid && !backspaceControl) {
      return;
    }

    const newValues = values;
    newValues[index] = targetValue;

    setValues([...newValues]);

    if (length > index++ && !backspaceControl) {
      focusToNextInput(target);
    }
    if (backspaceControl) {
      focusToPrevInput(target);
    }
  };
  const inputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const target = e.target as HTMLInputElement;

    if (key === "ArrowRight" || key === "ArrowDown") {
      e.preventDefault();
      return focusToNextInput(target);
    }

    if (key === "ArrowLeft" || key === "ArrowUp") {
      e.preventDefault();
      return focusToPrevInput(target);
    }

    const targetValue = target.value;

    target.setSelectionRange(0, targetValue.length);

    if (e.key !== "Backspace" || targetValue !== "") {
      return;
    }

    focusToPrevInput(target);
  };

  return (
    <Box className="flex flex-row justify-center flex-wrap gap-2">
      {values.map((v, index) => (
        <Input
          key={index}
          {...(index === 0 && {
            ref: firstInput,
          })}
          type="text"
          dir="ltr"
          textAlign="text-center"
          className="w-10"
          fullWidth
          maxLength={1}
          value={v}
          onChange={(e) => inputOnChange(e, index)}
          onKeyDown={inputOnKeyDown}
        />
      ))}
    </Box>
  );
}
