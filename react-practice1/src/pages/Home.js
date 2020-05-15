import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import '../App.css';
import Header from '../componets/Header';
import Tabela from '../componets/Tabela';
import Form from '../componets/Form';
import PopUp from '../componets/PopUp';
import ApiService from '../ApiService';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      autores: [],
    };
  }

  removeAutor = id => {
    const { autores } = this.state;

    const autoresAtualizado = autores.filter(autor => {
      return autor.id !== id;
    });
    ApiService.RemoveAutor(id)
      .then(res => {
        if (res.message === 'deleted') {
          this.setState({ autores: [...autoresAtualizado] })
          PopUp.showMessage('success', 'Livro removido com sucesso');
        }
      })
      .catch(error => PopUp.showMessage('error', 'Falha ao comunicar com o servidor')
      )
  }
  submitListener = autor => {
    ApiService.Create(JSON.stringify(autor))
      .then(res => {
        if (res.message === 'success') {
          this.setState({ autores: [...this.state.autores, autor] });
          PopUp.showMessage('success', 'Dados inserido com sucesso');
        }
      })
      .catch(error => PopUp.showMessage('error', 'Falha ao comunicar com o servidor'));
  }
  componentDidMount() {
    ApiService.Get()
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
