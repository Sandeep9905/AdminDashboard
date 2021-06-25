import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    topBar: {
        width: '100%',
        height: '50px',
        backgroundColor: 'white',
        position: 'sticky',
        top: '0',
        zIndex: '999'
    },
    topRight: {
        display: 'flex',
        alignItems: 'center'
    },
    topBarWrapper: {
        height: '100%',
        padding: '0px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    topBarIconContainer: {
        position: 'relative',
        cursor: 'pointer',
        marginRight: '10px'
    },
    logo: {
        fontWeight: 'bold',
        fontSize: '30px',
        color: 'darkblue',
        cursor: 'pointer'
    },
    topBarIons: {

    }
}))