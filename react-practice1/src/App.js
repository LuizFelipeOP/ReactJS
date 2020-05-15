import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Header from './componets/Header';
import Tabela from './componets/Tabela';
import Form from './componets/Form';
import PopUp from './componets/PopUp';
import ApiService from './ApiService';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      autores: [],
    };
  }

  removeAutor = id => {
    const { autores } = this.state;

    this.setState(
      {
        autores: autores.filter((autor) => {
          return autor.id !== id;
        }),
      }
    );
    PopUp.showMessage('sucess', 'Livro removido com sucesso');
    ApiService.RemoveAutor(id);

  }
  submitListener = autor => {
    ApiService.Create(JSON.stringify(autor))
      .then(res => res.data)
      .then(autor => {
        this.setState({ autores: [...this.state.autores, autor] })
        PopUp.showMessage('sucess', 'Dados inserido com sucesso');
      })

  }
  componentDidMount() {
    ApiService.Get()
      .then(res => {
        this.setState({ autores: [this.state.autores, ...res.data] })
      })
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
