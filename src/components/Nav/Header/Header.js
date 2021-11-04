import React, { useState, useEffect } from 'react';
import {NavLink, Link} from 'react-router-dom';
import { Typography, AppBar, Toolbar, Tab, Tabs, Box, InputBase } from '@material-ui/core';
import { styled, alpha } from '@mui/material/styles';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';




// import useStyles from './HeaderStyle';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

const Header = ({setFilter}) => {
    const [value, setValue] = React.useState('one');
    // const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleSearchChange = (e) => {
        let i = e.target.value;
        setFilter(i)
    }

    return (
        <AppBar position="relative" style={{ background: '#2E3B55' }} >
            <Toolbar>
                <Typography  variant="h6">
                    React Pokédex
                </Typography>
                <Tabs value={value}>
                    <Link to="/" style={{ textDecoration: 'none', color: '#FFF'}}>
                        <Tab label="Catalog"  value='0'/>
                    </Link>
                    <Link to="/Search" style={{ textDecoration: 'none', color: '#FFF' }}>
                        <Tab label="About"  value='1'/>
                    </Link>
                </Tabs>
                <Search>
                    <SearchIconWrapper>
                        <SearchOutlinedIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={handleSearchChange}
                    />
                </Search>
            </Toolbar>
        </AppBar>
    );
    
};

export default Header;