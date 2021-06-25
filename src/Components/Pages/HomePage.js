import React, { useEffect, useState } from 'react';
import useStyles from './HomePageStyle';
import { userData, userRows } from "../../dummyData";
import InfoData from '../InfoData/InfoData';
import Chart from '../Chart/Chart';
import OrdersLg from '../Orders/OrdersLg';
import { Grid } from '@material-ui/core';

export default function HomePage() {
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        setAllData(userRows)
    }, []);

    const classes = useStyles();
    return (
        <div className={classes.home}>
            <Grid container>
                <Grid item xs={12}>
                    <InfoData />
                </Grid>
                <Grid item xs={12}>
                    <Chart data={userData} title="Daily Orders Analytics" grid dataKey="Daily Orders" />
                </Grid>
                <Grid item xs={12}>
                    <div style={{ display: 'flex', margin: '20px' }}>
                        <OrdersLg title='Top 5 Order' />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div style={{ display: 'flex', margin: '20px' }}>
                        <OrdersLg title='Bottom 5 Order' />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div style={{ display: 'flex', margin: '20px' }}>
                        <OrdersLg title='Detail Order Reports' userRows={allData} />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}