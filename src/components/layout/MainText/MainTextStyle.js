import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    textContainer:{
        display:'flex',
        flexFlow: 'column nowrap',
    },
    mainHeading: {
        fontWeight: 'bold !important',

    },
    btnWrap: {
        display: 'flex',
        justifyContent: 'flex-start',
        marginTop: '1rem',
        padding: '0 !important'
    },
    description:{
        fontSize: '1rem',  
    },
});

export default useStyles;