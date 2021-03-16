const myList = document.querySelector("#myList");
const friendsList = document.querySelector(".friendsList")
const inputGroup = document.querySelector(".inputGroup");
const foodInput = document.querySelector("#foodInput");
const addBtn = document.querySelector("#addBtn");
const complForm = document.querySelector(".complForm");
const complBtn = document.querySelector("#complBtn");
const complArea = document.querySelector("#complArea");
const complSwitch = document.querySelector("#complSwitch");
let allFood = ["Pineapple", "Pear"]

window.onload = () => allFood.forEach(food => addFood(food));

const addFood = (food) => {    
    const newFood = document.createElement("li");
    newFood.append(food);
    myList.append(newFood);
}

const validateFood = (food) => {
    const allFoodBig = allFood.map(element => element.toUpperCase())
    if (allFoodBig.includes(food.toUpperCase())) return;
    const firstLetter = food[0];
    const fFood = food.replace(firstLetter, firstLetter.toUpperCase());
    allFood.push(fFood);
    addFood(fFood);
}

const clearInput = () => {
    if (!foodInput.value) {
        foodInput.placeholder = "Add your favorite food:";
        addBtn.hidden = true;
}}

inputGroup.addEventListener('submit', (e) => {
    e.preventDefault();
    const foodInput = document.querySelector("#foodInput");
    if (!foodInput.value) return null;
    validateFood(foodInput.value);
    foodInput.value = "";
    clearInput();
})

friendsList.addEventListener("click", (e) => {
    const fromFriends = e.target.innerText
    validateFood(fromFriends);
    const checked = e.target;
    checked.classList.add("checked");
    setTimeout(() => {
        checked.classList.remove("checked");
    } ,3000)
})

myList.addEventListener("click", (e) => {
    e.target.nodeName === "LI" && e.target.remove();
    const targetFood = allFood.indexOf(e.target.innerText);
    allFood.splice(targetFood, 1);
})

inputGroup.addEventListener('focusin', () => {
    foodInput.placeholder = "";
    addBtn.hidden = false;
})

inputGroup.addEventListener('focusout', () => clearInput())

complSwitch.addEventListener("click", () => {
    if (complArea.hidden) {
        complArea.hidden = false;
        complBtn.hidden = false;
    } else {
        complArea.hidden = true;
        complBtn.hidden = true;
    }
})

complForm.addEventListener("submit", (e) => {
    e.preventDefault();
    complArea.value = "";
    complArea.placeholder = "Write your complaint";
    alert("Your complaint succesfully delivered in hell");
})


