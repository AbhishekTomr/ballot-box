import useStyles from './LoginStyle';
import {Card} from '@mui/material';
import LoginContent from './LoginContent/LoginContent'
import SignUp from '../SignUp/SignUp'
import CloseIcon from '@mui/icons-material/Close';
import { IconButton,CardMedia,Typography,Button } from '@mui/material';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';



let Login = (props)=>{
    const closeWindow =()=>{
        props.closeLogin((oldState)=>{
            console.log(oldState);
            return {showSignUp: false,Login:false}
        });
    }

    const changeWindow = ()=>{
        props.closeLogin(oldState=>({...oldState,showSignUp: !oldState.showSignUp}))
    }


    const classes = useStyles();
    const heading = props.loginState.showSignUp? "Sign Up": "Login";
    return(
        <div className={classes.loginScreen}>
            <Card className={classes.loginCard}>
            <IconButton className={classes.closeIt} onClick={closeWindow}><CloseIcon/></IconButton>
            <CardMedia className={classes.loginIcon}>
            <AccountCircleSharpIcon className={classes.icons} fontSize="5rem" color="primary" />
            <Typography variant="h5" className={classes.signInHeading}>{heading}</Typography>
            </CardMedia>
                {!props.loginState.showSignUp && <LoginContent closeWindow={closeWindow} showSignUp={changeWindow}/>}
                {props.loginState.showSignUp && <SignUp showLogin={changeWindow} closeWindow={closeWindow} />}
            </Card>
        </div>       
    )
}

export default Login;