import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./styles.css";
import models from "../../modelData/models";

function UserList() {
    const users = models.userListModel();
    return (
      <div>
        <Typography variant="body1">
          This is the user list:
        </Typography>
        <List component="nav">
          {users.map((user) => (
            <div key={user._id}>
              <ListItem button component={Link} to={`/users/${user._id}`}>
                <ListItemText primary={`${user.first_name} ${user.last_name}`}/>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </div>
    );
}

export default UserList;