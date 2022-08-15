import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
    SearchBox: {
        width: '80%',
        marginTop: '3vh',
        display: 'flex',
    },
    searchField: {
    },
    btn:{
        "&:hover": {
            color: 'blue',
          },
    }

});

export default useStyles;