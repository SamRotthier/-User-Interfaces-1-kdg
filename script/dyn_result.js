window.addEventListener("load", init);

function searchNameId(product) {
    for (let i = 0; i < Products.length; i++) {
            //console.log(j)
            if (Products[i].Name  === product) {
                return i;
        }
    }
}


function init() {
//gets the required query (url)
    const query = window.location.search;
//splits it into parameters
    const searchParams = new URLSearchParams(query);
    const product = searchParams.get("product");

    const nameId = searchNameId(product);


    CreateHtml(nameId);
    }


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
    linkElement.appendChild(link);


    const sizeElement = document.getElementById("sheet")
    const size = document.createElement("p")
    size.innerHTML = Products[nameId].Size;
    sizeElement.appendChild(size);

}

