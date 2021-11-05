import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { Route, Switch} from 'react-router-dom';

import Catalog from '../../containers/Catalog/Catalog';
import Pokemon from '../../containers/Pokemon/Pokemon';
import About from '../../containers/About/About';
import Search from '../../containers/Search/Search'
import Auxilary from '../Auxiliary/Auxiliary';
import Header from '../../components/Nav/Header/Header';


const Layout = () => {

    return (
        <Auxilary>
            <CssBaseline />
            <Header/>
            <Switch>
                <Route path="/Catalog"  component={Catalog}/>
                <Route path="/About" exact component={About} />
                <Route path="/Search" exact component={Search} />
                <Route path="/pokemon/:id" component={Pokemon} />
            </Switch>
        </Auxilary>
        )
}


export default Layout