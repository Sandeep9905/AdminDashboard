import React from 'react';
import useStyles from './SideBarStyle';
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function SideBar() {
    const classes = useStyles();
    return (
        <div className={classes.sidebar}>
            <div className={classes.sidebarWrapper}>
                <div className={classes.sidebarWrapper}>
                    <h3 className={classes.sidebarTitle}>Dashboard</h3>
                    <ul className={classes.sidebarList}>
                        <Link to="/" className={classes.link}>
                            <li className={classes.sidebarListItem}>
                                <LineStyle className={classes.sidebarIcon} />
                                Home
                            </li>
                        </Link>
                        <li className={classes.sidebarListItem}>
                            <Timeline className={classes.sidebarIcon} />
                            Analytics
                        </li>
                        <li className={classes.sidebarListItem}>
                            <TrendingUp className={classes.sidebarIcon} />
                            Sales
                        </li>

                        <li className={classes.sidebarListItem}>
                            <MailOutline className={classes.sidebarIcon} />
                            Mail
                        </li>
                        <li className={classes.sidebarListItem}>
                            <DynamicFeed className={classes.sidebarIcon} />
                            Feedback
                        </li>
                        <li className={classes.sidebarListItem}>
                            <ChatBubbleOutline className={classes.sidebarIcon} />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className={classes.sidebarTitle}>Staff</h3>
                    <ul className={classes.sidebarList}>
                        <li className={classes.sidebarListItem}>
                            <WorkOutline className={classes.sidebarIcon} />
                            Manage
                        </li>
                        <li className={classes.sidebarListItem}>
                            <Timeline className={classes.sidebarIcon} />
                            Analytics
                        </li>
                        <li className={classes.sidebarListItem}>
                            <Report className={classes.sidebarIcon} />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}