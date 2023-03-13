const dishName = document.querySelector("#name");
const image = document.querySelector("#photo");
const instruction = document.querySelector("#strMealIns");
const addFavBtn = document.querySelector("#addToFav");
const category = document.querySelector("#steCategory");
const link = document.querySelector("#strYoutube");
const tags = document.querySelector("#strTags");
const myMeal = document.querySelector(".my-Meal");
const searchBtn = document.querySelector("#searchBtn");
const description = document.querySelector("#strCategoryDescription");
const area = document.querySelector("#strArea");
const mealHeader = document.querySelector("#myMealHeader");
const searchMeal = document.querySelector("#search");
const showOnHome = document.querySelector("#details-page");
// fetching the data from api
async function getMealByName(mealName = "") {
  const BASE_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const url = BASE_URL + mealName;
  const response = await fetch(url);
  const { meals } = await response.json();
  return meals ?? [];
}
// no data match
const addNoData = () => {
  let html = `<div class="my-meal center" id="details-page"> no data available
   </div>`;
  mealHeader.insertAdjacentHTML("afterend", html);
};
// take input by serch 
searchMeal.addEventListener("keyup", async function (e) {
  let inputValue = e.target.value.toUpperCase();
  const meals = await getMealByName(inputValue);
  meals.length === 0
    ? addNoData()
    : meals.forEach((meal) => {
        addHtmlPageToHome(meal);
      });
});
// function for adding html
var addHtmlPageToHome = function ({
  strMealThumb,
  strMeal,
  strTags,
  strCategoryDescription,
  strCategory,
  strArea,
  idMeal,
  strInstructions,
  strYoutube,
}) {
      const meal=JSON.stringify({
        strMealThumb,
        strMeal,
        strTags,
        strCategoryDescription,
        strCategory,
        strArea,
        idMeal,
        strInstructions,
        strYoutube,
      })
// this is for container box
  let container = document.createElement("div");
  container.setAttribute("id", "details-page");
  container.setAttribute("class", "my-meal center");

  // this is for left container
  let leftBox = document.createElement("div");
  leftBox.setAttribute("class", "left-box");

// this is for image of meal
  let left_img = document.createElement("img");
  left_img.setAttribute("src", `${strMealThumb}`);
  left_img.setAttribute("id", "img");

// this is for meal name
  let parag = document.createElement("p");
  parag.innerHTML = `${strMeal}`;
  parag.setAttribute("id", "name");
  
// this is for add fav-list by click on button
  let favBtn = document.createElement("button");
  favBtn.innerText = "Add To Favourite  Dish";
  favBtn.setAttribute("id", "addToFav");
  favBtn.setAttribute("type", "button");
  favBtn.setAttribute("value",meal);
  favBtn.addEventListener("click", addToFavList);

// this is for container
  let right_box = document.createElement("div");
  right_box.setAttribute("class", "right-box");
  right_box.setAttribute("title","Click Here To See Details of this meals");
  right_box.addEventListener("click",function(e){
    e.stopPropagation();
    window.location.href=`./detailed-list/detail.html?mealId=${idMeal}`;
  });

  // this is for tag
  let mealTag = document.createElement("p");
  mealTag.innerHTML = `Tag : ${strTags ? strTags:"Unavailable"}`;
  mealTag.setAttribute("id", "strTags");

  // this is for meal description
  let categDes = document.createElement("p");
  categDes.innerHTML = `Description: ${
    strCategoryDescription ? strCategoryDescription : "Unavailable"
  }`;
  categDes.setAttribute("id", "strCategoryDescription");

//  this is for category
  let categ = document.createElement("p");
  categ.innerHTML = `Category : ${strCategory}`;
  categ.setAttribute("id", "steCategory");

  // this is for location
  let areaMeal = document.createElement("p");
  areaMeal.innerHTML = `Popular Dish for: ${strArea}`;
  areaMeal.setAttribute("id", "strArea");
  mealHeader.insertAdjacentElement("afterend", container);


  // goToDetail_page.appendChild(container);
  // for left container
  container.appendChild(leftBox);
  leftBox.appendChild(left_img);
  leftBox.appendChild(parag);
  leftBox.appendChild(favBtn);

// for right container
  container.appendChild(right_box);
  right_box.appendChild(mealTag);
  right_box.appendChild(categ);
  right_box.appendChild(categDes);
  right_box.appendChild(areaMeal);

};
// add fav-list function
function addToFavList(event) {
  let id=JSON.parse(event.target.value).idMeal;
  localStorage.setItem(id, event.target.value);
  event.target.setAttribute("class","successBtnClick");
  event.target.innerText="Added";
}

