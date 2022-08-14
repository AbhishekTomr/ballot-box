import { AppBar, Toolbar, Typography, Container, Button } from "@mui/material";
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import useStyle from "./HeaderStyle";

const Header = () =>{
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
                <Button variant="densed">Login</Button>
            </Container>
        </Toolbar> 
        </AppBar>
    );
}

export default Header;