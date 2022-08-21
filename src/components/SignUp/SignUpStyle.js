import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
    loginCard:{
        height: 'auto',
        width: '30vw',
        display: 'flex',
        flexFlow: 'column nowrap',
        padding: '1rem',
        justifyContent: 'space-around',
        alignItems:'center',
    },
    inputLabel:{
        backgroundColor: 'white',
    },
    closeIt:{
        alignSelf: 'flex-end'
    },
    signInHeading:{
        fontWeight: 'bold',
    },
    loginField:{
        width: '90%',
        marginBottom: '.3rem !important'
    },
    btn:{
        width: '90%'
    },
    optSignUp:{
        borderTop:'1px solid gray',
        width: '90%',
        textAlign:'center',
    },
    signUp:{
        fontSize: '1rem',
        fontWeight: 'bold',
        textTransform: 'capitalize',
    }
});

export default useStyles;