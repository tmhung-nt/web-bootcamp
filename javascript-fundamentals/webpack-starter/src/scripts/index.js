// window.foo = 'foo';

import $ from 'jquery';



let apiEndpoint = "http://5bd40c84be3a0b0013d034e1.mockapi.io/users";

let form = document.getElementById("user-form");

form.addEventListener('submit', event => {
    // prevent the browser from submitting form
    let user = form.elements['user'];
    let avatarFile = form.elements['avatar-file'];

    let userError = document.getElementById("user-error");

    if (user.value.length < 4){
        userError.textContent = 'Invalide entry';
        userError.style.color = 'red';
        user.style.borderColor = 'red';
        user.focus();
    }

    let posting = {
        name: user.value,
        avatar: avatarFile.value
    };

    let promise = $.post(apiEndpoint, posting);
    promise.then(
        data => console.log(data),
        error => console.log(error)        
    );
    event.preventDefault();
});