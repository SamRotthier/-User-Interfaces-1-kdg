//Starts the scripts on load

window.addEventListener('load', validations);



//validation scripts get called here and given the right elements
function validations(){
    const name = document.getElementById('name');
    name.addEventListener('blur', ValidateName);

    const email = document.getElementById('mail');
    email.addEventListener('input', ValidateEmail);

    const form = document.querySelector("form")
    form.addEventListener("submit", formValidation)
}


//validation of the name
function ValidateName()
{
    let name = document.getElementById('name');
    const element = document.getElementById('errorname');
    if (name.value.trim().length === name.value.length && name.value.length !== 0)
    {
        name.classList.remove('nonvalidinputname');
        name.classList.add('validinputname');
        element.innerHTML = "";
        return true;
    }
    else{
    name.classList.remove('validinputname');
    name.classList.add('nonvalidinputname');
    element.innerHTML = "you have trailins spaces or an incomplete name";
    return false;
    }
}

//validation of the email
function ValidateEmail()
{
    const validationMailAdress= /^[A-z\-]+\.{1}[A-z\-]+[.{1}[A-z\-]*@(student.)*kdg.be/;
    let mail = document.getElementById('mail');
    const element = document.getElementById('errormail');
    if (validationMailAdress.test(mail.value))
    {
        mail.classList.remove('nonvalidinputmail');
        mail.classList.add('validinputmail');
        element.innerHTML = "";
        return true
    }
    else{
    mail.classList.remove('validinputmail');
    mail.classList.add('nonvalidinputmail');
    element.innerHTML = "the given mail is not correct";
    return false;
    }
}

function formValidation(event){
    const errorsubmit = document.getElementById('errorsubmit');

    if (!ValidateName() || !ValidateEmail()) {
        errorsubmit.innerHTML = "Not all fields are filled in (correctly)";
        event.preventDefault();
    }
}