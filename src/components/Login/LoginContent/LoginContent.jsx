import { Fragment } from "react";
import {Typography, FormControl,OutlinedInput,Button,InputLabel} from '@mui/material';
import useStyles from "./LoginContentStyle";

const LoginContent = (props)=>{

    const classes = useStyles();

    return(
        <Fragment>
            <FormControl className={classes.loginField} variant="outlined">
                <InputLabel htmlFor="my-user" className={classes.inputLabel}>Email</InputLabel>
                <OutlinedInput
                id="my-user" 
                type="text" 
                aria-describedby="my-helper-text" 
                className={classes.inputField} />
            </FormControl>
            <FormControl className={classes.loginField} variant="outlined">
                <InputLabel htmlFor="my-user" className={classes.inputLabel}>Password</InputLabel>
                <OutlinedInput
                id="my-user" 
                type="text" 
                aria-describedby="my-helper-text" 
                className={classes.inputField} />
            </FormControl>
            <Button variant="contained" color="primary" className={classes.btn}>Login</Button>
            <Typography className={classes.optSignUp}>or <Button className={classes.signUp} color="primary" onClick={props.showSignUp}>Sign Up</Button></Typography>
        </Fragment>
    );
}

export default LoginContent;