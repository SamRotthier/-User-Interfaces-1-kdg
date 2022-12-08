//Starts the scripts on load
window.addEventListener('load', () => validations());

//validation scripts get called here and given the right elements
function validations(){
    const name = document.getElementById('name');
    name.addEventListener('blur',() => ValidateName(name));

    const email = document.getElementById('mail');
    email.addEventListener('input',() => ValidateEmail(email));
}

//validation of the name
function ValidateName(name)
{
    const validationName= /[ ]+[A-z]+|[A-z]+[ ]+/;
    const element = document.getElementById('errorname');
    if (name.value.trim().length === name.value.length)
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
    //const submit = document.getElementById('submit');
    //submit.preventDefault();
    return false;
    }
}

//validation of the email
function ValidateEmail(mail)
{
    const validationMailAdress= /^[A-z\-]+\.{1}[A-z\-]+[.{1}[A-z\-]*@(student.)*kdg.be/;
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
    //const submit = document.getElementById('submit');
    //submit.preventDefault();
    return false;
    }
}
