import { React } from 'react';
import useStyle from './style';
import { Grid } from '@material-ui/core';
import { userRows } from '../../dummyData';
import Table from './Table';

export default function OrdersLg({ title }) {

    const classes = useStyle();
    return (
        <Grid container>
            <div className={classes.widgetLg}>
                <h3 className={classes.widgetLgTitle}>{title}</h3>
                {((title == 'Bottom 5 Order') && (
                    <table className={classes.widgetLgTable}>
                        <tr className={classes.widgetLgTr}>
                            {(title == 'Bottom')}
                            <th className={classes.widgetLgTh}>Username</th>
                            <th className={classes.widgetLgTh}>OrderNo</th>
                            <th className={classes.widgetLgTh}>TotalAmount</th>
                            <th className={classes.widgetLgTh}>TotalQuantity</th>
                        </tr>
                        {userRows.slice(0, 5).map(res => (
                            <Table title='Bottom 5 Order' key={res.id} res={res} />
                        ))}
                    </table>
                ))}
                {(title == 'Detail Order Reports') && (
                    <table className={classes.widgetLgTable}>
                        <tr className={classes.widgetLgTr}>
                            {(title == 'Bottom')}
                            <th className={classes.widgetLgTh}>User</th>
                            <th className={classes.widgetLgTh}>OrderNo</th>
                            <th className={classes.widgetLgTh}>OrderDate</th>
                            <th className={classes.widgetLgTh}>Status</th>
                            <th className={classes.widgetLgTh}>TotalAmount</th>
                            <th className={classes.widgetLgTh}>TotalQuantity</th>
                            <th className={classes.widgetLgTh}>TotalProductCount</th>
                        </tr>
                        {userRows.map(res => (
                            <Table title='Detail Order Reports' key={res.id} res={res} />
                        ))}
                    </table>
                )}
                {(title == 'Top 5 Order') && (
                    <table className={classes.widgetLgTable}>
                        <tr className={classes.widgetLgTr}>
                            {(title == 'Bottom')}
                            <th className={classes.widgetLgTh}>Username</th>
                            <th className={classes.widgetLgTh}>OrderNo</th>
                            <th className={classes.widgetLgTh}>TotalAmount</th>
                            <th className={classes.widgetLgTh}>TotalQuantity</th>
                        </tr>
                        {userRows.slice(8, 12).map(res => (
                            <Table title='Bottom 5 Order' key={res.id} res={res} />
                        ))}
                    </table>
                )}
            </div>
        </Grid>
    )
}