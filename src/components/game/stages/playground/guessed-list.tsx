import React, { FC } from "react";
import { Box, Typography } from "@elements";

export interface GuessItem {
  guess: string;
  matchedCount: number;
}

export const GuessedList: FC<{
  data: Array<GuessItem>;
}> = ({ data }) => {
  return (
    <Box className="w-72 mx-auto mt-6">
      {data.map((item, index) => (
        <Box key={index} className="flex justify-between items-center py-1">
          <Typography as="h6" color="text-black" fontSize="text-lg">
            {item.guess}
          </Typography>
          <Box className="bg-green-500 px-2 py-1 rounded-full">
            <Typography as="h6" color="text-white" fontSize="text-xs">
              {item.matchedCount}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
