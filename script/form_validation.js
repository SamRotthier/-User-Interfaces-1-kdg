window.addEventListener('load', () => validations())


function validations(){
    const name = document.getElementById('name');
    name.addEventListener('blur',() => ValidateName(name))

    const email = document.getElementById('mail');
    email.addEventListener('change',() => ValidateEmail(email))
}

function ValidateName(name)
{
    const validationName= /[ ]+[A-z]+|[A-z]+[ ]+/;
    if (validationName.test(name.value))
    {
        name.classList.toggle('validinputname')
        return true
    }
    name.classList.toggle('nonvalidinputname')
    //alert("You have entered an invalid email address!")
    return false;
}

function ValidateEmail(mail)
{
    const validationMailAdress= /^[A-z\-]+\.{1}[A-z\-]+[.{1}[A-z\-]*@(student.)*kdg.be/;
    if (validationMailAdress.test(mail.value))
    {
        console.log("yay")
        mail.classList.toggle('validinputmail')
        return true
    }
    mail.classList.toggle('nonvalidinputmail')
    //alert("You have entered an invalid email address!")
    return false;
}



