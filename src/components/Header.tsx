import Typography from "@mui/material/Typography";
import styles from "./Header.module.css";

interface HeaderProps {
  title?: string;
  description?: string;
}

const Header = ({ title, description }: HeaderProps) => (
  <div>
    <Typography variant="h4">{title}</Typography>
    <Typography variant="body1" className={styles.description}>
      {description}
    </Typography>
  </div>
);

Header.defaultProps = {
  title: "Card Distribution",
  description: "Enter Number Of Players To Distribute Cards",
};

export default Header;
