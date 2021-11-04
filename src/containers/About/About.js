import React , {useState} from 'react'
import { Container, TextField} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { dividerClasses } from '@mui/material';


const Search = () => {
    const [filter, setFilter] = useState("")

    const handleSearchChange =(e) => {
        setFilter(e.target.value)
    }
    return (
        <div>
            <SearchIcon/>
            <TextField 
                onChange={handleSearchChange}
                label="Pokemon Name"
                variant="standard"/>
        </div>
    )
    
}


export default Search;
