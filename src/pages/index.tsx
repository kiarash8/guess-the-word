import { Fragment } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Game } from "@components/game";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Guess The Word!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Game />
    </Fragment>
  );
};

export default Home;
