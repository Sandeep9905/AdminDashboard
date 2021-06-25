import React from 'react';
import useStyles from './style';

export default function Table({ res, title }) {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    };
    const classes = useStyles();
    return (
        <>
            {(title == 'Bottom 5 Order') && (
                <tr className={classes.widgetLgTr}>
                    <td className={classes.widgetLgUser}>
                        <img
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            className={classes.widgetLgImg}
                        />
                        <span className={classes.widgetLgName}>{res.username}</span>
                    </td>
                    <td className={classes.widgetLgDate}>{res.Orderno}</td>
                    <td className={classes.widgetLgAmount}>{res.totalAmount}</td>
                    <td className={classes.widgetLgAmount}>{res.totalQunatity}</td>
                </tr>
            )}

            {(title == 'Detail Order Reports') && (
                <tr className={classes.widgetLgTr}>
                    <td className={classes.widgetLgUser}>
                        <img
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            className={classes.widgetLgImg}
                        />
                        <span className={classes.widgetLgName}>{res.username}</span>
                    </td>
                    <td className={classes.widgetLgDate}>{res.Orderno}</td>
                    <td className={classes.widgetLgDate}>{res.orderDate}</td>
                    <td className={classes.widgetLgDate}>{res.status}</td>
                    <td className={classes.widgetLgAmount}>{res.totalAmount}</td>
                    <td className={classes.widgetLgAmount}>{res.totalQunatity}</td>

                    <td className={classes.widgetLgAmount}>{res.totalProductCount}</td>
                    <td className={classes.widgetLgStatus}>
                        <Button type="Approved" />
                    </td>
                </tr>
            )}
        </>
    )
}