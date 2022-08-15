import { makeStyles } from "@mui/styles";
const img = require('../../../images/LandingPage.png');

const useStyles = makeStyles({
    
    imgWrap: {
        // border: '3px solid red',
        height: '60vh',
        width: '40%',
        backgroundImage: `url(${img})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
});

export default useStyles;