import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
    loginCard:{
        height: '50vh',
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
    loginIcon:{
        textAlign: 'center',
    },    
    icons:{
        fontSize: '3rem',
    },
    signInHeading:{
        fontWeight: 'bold',
        marginBottom: '.3rem !important'
    },
    loginField:{
        width: '90%',
        marginBottom: '.7rem !important'
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
    },
    error:{
        color: 'red',
        margin: '.3rem 0',
        textAlign:'left',
        width: '90%',
        paddingLeft: '.5rem' 
    },
    errorField:{
        border: '1px solid red'
    }
});

export default useStyles;