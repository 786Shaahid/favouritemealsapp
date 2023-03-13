const header = document.querySelector("#header");

let key = location.search.split("=")[1];
// fetch data from api
async function fetchDataById(id) {
  let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  let response = await fetch(url);
  let { meals } = await response.json();
  return meals[0];
}

async function showPage() {
  let meal = await fetchDataById(key);
  mealDetails(meal);
}

// to show details of meals
function mealDetails({
  strInstructions,
  strMealThumb,
  strMeal,
  strTags,
  strCategory,
  idMeal,
  strArea,
  strIngredient1,
  strIngredient2,
  strIngredient3,
  strIngredient4,
  strIngredient5,
  strIngredient6,
  strIngredient7,
  strIngredient8,
  strIngredient9,
  strYoutube,
  strMeasure1,
  strMeasure2,
  strMeasure3,
  strMeasure4,
  strMeasure5,
  strMeasure6,
  strMeasure7,
  strMeasure8,
  strMeasure9,
}) {
  const meal =JSON.stringify ({
    strMealThumb,
    strMeal,
    strTags,
    strCategory,
    strArea,
    idMeal,
    strInstructions,
    strYoutube,
  });
  let container = document.createElement("div");
  container.setAttribute("id", "container");

  let image = document.createElement("img");
  image.setAttribute("id", "img-box");
  image.setAttribute("src", `${strMealThumb}`);

  let details_box = document.createElement("div");
  details_box.setAttribute("id", "meal-details");

  let mealName = document.createElement("p");
  mealName.innerText = ` name        : ${strMeal}`;
  mealName.setAttribute("class", "para");

  let mealcate = document.createElement("p");
  mealcate.innerText = ` Category       : ${
    strCategory ? strCategory : "Unavailable"
  }`;
  mealcate.setAttribute("class", "para");

  let mealInstruction = document.createElement("p");
  mealInstruction.innerText = ` Instruction      : ${
    strInstructions ? strInstructions : "Unavailable"
  }`;
  mealInstruction.setAttribute("class", "para");

  let mealTags = document.createElement("p");
  mealTags.innerText = ` Tags       : ${strTags ? strTags : "Unavailable"}`;
  mealTags.setAttribute("class", "para");

  let mealIngried1 = document.createElement("p");
  mealIngried1.innerText = ` Ingredient-1      : ${
    strIngredient1 ? strIngredient1 : "Unavailable"
  }`;
  mealIngried1.setAttribute("class", "para");

  let mealIngried2 = document.createElement("p");
  mealIngried2.innerText = ` Ingredient-2      : ${
    strIngredient2 ? strIngredient2 : "Unavailable"
  }`;
  mealIngried2.setAttribute("class", "para");

  let mealIngried3 = document.createElement("p");
  mealIngried3.innerText = `Ingredient-3      : ${
    strIngredient3 ? strIngredient3 : "Unavailable"
  }`;
  mealIngried3.setAttribute("class", "para");

  let mealIngried4 = document.createElement("p");
  mealIngried4.innerText = ` Ingredient-4      : ${
    strIngredient4 ? strIngredient4 : "Unavailable"
  }`;
  mealIngried4.setAttribute("class", "para");

  let mealIngried5 = document.createElement("p");
  mealIngried5.innerText = ` Ingredient-5       : ${
    strIngredient5 ? strIngredient5 : "Unavailable"
  }`;
  mealIngried5.setAttribute("class", "para");

  let mealIngried6 = document.createElement("p");
  mealIngried6.innerText = ` Ingredient-6       : ${
    strIngredient6 ? strIngredient6 : "Unavailable"
  }`;
  mealIngried6.setAttribute("class", "para");

  let mealIngried7 = document.createElement("p");
  mealIngried7.innerText = ` Ingredient-7       : ${
    strIngredient7 ? strIngredient7 : "Unavailable"
  }`;
  mealIngried7.setAttribute("class", "para");

  let mealIngried8 = document.createElement("p");
  mealIngried8.innerText = ` Ingredient-8       : ${
    strIngredient8 ? strIngredient8 : "Unavailable"
  }`;
  mealIngried8.setAttribute("class", "para");

  let mealIngried9 = document.createElement("p");
  mealIngried9.innerText = ` Ingredient-9      : ${
    strIngredient9 ? strIngredient9 : "Unavailable"
  }`;
  mealIngried9.setAttribute("class", "para");

  // for measurement
  let measurement1 = document.createElement("p");
  measurement1.innerText = ` Measurement-1       : ${
    strMeasure1 ? strMeasure1 : "Unavilable"
  }`;
  measurement1.setAttribute("class", "para");

  let measurement2 = document.createElement("p");
  measurement2.innerText = ` Measurement-2      : ${
    strMeasure2 ? strMeasure2 : "Unavilable"
  }`;
  measurement2.setAttribute("class", "para");

  let measurement3 = document.createElement("p");
  measurement3.innerText = ` Measurement-3      : ${
    strMeasure3 ? strMeasure3 : "Unavilable"
  }`;
  measurement3.setAttribute("class", "para");

  let measurement4 = document.createElement("p");
  measurement4.innerText = ` Measurement-4      : ${
    strMeasure4 ? strMeasure4 : "Unavilable"
  }`;
  measurement4.setAttribute("class", "para");

  let measurement5 = document.createElement("p");
  measurement5.innerText = ` Measurement-5       : ${
    strMeasure5 ? strMeasure5 : "Unavilable"
  }`;
  measurement5.setAttribute("class", "para");

  let measurement6 = document.createElement("p");
  measurement6.innerText = ` Measurement-6      : ${
    strMeasure6 ? strMeasure6 : "Unavilable"
  }`;
  measurement6.setAttribute("class", "para");

  let measurement7 = document.createElement("p");
  measurement7.innerText = ` Measurement-7      : ${
    strMeasure7 ? strMeasure7 : "Unavilable"
  }`;
  measurement7.setAttribute("class", "para");

  let measurement8 = document.createElement("p");
  measurement8.innerText = ` Measurement-8      : ${
    strMeasure8 ? strMeasure8 : "Unavilable"
  }`;
  measurement8.setAttribute("class", "para");

  let measurement9 = document.createElement("p");
  measurement9.innerText = ` Measurement-9     : ${
    strMeasure9 ? strMeasure9 : "Unavilable"
  }`;
  measurement9.setAttribute("class", "para");

  let add_favBtn = document.createElement("button");
  add_favBtn.innerText = "ADD TO FAVOURITE";
  add_favBtn.setAttribute("type", "button");
  add_favBtn.setAttribute("class", "btn");
  add_favBtn.setAttribute("style", "cursor:pointer");
  add_favBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log(meal);
    localStorage.setItem(idMeal,meal);
    e.target.setAttribute("class", " onClick btn");
    e.target.innerText = "Added To Favourite";
  });

  let searchNewFav = document.createElement("button");
  searchNewFav.innerHTML = `SEARCH NEW FAVOURITE` ;
  searchNewFav.setAttribute("type", "button");
  searchNewFav.setAttribute("class", "btn remove-underline go-to-home-btn");
  searchNewFav.setAttribute("id", "goToFav");
  searchNewFav.setAttribute("style", "cursor:pointer");
  searchNewFav.addEventListener("click",(e)=>{
    e.target.setAttribute("class","go-to-home-btn btn");
    e.target.innerText="SEARCH NEW FAVOURITE";
    window.location.href="../index.html";
  })

  // connect to containers
    header.insertAdjacentElement("afterend", container);
  container.appendChild(image);
  container.appendChild(details_box);
  details_box.appendChild(mealName);
  details_box.appendChild(mealcate);
  details_box.appendChild(mealInstruction);
  details_box.appendChild(mealTags);
  details_box.appendChild(mealIngried1);
  details_box.appendChild(mealIngried2);
  details_box.appendChild(mealIngried3);
  details_box.appendChild(mealIngried4);
  details_box.appendChild(mealIngried5);
  details_box.appendChild(mealIngried6);
  details_box.appendChild(mealIngried7);

  details_box.appendChild(mealIngried8);
  details_box.appendChild(mealIngried9);
  details_box.appendChild(measurement1);
  details_box.appendChild(measurement2);
  details_box.appendChild(measurement3);
  details_box.appendChild(measurement4);
  details_box.appendChild(measurement5);
  details_box.appendChild(measurement6);
  details_box.appendChild(measurement7);
  details_box.appendChild(measurement8);
  details_box.appendChild(measurement9);
  details_box.appendChild(add_favBtn);
  details_box.appendChild(searchNewFav);
}
showPage();
