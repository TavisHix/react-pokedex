import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { Route, Switch} from 'react-router-dom';

import PokeSearch from '../../containers/PokeSearch/PokeSearch';
import Pokemon from '../../containers/Pokemon/Pokemon';
import Auxilary from '../Auxiliary/Auxiliary';
import Header from '../../components/Nav/Header/Header';

const Layout = (props) => {
    return (
        <Auxilary>
            <CssBaseline />
            <Header/>
            <Switch>
                <Route path="/" exact component={PokeSearch} />
                <Route path="/pokemon/:id" component={Pokemon} />
            </Switch>
        </Auxilary>
        )
}


export default Layout