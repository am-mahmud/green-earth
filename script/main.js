// Useable function
const removeActive = () =>{
    const lessonButtons = document.querySelectorAll(".btn-cat")
    lessonButtons.forEach((btn) => btn.classList.remove("active"))
}


// Loading the categories
const loadCategories = () =>{
    fetch ("https://openapi.programming-hero.com/api/categories")
    .then ((res) => res.json())
    .then((json) => displayCategories(json.categories))
}

// All categories display via API
const displayCategories = (categories) => {
    console.log(categories);

    const catContainer = document.getElementById("cat-container");
    catContainer.innerHTML = " ";

     for(let category of categories){
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <button id = "cat-btn-${category.category_name}" onclick="loadCatPlant(${category.level_no})" class="py-1 btn-cat">
            ${category.category_name}
        </button>
        `;
        catContainer.appendChild(btnDiv);
    }
}

// Loading Plants based on categories
const loadCatPlant = (id) =>{
    const catsUrl = `https://openapi.programming-hero.com/api/category/${id}`;

    fetch(catsUrl)
    .then((res) => res.json())
    .then((catPlant) => {

        removeActive()
        const clickBtn = document.getElementById(`cat-btn-${id}`)
        clickBtn.classList.add("active");

        displayLevelWord(catPlant.categories);

    })    
    
}

//All plant display via API
const displayCatPlant = (words) => {

    const wordContainer = document.getElementById("plants-container")
    wordContainer.innerHTML = "";

    plants.forEach(plant => {
        
       const plantCard = document.createElement("div")
       plantCard.innerHTML = `
          
       `

       wordContainer.appendChild(wordCard)
    });

}

loadCategories();