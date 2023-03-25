import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ChangeEvent } from "react";
import styles from "./Submission.module.css";

interface SubmissionProps {
  title?: string;
  buttonTitle?: string;
  description?: string;
  inputLabel?: string;
  inputValue?: number;
  inputType?: string;
  handleChange?: (value: string) => void;
  inputHelperText?: string;
  inputError?: boolean;
  handleClick?: () => void;
}

const Submission = ({
  title,
  buttonTitle,
  description,
  inputLabel,
  inputValue,
  inputType,
  inputError,
  handleChange,
  inputHelperText,
  handleClick,
}: SubmissionProps) => {
  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // If handleChange is defined, call it with the value of the input
    if (handleChange) {
      handleChange(value);
    }
  };

  return (
    <div className={styles.root}>
      <div>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body1" className={styles.description}>
          {description}
        </Typography>
      </div>
      <div className={styles.wrapper}>
        <TextField
          type={inputType}
          label={inputLabel}
          value={inputValue}
          onChange={onHandleChange}
          className={styles.input}
          helperText={inputError ? inputHelperText : ""}
          error={inputError}
        />
        <Button
          disabled={inputError}
          variant="contained"
          color="primary"
          className={styles.action}
          onClick={handleClick}
        >
          {buttonTitle}
        </Button>
      </div>
    </div>
  );
};

Submission.defaultProps = {
  title: "Card Distribution",
  buttonTitle: "submit",
  description: "Enter Number Of Players To Distribute Cards",
  inputLabel: "Number of players",
  inputValue: "",
  inputType: "number",
  inputHelperText: "Input value does not exist or value is invalid",
  handleChange: () => {},
  inputError: false,
  handleClick: () => {},
};

export default Submission;
