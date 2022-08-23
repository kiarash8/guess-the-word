import { Box, Typography } from "@elements";
import React, { FC } from "react";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box className="flex min-h-screen flex-col items-center justify-center py-2">
      <Box
        as="main"
        className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center"
      >
        <Typography
          as="h1"
          color="text-blue-900"
          fontSize="text-4xl"
          fontWeight="font-black"
          textTransform="uppercase"
          className="mb-5"
        >
          Guess The Word!
        </Typography>
        <Box className="p-4">{children}</Box>
      </Box>
    </Box>
  );
};
