//Starts the scripts on load
window.addEventListener("load", init);

//Gets the id of the selected product (compares the name to the list and returns the value in the list)
function searchNameId(product) {
    for (let i = 0; i < Products.length; i++) {
        //console.log(j)
        if (Products[i].Name  === product) {
            return i;
        }
    }
}

//
function init() {
//gets the required query (url)
    const query = window.location.search;
//splits it into parameters
    const searchParams = new URLSearchParams(query);
//get the product parameter from the list
    const product = searchParams.get("product");
//Starts the search function for the id
    const nameId = searchNameId(product);
//Starts the creation function for the html
    CreateHtml(nameId);
}

//Creates the wanted elements for the product sheet
function CreateHtml(nameId){

    const descriptionElement = document.getElementById("sheet")
    const description = document.createElement("p")
    description.innerHTML = Products[nameId].Description;
    descriptionElement.appendChild(description);

    const pictureElement = document.getElementById("sheet")
    const picture = document.createElement("img")
    picture.setAttribute("src", Products[nameId].Image)
    pictureElement.appendChild(picture);

    const instructionsElement = document.getElementById("sheet")
    const instructions = document.createElement("p")
    instructions.innerHTML = Products[nameId].Instructions;
    instructionsElement.appendChild(instructions);

    const priceElement = document.getElementById("sheet")
    const price = document.createElement("p")
    price.innerHTML = Products[nameId].Price;
    priceElement.appendChild(price);

    const linkElement = document.getElementById("sheet")
    const link = document.createElement("a")
    link.setAttribute('href', Products[nameId].Link)
    link.innerHTML = Products[nameId].Link;
    linkElement.appendChild(link);

    const sizeElement = document.getElementById("sheet")
    const size = document.createElement("p")
    size.innerHTML = Products[nameId].Size;
    sizeElement.appendChild(size);

}

