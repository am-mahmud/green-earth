# Green Earth

## Question and Answer 


#### 1) What is the difference between var, let, and const?

#### Answer:
The difference between var, let, and const are var can be use anywhere, let need to use in a scope on the other hand const set the fixed variable it can not be change.

#### 2) What is the difference between map(), forEach(), and filter()? 

#### Answer:t
The difference between map(), forEach(), and filter() are using map() a new array can be created where user can add new values. forEach() is used for loop through each items its upgrade version of normal for loop. At last filter() used for filtering items from the array based on some conditions.


#### 3) What are arrow functions in ES6?

#### Answer:
Arrow function is a short form of normal function where function can be write in faster way.

#### 4) How does destructuring assignment work in ES6?

#### Answer:
Destructuring is a way to easily unpack values from arrays or properties from objects into distinct variables.

#### 5) Explain template literals in ES6. How are they different from string concatenation?

#### Answer:
Template literals (``) are special strings written with backticks ( ), which allow you to directly embed variables or expressions using ${ }, making them much more convenient than traditional + string concatenation.


---
---
### APIS
---
🌴 API Endpoints
---
1. Get 🌴All Plants
```bash
https://openapi.programming-hero.com/api/plants
```

2. Get 🌴All categories <br/>
```bash
https://openapi.programming-hero.com/api/categories
```


3. Get 🌴plants by categories <br/>
```bash
https://openapi.programming-hero.com/api/category/${id}
```

```bash
https://openapi.programming-hero.com/api/category/1
```

4. Get 🌴Plants Detail <br/>

```bash
https://openapi.programming-hero.com/api/plant/${id}
```

```bash
https://openapi.programming-hero.com/api/plant/1
```
---

## ✅ Main Requirements 

#### 1) Navbar

- Website **logo/name** on the **left**  
- **Menu items** in the **center** 
- **Plant a Tree button** on the **right** 

#### 2) Banner 
- A **background image**  
- A **title** and **subtitle**  
- A **centered button**  

#### 3) About Campaign
- **Section heading**  
- **Image on the left**, **text on the right**  

#### 4) Our Impact Section 
- Show **3 cards** with campaign **statistics**  

#### 5) Plant a Tree Today Section & Footer
- **Form**: Name, Email, Number of Trees  
- **Footer** with copyright info 

#### 6) Responsiveness 
- Website must be **mobile responsive**  
---

## ⚙️ Functionalities 

1) Category Loading 
Load Tree Categories dynamically on the left side.

2) Category Click → Tree Data 
On clicking a category: load trees of that category.

Display in a 3-column card layout.

3) Card Contents 
 Each card includes:

        - Image

        -  Name

        - Short description

        - Category

        - Price

        - Add to Cart button

4) Modal on Card Click 
Clicking a tree name on a card opens a modal with full tree details.


##  🧪 Challenges 


    1) Add to Cart 
    Clicking Add to Cart: - Adds the tree to Cart List
                          - Shows tree name 

    2) Total Calculation 
    Calculate total price of trees in cart.

    3) Remove from Cart 
    Clicking ❌ removes tree and deducts price from total.

    4) Loading Spinner
    Show spinner while data is loading.

    5) Active Button State 
    Highlight active category button when selected.



🧰 Technology Stack:
        
        HTML

        CSS (Vanilla / Tailwind / DaisyUI)

        JavaScript (Vanilla only, no frameworks)


## 🔗 Links
- **Live Link :** https://am-mahmud.github.io/green-earth/
- **GitHub Repository:** https://github.com/am-mahmud/green-earth 

---