import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    header:{
        display: 'flex',
        // border: '2px solid white',
        flexFlow: 'row nowrap',
        width: '100%',
        alignItems: 'center',
        padding:'0px !important',
    },
    icons: {
        margin : '0 10px',
        fontSize: '2.1rem !important'
    },
    headerContainer: {
        display: 'flex !important',
        width: '50%',
        padding:'0 5px !important',
        // border:'3px solid red',
    },
    headerRight:{
        justifyContent: 'flex-end',
    }
    
});

export default useStyles;