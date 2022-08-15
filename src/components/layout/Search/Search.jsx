import { Box,FormControl, InputLabel,Input,InputAdornment, IconButton } from "@mui/material";
import useStyle from './SearchStyle';
import SearchIcon from '@mui/icons-material/Search';

const Search = ()=>{
    const classes = useStyle();
    return(
        <Box className={classes.SearchBox}>
        <FormControl fullWidth variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Search Your Election
        </InputLabel>
        <Input 
          className={classes.searchField}
          id="input-with-icon-adornment"
          endAdornment={
            <InputAdornment>
              <IconButton className={classes.btn}>
              <SearchIcon id='search'/>
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      </Box>
    );
}

export default Search;