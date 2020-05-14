import validator from 'validator';

class FormValidator {

    constructor(validator) {
        this.validator = validator;
    }
    valida(state) {
        let validacao = this.validateAll();
        //valida os dados que foram mandados pelo usuario.
        this.validator.forEach(regra => {
            const campoValor = state[regra.campo.toString()];
            const args = regra.args || [];
            const metodo = typeof regra.metodo === 'string' ?
                validator[regra.metodo] : regra.metodo;
            //depois de todas as checagens ele valida se as regras estão sendo respeitadas
            if (metodo(campoValor, ...args, state) !== regra.certifica) {
                validacao[regra.campo] = {
                    isInvalid: true,
                    message: regra.mensagem
                }
                validacao.isValid = false;
            }
        });
        return validacao;

    }
    validateAll() {
        const validate = {};
        //Popula o objeto acima com os campos inputados, atribui isInvalid false para todos
        this.validator.map(regra => (
            validate[regra.campo] = { isInvalid: false, mensagem: '' }
        ))
        return { isValid: true, ...validate }
    }
}

export default FormValidator;