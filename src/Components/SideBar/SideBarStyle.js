import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({

    sidebar: {
        flex: '1',
        height: 'calc(100vh - 50px)',
        backgroundColor: 'rgb(251, 251, 255)',
        position: 'sticky',
        top: '50px',
    },
    sidebarWrapper: {
        padding: '20px',
        color: '#555',
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    },
    sidebarMenu: {
        marginBottom: '10px',
    },

    sidebarTitle: {
        fontSize: '13px',
        color: 'rgb(187, 186, 186)'
    },

    sidebarList: {
        listStyle: 'none',
        padding: '5px'
    },

    sidebarListItem: {
        padding: '5px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '10px'
    },
    //   sidebarListItem: hover{

    //   } '&:hover':
    //       .sidebarListItem: hover {
    //     backgroundColor: 'rgb(240, 240, 255)'
    // }

    sidebarIcon: {
        marginRight: '5px',
        fontSize: '20px'
    }


}))