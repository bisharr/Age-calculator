'use strict';
const btnel = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateage(){
  const birthdayValue = birthdayEl.value;
  console.log(birthdayValue);
  if (birthdayValue === ""){
    alert ("Please enter your birthday")
  }else{
    const age = getAage(birthdayValue)
    resultEl.innerText = ` Your Age is ${age} ${age > 1 ? "years old" : "year old"} `
  }
}

function getAage(birthdayValue){
  const currentDate = new Date()
  const birthdayDate = new Date(birthdayValue)
let age = currentDate.getFullYear() - birthdayDate.getFullYear();
const month =  currentDate.getMonth() - birthdayDate.getMonth();

if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
  age--
}

return age;

}

btnel.addEventListener("click", calculateage)