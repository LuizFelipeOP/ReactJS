import React, { Component, Fragment } from 'react';
import Header from './componets/Header';
import App from './App';
import ListData from './componets/ListData';

class Livros extends Component {
    state = {
        autores: [
            {
                nome: 'Marcos',
                livro: 'Desenv Web',
                preco: '50'
            },
            {
                nome: 'Felipe',
                livro: 'React',
                preco: '100'
            },
            {
                nome: 'Luiz',
                livro: 'Design',
                preco: '150'
            },
            {
                nome: 'Janes',
                livro: 'PHP',
                preco: '100'
            }
        ],
    };

    getLivros = () => {
        let dados = this.state.autores.map((elem) =>
            <li key={elem.id}>{elem.livro}</li>
        );
        return dados;
    }
    render() {

        return (
            <Fragment>
                <Header />
                <h1 >Página de Livros</h1>
                <ListData titulo={'Livros disponíveis'} dados={this.state.autores} />
            </Fragment>
        )
    }

}
export default Livros;