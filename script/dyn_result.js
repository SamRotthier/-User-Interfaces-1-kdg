window.addEventListener("load", init);

function init() {
//gets the required query (url)
    const query = window.location.search;
//splits it into parameters
    const searchParams = new URLSearchParams(query);
    const name = searchParams.get("name");

    CreateHtml(searchId(name));





    }




function searchId(name){
    for (let i = 0; i < Products.length; i++){
        for (let j = 0; j < Products[i].length; j++){
            if (Products[i][j] === name){
                return j;
            }
        }
    }


}

function CreateHtml(id){
    //createHTML();

   // const nameElement = document.getElementById("sheet")
    // const name = document.createElement("p")
   // name.innerHTML = "Test"
   // nameElement.appendChild(name);

    const descriptionElement = document.getElementById("sheet")
    const description = document.createElement("p")
    description.innerHTML = Products[id].Description;
    descriptionElement.appendChild(description);


    const pictureElement = document.getElementById("sheet")
    const picture = document.createElement("img")
    picture.setAttribute("src", Products[id].Image)
    pictureElement.appendChild(picture);


    const instructionsElement = document.getElementById("sheet")
    const instructions = document.createElement("p")
    instructions.innerHTML = Products[id].Instructions;
    instructionsElement.appendChild(instructions);


    const priceElement = document.getElementById("sheet")
    const price = document.createElement("p")
    price.innerHTML = Products[id].Price;
    priceElement.appendChild(price);


    const linkElement = document.getElementById("sheet")
    const link = document.createElement("p")
    link.innerHTML = Products[id].Link;
    linkElement.appendChild(link);


    const sizeElement = document.getElementById("sheet")
    const size = document.createElement("p")
    size.innerHTML = Products[id].Size;
    sizeElement.appendChild(size);

}

