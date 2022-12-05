//Starts the scripts on load
window.addEventListener('load', () => validations())

//validation scripts get called here and given the right elements
function validations(){
    const name = document.getElementById('name');
    name.addEventListener('blur',() => ValidateName(name))

    const email = document.getElementById('mail');
    email.addEventListener('change',() => ValidateEmail(email))
}

//validation of the name
function ValidateName(name)
{
    const validationName= /[ ]+[A-z]+|[A-z]+[ ]+/;
    if (validationName.test(name.value))
    {
        name.classList.toggle('validinputname')
        return true
    }
    name.classList.toggle('nonvalidinputname')
    const element = document.getElementById('errorname')
    element.innerHTML = "you have trailins spaces or an incomplete name";
    return false;
}

//validation of the email
function ValidateEmail(mail)
{
    const validationMailAdress= /^[A-z\-]+\.{1}[A-z\-]+[.{1}[A-z\-]*@(student.)*kdg.be/;
    if (validationMailAdress.test(mail.value))
    {
        mail.classList.toggle('validinputmail')
        return true
    }
    mail.classList.toggle('nonvalidinputmail')
    const element = document.getElementById('errormail')
    element.innerHTML = "the given mail is not correct";
    return false;
}




