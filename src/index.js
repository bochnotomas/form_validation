const form = document.getElementById('form');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zipcode = document.getElementById('zipcode');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const inputs = form.querySelectorAll('input');
const submit = form.querySelector('button');


inputs.forEach(el => {
    el.addEventListener('input', () => {
        checkInputs(el);
    })
})

function checkInputs(input){
    const inputValue = input.value.trim();
    

    if (input.type == "email"){
        if(inputValue === ''){
            setErrorFor(input, "This field cannot be blank.");
        }else if (!isEmail(inputValue)){
            setErrorFor(input, "This email is not valid");
        }else{
            setSuccesFor(input);
        }
    }

    if (input.type == "text" && input.id === "country"){
        if(inputValue === ''){
            setErrorFor(input, "This field cannot be blank.");
        }else{
            setSuccesFor(input);
        }
    }

    if (input.type == "text" && input.id === "zipcode"){
        if(inputValue === ''){
            setErrorFor(input, "This field cannot be blank.");
        }else{
            setSuccesFor(input);
        }
    }

    if (input.type == "password" && input.id === "password"){
        if(inputValue === ''){
            setErrorFor(input, "This field cannot be blank.");
        }else{
            setSuccesFor(input);
        }
    }

    if (input.type == "password" && input.id === "password2"){
        const matchValue = document.querySelector('#password').value;
        console.log(matchValue);

        if(inputValue === ''){
            setErrorFor(input, "This field cannot be blank.");
        }else if (input.value !== matchValue){
            setErrorFor(input, "Passwords does not match");
        }else{
            setSuccesFor(input);
        }
    }

}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector('small');

    formControl.className = 'form_control error';
    errorMessage.innerText = message;
    submit.disabled = true;
}

function setSuccesFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form_control success';
    submit.disabled = false;
}

function isEmail(emailValue) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailValue);
}


// function checkInputs(){
//     const emailValue = email.value.trim();
//     const countryValue = country.value.trim();
//     const zipcodeValue = zipcode.value.trim();
//     const passValue = password.value.trim();
//     const pass2Value = password2.value.trim();


//     if ( emailValue === ''){
//         setErrorFor(email, "This field cannot be blank.");
//     }else if(!isEmail(emailValue)){
//         setErrorFor(email, "Email is not valid");
//     }else {
//         setSuccesFor(email);
//     }
//     if ( countryValue === ''){
//         setErrorFor(country, "This field cannot be blank.");
//     }else{
//         setSuccesFor(country);
//     }
//     if ( zipcodeValue === ''){
//         setErrorFor(zipcode, "This field cannot be blank.");
//     }else{
//         setSuccesFor(zipcode);
//     }


//     if ( passValue === ''){
//         setErrorFor(password, "This field cannot be blank.");
//     }else{
//         setSuccesFor(password);
//     }

//     if ( pass2Value === ''){
//         setErrorFor(password2, "This field cannot be blank.");
//     }else if(passValue !== pass2Value){
//         setErrorFor(password2, "Passwords does not match.")
//     }
//     else{
//         setSuccesFor(password2);
//     }
// }






