//window.addEventListener('load', () => init())

const query = window.location.search;

const searchParams = new URLSearchParams(query);

const paramValueName = searchParams.get("name");
let element = document.getElementById('name')
console.log(paramValueName)
if (paramValueName !== null){
    element.innerHTML = paramValueName;
}
const paramValueNumber = searchParams.get("number");
let element2 = document.getElementById('number')
if (element2 !== null) {
    element2.innerHTML = paramValueNumber;
}
const paramValueMail = searchParams.get("mail");
let element3 = document.getElementById('mail')
if (element3 !== null) {
    element3.innerHTML = paramValueMail;
}
const paramValueAddress = searchParams.get("address");
let element4 = document.getElementById('address')
if (element4 !== null) {
    element4.innerHTML = paramValueAddress;
}
const paramValueProduct = searchParams.get("product");
let element5 = document.getElementById('product')
if (element5 !== null) {
    element5.innerHTML = paramValueProduct;
}
const paramValueExtra = searchParams.get("request");
let element6 = document.getElementById('extra')
if (element6 !== null) {
    element6.innerHTML = paramValueExtra;
}
