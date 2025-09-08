// reuseable function
const removeActive = () => {
    const allButtons = document.querySelectorAll(".btn-cat");
    allButtons.forEach((btn) => btn.classList.remove("active"));
};

// Loading the categories
const loadCategories = () =>{
    fetch ("https://openapi.programming-hero.com/api/categories")
    .then ((res) => res.json())
    .then((json) => displayCategories(json.categories))
}

//Loading All plants
const allCatPlant = (id) => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((json) => displayAllPlant(json.plants))
    
};

// Loading Plants based on categories
const loadCatPlant = (id) => {
  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then((res) => res.json())
    .then((json) => displayCatPlant(json.plants))
    
};


// All plant display via API
const displayAllPlant = (allPlants) => {
    console.log(allPlants);
    const plantContainer = document.getElementById("plants-container");
    plantContainer.innerHTML = "";
    plantContainer.classList.add('grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-4');

    allPlants.forEach(plant => {
        const plantCard = document.createElement("div");
        plantCard.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-md', 'flex', 'flex-col');
        plantCard.innerHTML = `
            <img src="${plant.image}" alt="" class="h-48 w-full object-cover rounded-lg mb-4">
            
            <h2 class="text-lg font-bold mb-2">${plant.name}</h2>
            
            <p class="text-sm text-gray-600 mb-4">${plant.description}</p>
            
            <div class="flex items-center justify-between mt-auto">
                <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">${plant.category}</span>
                <p class="text-xl font-semibold text-gray-800">৳</span> ${plant.price}</p>
            </div>
            
            <button class="w-full mt-4 bg-green-700 text-white font-semibold py-2 rounded-lg hover:bg-green-800 btn-cart">
                Add to Cart
            </button>
        `;
        plantContainer.appendChild(plantCard);
    });
};


//Plant display based on category via API
const displayCatPlant = (plants) => {
    console.log(plants);
    const plantContainer = document.getElementById("plants-container");
    plantContainer.innerHTML = "";
    plantContainer.classList.add('grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-4'); 
    plants.forEach(plant => {
        const plantCard = document.createElement("div");
        plantCard.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-md', 'flex', 'flex-col'); 
        plantCard.innerHTML = `
            <img src="${plant.image}" alt="" class="h-48 w-full object-cover rounded-lg mb-4">
            
            <h2 class="text-lg font-bold mb-2">${plant.name}</h2>
            
            <p class="text-sm text-gray-600 mb-4">${plant.description}</p>
            
            <div class="flex items-center justify-between mt-auto">
                <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">${plant.category}</span>
                <p class="text-xl font-semibold text-gray-800"><span>৳</span> ${plant.price}</p>
            </div>
            
            <button
                class="w-full mt-4 bg-green-700 text-white font-semibold py-2 rounded-lg hover:bg-green-800 btn-cart"
                
            >
                Add to Cart
            </button>
        `;
        plantContainer.appendChild(plantCard);
    });
};

// All categories display via API
const displayCategories = (categories) => {
    // console.log(categories);

    const catContainer = document.getElementById("cat-container");
    catContainer.innerHTML = " ";

     for(let category of categories){
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <button id = "cat-btn-${category.category_name}" onclick="removeActive(); this.classList.add('active'); loadCatPlant('${category.id}')" class="py-1 btn-cat">
            ${category.category_name}
        </button>
        `;
        catContainer.appendChild(btnDiv);
    }
}

// Cart operation 

let cart = [];

document.getElementById("plants-container").addEventListener('click',function(e){
     if (e.target.classList.contains('btn-cart')){
        const addCartButton = e.target;
        console.log("button clicked");
        
         const plantCard = addCartButton.closest("div");

        const plantName = plantCard.querySelector("h2").innerText;
        const plantPrice = plantCard.querySelector("p.text-xl").innerText.replace("৳", "").trim();

        let quantity = 1;
        let foundItem = false;

        console.log(plantName);
        console.log(plantPrice);
        
        

     }
})




loadCategories();
allCatPlant();

document.getElementById("btn-all-plant").classList.add("active");

document.getElementById("btn-all-plant").addEventListener("click", () => {
    removeActive();
    document.getElementById("btn-all-plant").classList.add("active");
    allCatPlant();
});