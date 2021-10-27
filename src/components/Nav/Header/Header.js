import React from 'react';
import { Typography, AppBar, Toolbar, } from '@material-ui/core';

// import useStyles from './HeaderStyle';



const Header= (props) => {
    // const classes = useStyles();
    
    return (
        <AppBar position="relative">
            <Toolbar>
                <Typography  variant="h6">
                    React Pokédex
                </Typography>
            </Toolbar>
        </AppBar>
    );
    
};

export default Header;