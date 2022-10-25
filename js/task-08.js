const inputsFormEl = document.querySelector('.login-form');

inputsFormEl.addEventListener('submit', submitFormHander);

function submitFormHander(event){
    event.preventDefault();
    const {elements:{email , password}} = event.currentTarget;
    if (!email.value  || !password.value ){
        return alert('Заповніть всі поля!')
    }
    const userLogObj = {
        email: email.value,
        password: password.value,
    }
    console.log(userLogObj);

    event.currentTarget.reset();
}