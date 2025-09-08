// reuseable function
const removeActive = () => {
    const allButtons = document.querySelectorAll(".btn-cat");
    allButtons.forEach((btn) => btn.classList.remove("active"));
};

// Spinner 
const manageSpinner = (status) => {
  if (status == true) {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("plants-container").classList.add("hidden");
  } else {
    document.getElementById("plants-container").classList.remove("hidden");
    document.getElementById("spinner").classList.add("hidden");
  }
};

// Fixed active button
document.getElementById("btn-all-plant").classList.add("active");

document.getElementById("btn-all-plant").addEventListener("click", () => {
    removeActive();
    document.getElementById("btn-all-plant").classList.add("active");
    allCatPlant();
});

// Loading the categories
const loadCategories = () =>{
    fetch ("https://openapi.programming-hero.com/api/categories")
    .then ((res) => res.json())
    .then((json) => displayCategories(json.categories))
}

//Loading All plants
const allCatPlant = (id) => {
    // Spinner Added 
    manageSpinner(true);
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((json) => displayAllPlant(json.plants))
    
};

// Loading Plants based on categories
const loadCatPlant = (id) => {
    // Spinner added
     manageSpinner(true);
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
            <img src="${plant.image}" alt="" class="h-48 w-full object-cover rounded-lg mb-4 plant-img">
            
            <h2 id="${plant.id}" class="text-lg font-bold mb-2 plant-name">${plant.name}</h2>
            
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
    manageSpinner(false);
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
            <img src="${plant.image}" alt="" class="h-48 w-full object-cover rounded-lg mb-4 plant-img">

            <h2 id="${plant.id}" class="text-lg font-bold mb-2 plant-name">${plant.name}</h2>
            
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
    manageSpinner(false);
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


// Loading Plants details
const loadPlantDetail = async (id) => {
  const detailUrl = `https://openapi.programming-hero.com/api/plant/${id}`;
  
  console.log(detailUrl);
  
  const res = await fetch(detailUrl);
  const plantDetail = await res.json();

displayPlantDetails(plantDetail.plants); 

console.log(plantDetail);

};

   
const displayPlantDetails = (plantDetails) => {
    // console.log(plantDetails);

    const detailsBox = document.getElementById("details-container")
    detailsBox.innerHTML = `
        <div>
        <h1 class="font-bold text-lg mb-2">${plantDetails.name} </h1>
        <img src="${plantDetails.image}" alt="" srcset="" class="h-48 w-full object-cover rounded-lg mb-2">
        <p class="mb-2"><span class="font-bold">Category : </span>${plantDetails.category}</p>
        <p class="mb-2"><span class="font-bold">Price : </span><span>৳</span> ${plantDetails.price}</p>
        <p><span class="font-bold">Description :</span> <span>${plantDetails.description}</span> </p>
        </div>
    `
    document.getElementById("plant_modal").showModal();
    
}

// Modal show
document.getElementById("plants-container").addEventListener('click',function(e){
    if (e.target.classList.contains('plant-name')){
        const modalButton = e.target;
        console.log(modalButton);
        
        console.log("name clicked");

        loadPlantDetail(e.target.id)
    }
})
    


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

        
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].name === plantName) {
                cart[i].quantity++;
                foundItem = true;
                break;
            }
        }

        if (!foundItem) {
            cart.push({
                name: plantName, 
                price: plantPrice,
                quantity: 1
            });
        }
        
        
        fullCart();
        updateTotalPrice();
     }
})

function fullCart() {
    const cartContainer = document.getElementById("cart-items-container");
    cartContainer.innerHTML = ''; 

    
    for (let i = 0; i < cart.length; i++) {
      
        const item = cart[i]; 
    
        const newCartItem = document.createElement("div");

        newCartItem.innerHTML = `
            <div class="flex justify-between bg-[#f0fdf4] p-2 rounded-lg mb-2">

                <div>
                <h1 class="font-medium text-sm mb-2 md:mb-0 md:text-base">${item.name}</h1>
                <p class="text-sm md:text-base">$${item.price} <span> x </span><span id="quantity">${item.quantity}</span></p> 
                </div>

                <div>
                    <button class="remove-btn text-red-500 text-xl" data-name="${item.name}">×</button>
                </div>
        
            </div>
        `;

        const removeBtn = newCartItem.querySelector(".remove-btn");

        removeBtn.itemName = item.name;

        removeBtn.addEventListener("click", function() {
            decreaseQuantity(this.itemName);
        });

      
        cartContainer.appendChild(newCartItem);
    }
}

function decreaseQuantity(itemName) {
    let newCart = []; 

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === itemName) {
            cart[i].quantity--;
        }

        if (cart[i].quantity > 0) {
            newCart.push(cart[i]);
        }
    }

    cart = newCart;

    fullCart();
    updateTotalPrice();
}

function updateTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        totalPrice += item.price * item.quantity;
    }

    document.getElementById('total-price').children[0].innerText = totalPrice.toFixed(2);
}

loadCategories();
allCatPlant();

