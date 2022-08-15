import useStyles from "./MainImage.style";
import { Card,CardMedia,Container } from "@mui/material";

const Img = require('../../../images/LandingPage.png');

const MainImage = ()=>{
    const classes = useStyles();
    return (
        <Container className={classes.imgWrap}>
            <Card className={classes.card} raised={false}>
                <CardMedia 
                className = {classes.mediaCard}
                component="img"
                image={Img}
                alt="green iguana">
                </CardMedia>
            </Card>
        </Container>
    );
}

export default MainImage;