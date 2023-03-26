import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { ChangeEvent } from "react";
import styles from "./Submission.module.css";

interface SubmissionProps {
  buttonTitle?: string;
  inputLabel?: string;
  inputValue?: number;
  inputType?: string;
  handleChange?: (value: string) => void;
  inputHelperText?: string;
  inputError?: boolean;
  handleSubmit?: (e: ChangeEvent<HTMLFormElement>) => void;
}

const Submission = ({
  buttonTitle,
  inputLabel,
  inputValue,
  inputType,
  inputError,
  handleChange,
  inputHelperText,
  handleSubmit,
}: SubmissionProps) => {
  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // If handleChange is defined, call it with the value of the input
    if (handleChange) {
      handleChange(value);
    }
  };

  return (
    <form
      className={styles.wrapper}
      onSubmit={handleSubmit}
      data-testid="submission-container"
    >
      <TextField
        type={inputType}
        label={inputLabel}
        value={inputValue}
        onChange={onHandleChange}
        className={styles.input}
        helperText={inputError ? inputHelperText : ""}
        error={inputError}
        data-testid="textbox"
        inputProps={{ "data-testid": "textbox-input" }}
      />
      <Button
        disabled={inputError || !inputValue}
        variant="contained"
        color="primary"
        className={styles.action}
        type="submit"
      >
        {buttonTitle}
      </Button>
    </form>
  );
};

Submission.defaultProps = {
  title: "Card Distribution",
  buttonTitle: "submit",
  inputLabel: "Number of players",
  inputValue: "",
  inputType: "number",
  inputHelperText: "Input value does not exist or value is invalid",
  handleChange: () => {},
  inputError: false,
  handleSubmit: () => {},
};

export default Submission;
