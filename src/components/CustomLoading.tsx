import { CircularProgress } from "@mui/material";
import styles from "./CustomLoading.module.css";

const CustomLoading = () => (
  <div className={styles.loading} data-testid="loading-container">
    <CircularProgress />
  </div>
);

export default CustomLoading;