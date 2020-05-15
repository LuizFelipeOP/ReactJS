import React, { Component, Fragment } from 'react';
import Header from '../componets/Header';
import ListData from '../componets/ListData';
import ApiService from '../ApiService';
import PopUp from '../componets/PopUp';

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
                if (res.message === 'success') {
                    this.setState({ autores: [this.state.autores, ...res.data] })
                }
            })
            .catch(error => PopUp.showMessage('error', 'Falha ao comunicar com o servidor'));
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