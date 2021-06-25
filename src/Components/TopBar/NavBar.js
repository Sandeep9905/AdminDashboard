import React from 'react';
import useStyles from './NavbarStyle';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import LanguageIcon from '@material-ui/icons/Language';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { Badge, IconButton } from '@material-ui/core';

export default function Navbar() {
    const classes = useStyles();
    return (
        <div className={classes.topBar}>
            <div className={classes.topBarWrapper}>
                <div className={classes.topLeft}>
                    <div className={classes.logo}>
                        Admin Dashboard
                    </div>
                </div>
                <div className={classes.topRight}>
                    <div className={classes.topBarIconContainer}>
                        <IconButton aria-label="Show Notifications" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <NotificationsNoneIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <LanguageIcon />
                        </IconButton>
                        <IconButton>
                            <AccountCircleIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    )
}