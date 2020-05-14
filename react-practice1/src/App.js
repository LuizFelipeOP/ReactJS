import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Header from './componets/Header';
import Tabela from './componets/Tabela';
import Form from './componets/Form';
import PopUp from './componets/PopUp';
import router from 'react-router-dom';

class App extends Component {
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

  removeAutor = index => {
    const { autores } = this.state;

    this.setState(
      {
        autores: autores.filter((autor, posAtual) => {
          return posAtual !== index;
        }),
      }
    );
    PopUp.showMessage('sucess', 'Livro removido com sucesso');

  }
  submitListener = autor => {
    this.setState({ autores: [...this.state.autores, autor] })
    PopUp.showMessage('sucess', 'Dados inserido com sucesso');

  }
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h1>Livraria Cultura</h1>
          <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
          <Form submitListener={this.submitListener} />
        </div>
      </Fragment>
    );
  }
}

export default App;
