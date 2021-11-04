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

class Catalog extends Component {
    render () {

        return (
            <Container >
                <PokemonCards filter={this.props.filter}/>
            </Container>
        );
    };
}


export default withStyles(styles)(Catalog);