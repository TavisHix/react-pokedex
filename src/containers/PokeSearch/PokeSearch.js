import React, {Component} from 'react';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import PokemonCards from '../../components/PokemonCards/PokemonCards';



const styles = theme => ({
    container: {
        backgroundColor: 'grey',
        padding: theme.spacing(8,0,6)
      }
});

class PokeSearch extends Component {
    render () {

        return (
            <Container >
                <PokemonCards/>
            </Container>
        );
    };
}


export default withStyles(styles)(PokeSearch);