import useStyles from "./MainImage.style";
import { Container } from "@mui/material";


const MainImage = ()=>{
    const classes = useStyles();
    return (
        <Container className={classes.imgWrap}>
        </Container>
    );
}

export default MainImage;