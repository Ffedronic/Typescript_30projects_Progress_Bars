import type { NextPage } from "next";
import { useEffect, MouseEvent, useState } from "react";
import {
  activateFirstCircle,
  toggleButtonState,
  logStepLevel,
  updateProgressSteps,
} from "../helpers/functions";
import { Progression } from "../helpers/enums";
import { steps } from "../helpers/database";
import Button from "../components/Button";
import Step from "../components/Step";
import Head from "next/head";

const Home: NextPage = () => {
  let [currentActive, setCurrentActive] = useState(1);

  function progressSteps(progression: Progression) {
    if (progression === Progression.Up) {
      currentActive++;
      if (currentActive >= steps.length) {
        currentActive = 4;
      }
    }
    if (progression === Progression.Down) {
      currentActive--;
      if (currentActive <= 1) {
        currentActive = 1;
      }
    }

    return currentActive;
  }

  function handleNextClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setCurrentActive(progressSteps(Progression.Up));
    updateProgressSteps(currentActive);
    logStepLevel(currentActive);
  }

  function handlePrevClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setCurrentActive(progressSteps(Progression.Down));
    updateProgressSteps(currentActive);
    logStepLevel(currentActive);
  }

  useEffect(() => {
    activateFirstCircle();
    toggleButtonState(currentActive);
  }, [currentActive]);

  return (
    <div>
      <Head>
        <title>Create Progress Steps</title>
        <meta
          name="description"
          content="Generate a progress steps bar with Next.JS and Typescript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Progress Steps</h1>
        <div className="container">
          <div className="progress-container">
            <div className="progress" id="progress"></div>
            {steps.map((item) => (
              <Step key={item.level} name={item.level} />
            ))}
          </div>
          <Button clickHandler={handlePrevClick} id="prev" name="Prev" />
          <Button clickHandler={handleNextClick} id="next" name="Next" />
        </div>
      </main>
    </div>
  );
};

export default Home;
