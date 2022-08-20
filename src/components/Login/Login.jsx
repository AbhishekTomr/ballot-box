import useStyles from './LoginStyle';
import {Card, Typography, CardMedia, CardContent,FormControl,OutlinedInput,Button,InputLabel,InputAdornment} from '@mui/material'
import { IconButton } from '@mui/material';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';



let Login = (props)=>{
    const closeWindow =()=>{
        props.closeLogin(false);
    }
    const classes = useStyles();
    return(
        <div className={classes.loginScreen}>
            <Card className={classes.loginCard}>
                <IconButton className={classes.closeIt} onClick={closeWindow}><CloseIcon/></IconButton>
                <CardMedia className={classes.loginIcon}>
                    <AccountCircleSharpIcon className={classes.icons} fontSize="5rem" color="primary" />
                    <Typography variant="h5" className={classes.signInHeading}>Sign In</Typography>
                </CardMedia>
                <FormControl className={classes.loginField} variant="outlined">
                        <InputLabel htmlFor="my-user" className={classes.inputLabel}>Email</InputLabel>
                        <OutlinedInput
                         id="my-user" 
                         type="text" 
                         aria-describedby="my-helper-text" 
                         className={classes.inputField} />
                </FormControl>
                <FormControl className={classes.loginField} variant="outlined">
                        <InputLabel htmlFor="my-pass" className={classes.inputLabel}>Password</InputLabel>
                        <OutlinedInput id="my-pass"
                         type="password" 
                         aria-describedby="my-helper-text" 
                         className={classes.inputField} 
                         />
                </FormControl>
                <Button variant="contained" color="primary" className={classes.btn}>Login</Button>
                <Typography className={classes.optSignUp}>or <Button className={classes.signUp} color="primary">Sign Up</Button></Typography>
            </Card>
        </div>       
    )
}

export default Login;