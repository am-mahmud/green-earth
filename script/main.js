const loadCategories = () =>{
    fetch ("https://openapi.programming-hero.com/api/categories")
    .then ((res) => res.json())
    .then((json) => displayCategories(json.categories))
}


const displayCategories = (categories) => {
    console.log(categories);

    const catContainer = document.getElementById("cat-container");
    catContainer.innerHTML = " ";

     for(let category of categories){
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <button id = "cat-btn-${category.category_name}" onclick="loadCatPlant(${category.level_no})" class="py-1">
            ${category.category_name}
        </button>
        `;
        catContainer.appendChild(btnDiv);
    }
}

loadCategories();