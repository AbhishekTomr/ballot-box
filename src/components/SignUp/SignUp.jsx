import {FormControl,OutlinedInput,Button,InputLabel,Typography} from '@mui/material';
import { Fragment } from 'react';
import useStyles from './SignUpStyle';

let SignUp = (props)=>{
    const classes = useStyles();
    return (
        <Fragment>
        <FormControl className={classes.loginField} variant="outlined">
                <InputLabel htmlFor="my-user" className={classes.inputLabel}>Name</InputLabel>
                <OutlinedInput
                id="my-user" 
                type="text" 
                aria-describedby="my-helper-text" 
                className={classes.inputField} />
        </FormControl>
            <FormControl className={classes.loginField} variant="outlined">
                    <InputLabel htmlFor="my-user" className={classes.inputLabel}>User Name</InputLabel>
                    <OutlinedInput
                    id="my-user" 
                    type="text" 
                    aria-describedby="my-helper-text" 
                    className={classes.inputField} />
            </FormControl>
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
            <FormControl className={classes.loginField} variant="outlined">
                    <InputLabel htmlFor="my-pass" className={classes.inputLabel}>Confirm Password</InputLabel>
                    <OutlinedInput id="my-pass"
                    type="password" 
                    aria-describedby="my-helper-text" 
                    className={classes.inputField} 
                    />
            </FormControl>
            <Button variant="contained" color="primary" className={classes.btn}>Sign Up</Button>
            <Typography className={classes.optSignUp}>or <Button className={classes.signUp} color="primary" onClick={props.showLogin}>Sign Up</Button></Typography>
        </Fragment>
    );
}

export default SignUp;