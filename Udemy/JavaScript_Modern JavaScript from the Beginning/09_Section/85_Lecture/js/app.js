// create EL for input fields

document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zipcode').addEventListener('blur', validateZipCode);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName(){
    const name = document.getElementById('name');
    
    const re = /^[A-Za-z]{2,10}$/;
    if(!re.test(name.value)){
        // if invalid
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}

function validateZipCode(){
    const zipcode = document.getElementById('zipcode');
    
    const re = /^[0-9]{5}(-[0-9]{4})?$/;
    if(!re.test(zipcode.value)){
        // if invalid
        zipcode.classList.add('is-invalid');
    } else {
        zipcode.classList.remove('is-invalid');
    }
}

function validateEmail(){
    const email = document.getElementById('email');
    
    const re = /^([A-Za-z0-9_\-\.]+)@([A-Za-z0-9_\-\.]+)\.([A-Za-z]{2,5})$/;
    if(!re.test(email.value)){
        // if invalid
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
}

function validatePhone(){
    const phone = document.getElementById('phone');
    
    const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
    if(!re.test(phone.value)){
        // if invalid
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
    }
}