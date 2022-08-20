import { AppBar, Toolbar, Typography, Container, Button, IconButton } from "@mui/material";
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import useStyle from "./HeaderStyle";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = (props) =>{
    const classes = useStyle();

    return (
        <AppBar position="relative" className={classes.headerWrap}>
        <Toolbar variant="dense" className={classes.header}>
            <Container className={`${classes.headerLeft} ${classes.headerContainer}`}>
                <HowToVoteIcon className={classes.icons}/>
                <Typography variant="h6" className={classes.mainHeading}>Ballot Box</Typography>
            </Container>   
            <Container className={`${classes.headerRight} ${classes.headerContainer}`}>
                <Button variant="densed">About Us</Button>
                <Button variant="densed">Contact Us</Button>
                <IconButton onClick={()=>{props.showLogin(oldState=>{return (!oldState)})}}>
                    <AccountCircleIcon className={classes.icons}/>
                </IconButton>
            </Container>
        </Toolbar> 
        </AppBar>
    )
}

export default Header;