import CircularProgress from "@mui/material/CircularProgress";
import styles from "./CustomLoading.module.css";

interface CustomLoadingProps {
  color?: "inherit" | "primary" | "secondary";
}

const CustomLoading = ({ color }: CustomLoadingProps) => (
  <div className={styles.loading} data-testid="loading-container">
    <CircularProgress color={color} />
  </div>
);

CustomLoading.defaultProps = {
  color: "primary",
};

export default CustomLoading;
