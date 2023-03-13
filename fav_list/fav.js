const headerBox = document.querySelector("#container");
const image = document.querySelector("#img-box");
const mealName = document.querySelector("#meal-name");
const removeBtn = document.querySelector("#removeBtn");
const cate = document.querySelector("#steCategory");
const instruc = document.querySelector("#strMealIns");
const link = document.querySelector("#strYoutube");
const box = document.querySelector("#details-page");
const cateDes = document.querySelector("#strCategoryDescription");
// get data from local-storage
for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  let keyValue = localStorage.getItem(key);
  let mealData = JSON.parse(keyValue);
  addFavourite(mealData);
}
// fav-list page
function addFavourite(mealData) {
  // create container box
  let fav_box = document.createElement("div");
  fav_box.setAttribute("class", "fav-box center");
  fav_box.setAttribute("id", "details-page");
  // for left container
  let leftBox = document.createElement("div");
  leftBox.setAttribute("class", "left-box");
  // for image
  let img_box = document.createElement("img");
  img_box.setAttribute("src", `${mealData.strMealThumb}`);
  img_box.setAttribute("id", "img-box");
  //  for meal name
  let meal_name = document.createElement("p");
  meal_name.innerText = `${mealData.strMeal}`;
  meal_name.setAttribute("id", "meal-name");
  // remove from  fav-list
  let remove_Btn = document.createElement("button");
  remove_Btn.innerText = "Remove from Favourite  Dish ";
  remove_Btn.setAttribute("type", "button");
  remove_Btn.setAttribute("value", `${mealData.idMeal}`);
  remove_Btn.setAttribute("id", "removeBtn");
  remove_Btn.addEventListener("click", removeList);
  // for right box
  let right_box = document.createElement("div");
  right_box.setAttribute("class", "right-box");
  right_box.setAttribute("title","Click This Box To See Details");
  right_box.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("kfkkf",e.target);
    window.location.href=`../detailed-list/detail.html?mealId=${mealData.idMeal}`;
    // window.location.href=`/`;

  });
  // for category
  let category = document.createElement("p");
  category.innerText = `Category :${
    mealData.strCategory ? mealData.strCategory : "Unavailable"
  }`;
  category.setAttribute("id", "steCategory");
  // meal instruction 
  let meal_ins = document.createElement("p");
  meal_ins.innerText = `instruction :${
    mealData.strInstructions ? mealData.strInstructions : "Unavailable"
  }`;
  
  meal_ins.setAttribute("id", "strMealIns");
// youtube link
  let meal_youtube = document.createElement("p");
  meal_youtube.innerHTML = `<a href="${mealData.strYoutube}"  class="no-underline-link">Go for Vedio</a>`;
  meal_youtube.setAttribute("id", "strYoutube");
// for description
  let cateDes = document.createElement("p");
  cateDes.innerHTML = `Description :${
    mealData.strCategoryDescription
      ? mealData.strCategoryDescription
      : "Unavailable"
  }`;
  cateDes.setAttribute("id", "strCategoryDescription");
  // for container
  headerBox.insertAdjacentElement("afterend", fav_box);
  // goToDetail_page.appendChild(fav_box);
  // for left-box
  fav_box.appendChild(leftBox);
  leftBox.appendChild(img_box);
  leftBox.appendChild(meal_name);
  leftBox.appendChild(remove_Btn);
  // for right  container
  fav_box.appendChild(right_box);
  right_box.appendChild(category);
  right_box.appendChild(meal_ins);
  right_box.appendChild(meal_youtube);
  right_box.appendChild(cateDes);
}
// remove list form localStorage and fav-list page
function removeList(e) {
  localStorage.removeItem(e.target.value);
  this.parentElement.parentElement.remove();
}
