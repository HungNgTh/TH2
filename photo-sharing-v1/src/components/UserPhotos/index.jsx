import React from "react";
import { Typography, Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import "./styles.css";
import {useParams} from "react-router-dom";
import models from "../../modelData/models";

function UserPhotos() {
    const { userId } = useParams();
    const photos = models.photoOfUserModel(userId);
    const user = models.userModel(userId);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleString();
    };

    return (
      <div>
        <Typography variant="h6">
          Photos of {user.first_name} {user.last_name}
        </Typography>
        
        {photos.map(photo => (
          <Box key={photo._id} style={{ marginBottom: 20 }}>
            <img 
              src={`/images/${photo.file_name}`} 
              alt={photo.file_name}
              style={{ maxWidth: '100%', marginBottom: 10 }}
            />
            <Typography variant="body2">
              Created: {formatDate(photo.date_time)}
            </Typography>
            
            {photo.comments && photo.comments.map(comment => (
              <Box key={comment._id} style={{ marginLeft: 20, marginTop: 10 }}>
                <Divider />
                <Typography variant="body2">
                  <Link to={`/users/${comment.user._id}`}>
                    {comment.user.first_name} {comment.user.last_name}
                  </Link>
                  {' - '}{formatDate(comment.date_time)}
                </Typography>
                <Typography variant="body1">
                  {comment.comment}
                </Typography>
              </Box>
            ))}
            <Divider style={{ marginTop: 10 }} />
          </Box>
        ))}
      </div>
    );
}

export default UserPhotos;