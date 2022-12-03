



window.addEventListener('change', () => init())

function init(){
    const name = document.getElementById('name');
    const phonenumber = document.getElementById('phonenumber');
    ValidatiePhoneNumber(phonenumber);
    const address = document.getElementById('address');
    const email = document.getElementById('email');
    ValidateEmail(email);
}


function ValidateEmail(mail)
{
    const validationMailAdress= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (validationMailAdress.test(email))
    {
        console.log('test')
        mail.classList(validinput)
        return true;
    }
    alert("You have entered an invalid email address!")
    return false;
}

function ValidatiePhoneNumber(inputtxt)
{
    const validationNumber = /^\d{10}$/;
    if(inputtxt.value.match(validationNumber))
    {
        return true;
    }
    else
    {
        alert("You have entered an invalid number!");
        return false;
    }
}