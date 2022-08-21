import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
    loginScreen:{
        position: 'absolute',
        height: '100vh',
        width: '100vw !important',
        backgroundColor: 'rgba(0,0,0,.5)',        
        top: '0px',
        right: '0px',
        zIndex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
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
        // border:'1px solid black',
        backgroundColor: 'white',
    },
    closeIt:{
        alignSelf: 'flex-end'
    },
    loginIcon:{
        textAlign: 'center',
        marginBottom: '1rem'
    },    
    icons:{
        fontSize: '3rem',
    },
    signInHeading:{
        fontWeight: 'bold',
        textTransform: 'uppercase'
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