import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    featured: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },

    featuredItem: {
        flex: '4',
        margin: '0px 20px',
        padding: '30px',
        borderRadius: '10px',
        cursor: 'pointer',
        webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
        boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)'
    },

    featuredTitle: {
        fontSize: '20px'
    },

    featuredMoneyContainer: {
        margin: '10px 0px',
        display: 'flex',
        alignItems: 'center'
    },

    featuredMoney: {
        fontSize: '30px',
        fontWeight: '600'
    },

    featuredMoneyRate: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '20px'
    },

    featuredIcon: {
        fontSize: '14px',
        marginLeft: '5px',
        color: 'green'
    },

    negative: {
        color: 'red'
    },
    featuredSub: {
        fontSize: '15px',
        color: 'gray'
    }



}))