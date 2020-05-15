import React, { Component, Fragment } from 'react';
import Header from './componets/Header';
import ListData from './componets/ListData';
import ApiService from './ApiService';

class Autores extends Component {
    constructor(props) {
        super(props);
        this.state = {
            autores: [],
        };
    }
    componentDidMount() {
        ApiService.ListNomes()
            .then(res => {
                this.setState({ autores: [this.state.autores, ...res.data] })
            })
    }

    render() {
        return (
            <Fragment>
                <Header />
                <h1 >Página de Autores</h1>
                <ListData titulo={'Nossos autores'} dados={this.state.autores} param={['nome']} />
            </Fragment>
        )
    }

}
export default Autores;