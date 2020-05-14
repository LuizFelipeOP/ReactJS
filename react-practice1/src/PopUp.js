import M from 'materialize-css';

const PopUp = {
    showMessage: (status, msg) => {
        if (status === "sucess") {
            M.toast({ html: msg, classes: 'green', displayLength: 3000 })
        } if (status === "error") {
            M.toast({ html: msg, classes: 'red', displayLength: 3000 })
        }

    }
}
export default PopUp;