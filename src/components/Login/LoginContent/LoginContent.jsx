import { Fragment } from "react";
import {Typography, FormControl,OutlinedInput,Button,InputLabel} from '@mui/material';
import useStyles from "./LoginContentStyle";
import {useState, useEffect} from 'react';

const LoginContent = (props)=>{

    const classes = useStyles();
    const [loginField, changeLoginInput] = useState({email: '', password: ''})
    

    const [emailErrorState,changeEmailErrorState] = useState({
        state: false,
        errorMessage: '',
        touched : false,
    });
    const [passErrorState,changePassErrorState] = useState({
    state: false,
    errorMessage: '',
    touched: false
    });

    const EmailInputFeildClasses = emailErrorState.state ?`${classes.inputField} ${classes.errorField}`: `${classes.inputField}`;
    const PassInputFeildClasses = passErrorState.state ?`${classes.inputField} ${classes.errorField}`: `${classes.inputField}`;


    useEffect(()=>{
        document.getElementById('my-user').focus()
    },[])

    const validate = (actionType,value)=>
    {
        if(actionType==='email')
        {
            if(value.length===0)
            {
                console.log("emty feild");
                changeEmailErrorState({state: true, errorMessage: 'emplty email, please provide a value'});
            }
            else if(!value.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")){
                changeEmailErrorState({state: true, errorMessage: 'Please provide a correct format for your email'});
            }
            else{
                console.log("non empty.")
                changeEmailErrorState({state: false, errorMessage: ''});
                //add an 
            }
        }
        if(actionType==='password')
        {
            if(value.length===0)
            {
                console.log("emty feild");
                changePassErrorState({state: true, errorMessage: 'emplty Password, please provide a value'});
            }
            else{
                console.log("non empty.")
                changePassErrorState({state: false, errorMessage: ''});
                //add an 
            }
        }   
    }
    
    const handleSubmit = ()=>{
        const email = loginField.email;
        const password = loginField.password;

        validate('email',email);
        validate('password',password);
        
        if(emailErrorState.state){
            document.querySelector('#my-user').focus();
        }
        else if(passErrorState.state)
        {
            document.querySelector('#user-pass').focus();
        }
        
        if((emailErrorState.state === false && emailErrorState.touched) && (passErrorState.state === false && passErrorState.touched))
        {
            alert('Sending Values to backend');
            console.log("Login Values", loginField.email,loginField.password);
        }

        
    }

    return(
        <Fragment>
            <FormControl className={classes.loginField} variant="outlined">
                <InputLabel htmlFor="my-user" className={classes.inputLabel}>Email</InputLabel>
                <OutlinedInput
                id="my-user" 
                type="text" 
                aria-describedby="my-helper-text" 
                className={EmailInputFeildClasses}
                value={loginField.email}
                onChange={(event)=>{
                    changeEmailErrorState({state: false, errorMessage: ''});
                    changeLoginInput(oldState=>{
                        return {...oldState,email:event.target.value}
                    })
                }}
                onBlur={(event)=>{
                    validate('email',event.target.value);
                }}/>
                <span className={classes.error}>{emailErrorState.errorMessage}</span>
            </FormControl>
            <FormControl className={classes.loginField} variant="outlined">
                <InputLabel htmlFor="my-user" className={classes.inputLabel}>Password</InputLabel>
                <OutlinedInput
                id="user-pass" 
                type="text" 
                aria-describedby="my-helper-text" 
                className={PassInputFeildClasses} 
                value={loginField.password}
                onChange={(event)=>{

                    changeLoginInput(oldState=>{
                        changePassErrorState({state: false, errorMessage: ''});
                        return {...oldState,password:event.target.value}
                    })
                }}
                onBlur={(event)=>{
                    validate('password',event.target.value);
                }}/>
                {passErrorState.state && <span className={classes.error}>{passErrorState.errorMessage}</span>}
            </FormControl>
            <Button type="submit" variant="contained" color="primary" className={classes.btn} onClick={handleSubmit}>Login</Button>
            <Typography className={classes.optSignUp}>or <Button className={classes.signUp} color="primary" onClick={props.showSignUp}>Sign Up</Button></Typography>
        </Fragment>
    );
}

export default LoginContent;