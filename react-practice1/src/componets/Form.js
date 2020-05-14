import React, { Component } from 'react';
import FormValidator from './FormValidator';
import PopUp from './PopUp';

class Form extends Component {
    constructor(props) {
        super(props);

        this.validator = new FormValidator([
            {
                campo: 'nome',
                metodo: 'isEmpty',
                certifica: false,
                mensagem: 'Escreva um nome válido'
            },
            {
                campo: 'livro',
                metodo: 'isEmpty',
                certifica: false,
                mensagem: 'Escreva um livro válido'
            },
            {
                campo: 'preco',
                metodo: 'isInt',
                certifica: true,
                args: [{ min: 0, max: 9999 }],
                mensagem: 'Digite um preço válido'
            },
        ]);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',
            validacao: this.validator.validateAll(),
        }
        this.state = this.stateInicial;
    }
    inputListener = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

    }
    submitForm = () => {
        const validacao = this.validator.valida(this.state);

        if (validacao.isValid) {
            this.props.submitListener(this.state);
            this.setState(this.stateInicial);
        } else {
            const { nome, livro, preco } = validacao;
            const campos = [nome, livro, preco];

            const camposInvalidos = campos.filter(x => {
                return x.isInvalid;
            });
            camposInvalidos.forEach(campo => {
                PopUp.showMessage('error', campo.message);
            });
        }
    }
    render() {
        const { nome, livro, preco } = this.state;


        return (
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="nome">Nome</label>
                        <input className="validade" id="nome" type="text" name="nome" value={nome} onChange={this.inputListener} />
                    </div>

                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="livro">Livro</label>
                        <input className="validade" id="livro" type="text" name="livro" value={livro} onChange={this.inputListener} />
                    </div>

                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="preco">Preço</label>
                        <input className="validade" id="preco" type="text" name="preco" value={preco} onChange={this.inputListener} />
                    </div>
                </div>

                <button type="button" className='btn-floating btn-large waves-effect waves-light'
                    onClick={this.submitForm}><i className="material-icons">+</i></button>
            </form>
        )
    }
}
export default Form;