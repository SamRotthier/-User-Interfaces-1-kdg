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
    if (validationName.test(name.value))
    {
        name.classList.add('validinputname');
        return true;
    }
    name.classList.add('nonvalidinputname');
    const element = document.getElementById('errorname');
    element.innerHTML = "you have trailins spaces or an incomplete name";
    const submit = document.getElementById('submit');
    submit.preventDefault();
    return false;
}

//validation of the email
function ValidateEmail(mail)
{
    const validationMailAdress= /^[A-z\-]+\.{1}[A-z\-]+[.{1}[A-z\-]*@(student.)*kdg.be/;
    if (validationMailAdress.test(mail.value))
    {
        mail.classList.add('validinputmail');
        return true
    }
    mail.classList.add('nonvalidinputmail');
    const element = document.getElementById('errormail');
    element.innerHTML = "the given mail is not correct";
    const submit = document.getElementById('submit');
    submit.preventDefault();
    return false;
}

function validation (regex,element,errorText,elementById,cssTag ){
    if (regex.test(element.value))
    {
        element.classList.add(cssTag);
        return true
    }
    element.classList.add('nonvalidinputmail');
    const receivedElement = document.getElementById(elementById);
    receivedElement.innerHTML = errorText;
    formSubmit();
    return false;
}
