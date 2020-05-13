import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',
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
        console.log(this.state)
        this.props.submitListener(this.state);
        this.setState(this.stateInicial);
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