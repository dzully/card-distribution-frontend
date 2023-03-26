import Card from "@mui/material/Card";
import { ChangeEvent, Suspense, lazy, useState } from "react";
import Header from "../components/Header";
import Submission from "../components/Submission";
import { convertEachPersonToObject, handleShuffle } from "../utils";
import styles from "./Home.module.css";

const Result = lazy(() => import("../components/Result"));

interface outputCardProps {
  [key: string]: string;
}

const Home = () => {
  // This is the hook that manages the number of players
  const [numberOfPlayers, setNumberOfPlayers] = useState<number>();
  // This is the hook that manages if the error is displayed
  const [error, setError] = useState<boolean>();
  const [outputCard, setOutputCard] = useState<outputCardProps>({});
  console.log({ outputCard });

  // This is the function that handles the number of players
  const handleNumberOfPlayer = (value: string) => {
    // It sets the error if the number of players is less than 0
    setError(Number(value) <= 0);
    const parsedValue = (Number(value) || "") as number;
    setNumberOfPlayers(parsedValue);
  };

  const handleSubmitPlayer = (e: ChangeEvent<HTMLFormElement>) => {
    // prevent the default behavior of the form
    e.preventDefault();
    // check if the number of players is valid
    if (!(numberOfPlayers && numberOfPlayers > 0)) {
      return;
    }
    // call the function that shuffles the players and gets the output
    const output = handleShuffle({ totalPlayers: numberOfPlayers });
    // set the outputCard with the output of the shuffle
    setOutputCard(convertEachPersonToObject(output));
  };

  return (
    <div className={styles.root}>
      <Card className={styles.card}>
        <div className={styles.content}>
          <Header />
          <Submission
            handleChange={handleNumberOfPlayer}
            inputValue={numberOfPlayers}
            inputError={error}
            handleSubmit={handleSubmitPlayer}
          />
          <Suspense fallback={<div>Loading...</div>}>
            {Object.keys(outputCard).length > 0 && <Result item={outputCard} />}
          </Suspense>
        </div>
      </Card>
    </div>
  );
};

export default Home;
