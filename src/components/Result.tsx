import { ListSubheader } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import styles from "./Result.module.css";

interface itemProps {
  [key: string]: string;
}

interface ResultProps {
  item: itemProps;
  defaultHeight?: number;
}

const Result = ({ item, defaultHeight }: ResultProps) => {
  const player = Object.keys(item).length > 1 ? "Players" : "Player";

  const subheader = (
    <ListSubheader>
      Result : {Object.keys(item).length} {player}
    </ListSubheader>
  );

  return (
    <List
      sx={{
        overflow: "auto",
        maxHeight: defaultHeight,
      }}
      subheader={subheader}
    >
      {Object.keys(item).map((key) => {
        const playerCard = item[key] || "-";

        return (
          <ListItem key={key}>
            <ListItemText
              primary={`${player} ${key}`}
              secondary={playerCard}
              className={styles.listItemText}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

Result.defaultProps = {
  defaultHeight: 400,
};

export default Result;
