window.addEventListener("load", init);

function init() {
    const options = document.getElementById('product');
    options.innerHTML = " ";
    for (let i = 0; i < Products.length;i++){
        const groups = `<optgroup label="${Categories[i]}"></optgroup>`;
        options.innerHTML += groups;

        for (let j = 0; j < Products[i].length; j++){
            const products = `<option label="${Products[i][j].Name}"></option>`;
            options.innerHTML += products;
        }
    }
}
