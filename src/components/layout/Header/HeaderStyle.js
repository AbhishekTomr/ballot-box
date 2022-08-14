import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    header:{
        display: 'flex',
        // border: '2px solid white',
        flexFlow: 'row nowrap',
        width: '100%',
        alignItems: 'center',
        padding:'0px',
    },
    icons: {
        margin : '0 10px',
        fontSize: '1.6rem'
    },
    headerContainer: {
        display: 'flex',
        width: '50%',
        padding:'0 5px',
        // border:'3px solid red',
    },
    headerRight:{
        justifyContent: 'flex-end',
    }
    
});

export default useStyles;