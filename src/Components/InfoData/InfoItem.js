import React from 'react';
import useStyles from './InfoDataStyles';
import { ArrowDownward } from "@material-ui/icons";

export default function InfoItem({ title, order }) {
    const classes = useStyles();
    return (
        <div className={classes.featuredItem}>
            <span className={classes.featuredTitle}>{title}</span>
            <div className={classes.featuredMoneyContainer}>
                <span className={classes.featuredMoney}>{order}</span>
                <span className={classes.featuredMoneyRate}>
                    -11.4 <ArrowDownward className={`${classes.featuredIcon} ${classes.negative}`} />
                </span>
            </div>
            <span className={classes.featuredSub}>Compared to last month</span>
        </div>
    )
}