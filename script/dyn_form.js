window.addEventListener("load", init);

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
