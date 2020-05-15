import React, { Component, Fragment } from 'react';
import Header from '../componets/Header';
import ListData from '../componets/ListData';
import ApiService from '../ApiService';
import PopUp from '../componets/PopUp';

class Livros extends Component {
    constructor(props) {
        super(props);
        this.state = {
            autores: [],
        };
    }

    componentDidMount() {
        ApiService.ListLivros()
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
                <h1 >Página de Livros</h1>
                <ListData titulo={'Livros disponíveis'} dados={this.state.autores} param={['livro']} />
            </Fragment>
        )
    }

}
export default Livros;