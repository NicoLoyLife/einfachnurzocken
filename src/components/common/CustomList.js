import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const BingBongReview = ({ listItems }) => {
  return (
    <List sx={{ pl: 2 }}>
      {listItems.map((item, index) => (
        <ListItem key={index} disableGutters>
          <ListItemIcon sx={{ minWidth: "auto", pr: 1 }}>
            <ArrowRightIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="body1">
                {item}
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default BingBongReview;
