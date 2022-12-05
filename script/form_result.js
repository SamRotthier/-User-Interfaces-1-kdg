//gets the required query (url)
const query = window.location.search;
//splits it into parameters
const searchParams = new URLSearchParams(query);
//fills in the name
const paramValueName = searchParams.get("name");
const element = document.getElementById('name')
console.log(paramValueName)
if (paramValueName !== null){
    element.innerHTML = paramValueName;
}
//fills in the number
const paramValueNumber = searchParams.get("number");
const element2 = document.getElementById('number')
if (element2 !== null) {
    element2.innerHTML = paramValueNumber;
}
//fills in the email
const paramValueMail = searchParams.get("mail");
const element3 = document.getElementById('mail')
if (element3 !== null) {
    element3.innerHTML = paramValueMail;
}
//fills in the adress
const paramValueAddress = searchParams.get("address");
const element4 = document.getElementById('address')
if (element4 !== null) {
    element4.innerHTML = paramValueAddress;
}
//fills in the product
const paramValueProduct = searchParams.get("product");
const element5 = document.getElementById('product')
if (element5 !== null) {
    element5.innerHTML = paramValueProduct;
}
//fills in the extra requests
const paramValueExtra = searchParams.get("request");
const element6 = document.getElementById('extra')
if (element6 !== null) {
    element6.innerHTML = paramValueExtra;
}
