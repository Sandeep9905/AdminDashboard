import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({


    widgetLg: {
        flex: '2',
        webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
        boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
        padding: '20px'
    },

    widgetLgTitle: {
        fontSize: '22px',
        fontWeight: '600'
    },

    widgetLgTable: {
        width: '100%;',
        borderSpacing: '20px'
    },

    widgetLgTh: {
        textAlign: 'left'
    },

    widgetLgUser: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: '600'
    },

    widgetLgImg: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginRight: '10px'
    },
    widgetLgDate: {
        fontWeight: '300'
    },

    widgetLgAmount: {
        fontWeight: '300'
    },

    widgetLgButton: {
        padding: '5px 7px',
        border: 'none',
        borderRadius: '10px'
    },

    Approved: {
        backgroundColor: '#e5faf2',
        color: '#3bb077'
    },
    widgetLgButton: {
        backgroundColor: '#e5faf2',
        color: '#3bb077'
    },
    Declined: {
        backgroundColor: '#fff0f1',
        color: '#d95087'

    },
    widgetLgButton: {
        backgroundColor: '#ebf1fe',
        color: '#2a7ade'
    },
    Pending: {
        backgroundColor: '#ebf1fe',
        color: '#2a7ade'

    }


}))