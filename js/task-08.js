const inputsFormEl = document.querySelector('.login-form');

inputsFormEl.addEventListener('submit', submitFormHander);

function submitFormHander(event){
    event.preventDefault();
    const {elements:{email , password}} = event.currentTarget;
    password.setAttribute("autocomplete", "current-password");
    if (email.value  || password.value ){
        return alert('Заповніть всі поля!')
    }
    console.log(`email: ${email.value}, Password: ${password.value}`);

    event.currentTarget.reset();
}