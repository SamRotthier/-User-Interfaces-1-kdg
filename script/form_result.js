//gets the required query (url)
const query = window.location.search;
//splits it into parameters
const searchParams = new URLSearchParams(query);
//method to fill in the required data
function ConfirmationInfo(label){
    const param = searchParams.get(label);
    const element = document.getElementById(label);
    if (element !== null) {
        element.innerHTML = param;
    }
}

//fills in the data
ConfirmationInfo("name");
ConfirmationInfo("phonenumber");
ConfirmationInfo("mail");
ConfirmationInfo("address");
ConfirmationInfo("product");
ConfirmationInfo("request");


