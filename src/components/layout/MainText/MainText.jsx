import { Container,Typography,Button } from "@mui/material";
import useStyles from "./MainTextStyle";

const MaintText = ()=>{
    const classes = useStyles();
    return (
        <Container className={classes.textContainer}>
        <Typography variant="h2" className={classes.mainHeading} gutterBottom>Your One Stop Solution for Elections</Typography>
        <Typography className={classes.description} gutterBottom>Ballot Box is an online platform for creating and conducting customized elections and poles, with integrated security features like facial recognition and biometrics.</Typography>
        <Container className={classes.btnWrap} gutterBottom>
            <Button variant="contained" className={classes.btn}>Create Election</Button>
        </Container>
        </Container>
    )
}

export default MaintText;