import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

function TopBar() {
    const location = useLocation();
    
    const getContextText = () => {
        if (location.pathname.startsWith('/users/') && !location.pathname.includes('/photos')) {
            const userId = location.pathname.split('/users/')[1];
            const user = models.userModel(userId);
            return user ? `${user.first_name} ${user.last_name}` : 'User Details';
        }
        
        if (location.pathname.startsWith('/photos/')) {
            const userId = location.pathname.split('/photos/')[1];
            const user = models.userModel(userId);
            return user ? `Photos of ${user.first_name} ${user.last_name}` : 'User Photos';
        }
        
        return 'Photo Sharing App';
    };

    return (
        <AppBar className="topbar-appBar" position="absolute">
            <Toolbar>
                <Typography variant="h5" color="inherit" style={{ flexGrow: 1 }}>
                    Your Name
                </Typography>
                <Typography variant="h6" color="inherit">
                    {getContextText()}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;