import React from "react";
import {Typography, Button} from "@mui/material";
import {Link} from "react-router-dom";
import "./styles.css";
import {useParams} from "react-router-dom";
import models from "../../modelData/models";

function UserDetail() {
    const { userId } = useParams();
    const user = models.userModel(userId);

    if (!user) {
        return <Typography variant="body1">User not found</Typography>;
    }

    return (
        <div>
          <Typography variant="h6">
            {user.first_name} {user.last_name}
          </Typography>
          <Typography variant="body1">
            Location: {user.location}
          </Typography>
          <Typography variant="body1">
            Occupation: {user.occupation}
          </Typography>
          <Typography variant="body1">
            Description: {user.description}
          </Typography>
          <Button 
            component={Link} 
            to={`/photos/${userId}`}
            variant="contained" 
            style={{ marginTop: 10 }}
          >
            View Photos
          </Button>
        </div>
    );
}

export default UserDetail;