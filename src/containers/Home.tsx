import Card from "@mui/material/Card";
import { useState } from "react";
import Submission from "../components/Submission";
import styles from "./Home.module.css";

const Home = () => {
  // This is the hook that manages the number of players
  const [numberOfPlayers, setNumberOfPlayers] = useState<number>();
  // This is the hook that manages if the error is displayed
  const [error, setError] = useState<boolean>(false);

  // This is the function that handles the number of players
  const handleNumberOfPlayer = (value: string) => {
    // It sets the error if the number of players is less than 0
    setError(Number(value) <= 0);
    setNumberOfPlayers(Number(value));
  };

  const handleSubmitPlayer = () => {
    console.log("handleSubmitPlayer");
  };

  return (
    <div className={styles.root}>
      <Card className={styles.card}>
        <Submission
          handleChange={handleNumberOfPlayer}
          inputValue={numberOfPlayers}
          inputError={error}
          handleClick={handleSubmitPlayer}
        />
      </Card>
    </div>
  );
};

export default Home;
