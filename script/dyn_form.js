//Starts the scripts on load
window.addEventListener("load", init);
//this function fill look trough the catagories array and fill this in the list
//it will also loop in the products and where the id is equal (the same category) it will add it to the list
function init() {
    const options = document.getElementById('product');
    options.innerHTML = '';
    for (let i = 0; i < Categories.length;i++){
        const groups = `<optgroup label="${Categories[i].Category}"></optgroup>`;
        options.innerHTML += groups;

        for (let j = 0; j < Products.length; j++){
            if (Categories[i].Id ===Products[j].Id){
            const products = `<option label="${Products[j].Name}" value="${Products[j].Name}"></option>`;
            options.innerHTML += products;
            }
        }
    }

}
