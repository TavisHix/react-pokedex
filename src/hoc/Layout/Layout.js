import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { Route, Switch} from 'react-router-dom';

import Catalog from '../../containers/Catalog/Catalog';
import Pokemon from '../../containers/Pokemon/Pokemon';
import Search from '../../containers/About/About';
import Auxilary from '../Auxiliary/Auxiliary';
import Header from '../../components/Nav/Header/Header';

const Layout = () => {
    
    const[filter, setFilter] = useState('')
    

    return (
        <Auxilary>
            <CssBaseline />
            <Header setFilter={setFilter}/>
            <Switch>
                <Route path="/" exact>
                    <Catalog filter={filter}/>
                </Route>
                {/* <Route path="/About" exact component={About} /> */}
                <Route path="/pokemon/:id" component={Pokemon} />
            </Switch>
        </Auxilary>
        )
}


export default Layout