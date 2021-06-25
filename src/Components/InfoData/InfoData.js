import React from 'react';
import useStyles from './InfoDataStyles';
import InfoItem from './InfoItem';
import Chart from '../Chart/Chart';
import { Grid } from '@material-ui/core';

export default function InfoData() {
    const classes = useStyles();
    return (
        <div className={classes.featured}>
            <Grid container spacing={5}>
                <Grid item style={{ display: 'flex', justifyContent: 'space-between' }} xs={12} sm={6} md={4} lg={3}>
                    <InfoItem title='Total Order' order={416} />
                    <InfoItem title='Total Amount' order={`$${1, 23, 222}`} />
                    <InfoItem title='Current Order' order={64} />
                    <InfoItem title='Last Month Amount' order={`$${1, 21, 122}`} />
                </Grid>
            </Grid>
        </div>
    )
}