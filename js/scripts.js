function feedRobot(number){
  numbersArray = []
  if (number < 0) {
    number = number * (-1);
  }
  for( i=0; i <= number; i++){
    numbersArray.push(i);
  }
  return chew321(numbersArray);
}

function chew321(array){
  chewedArray = [];
  array.forEach(element => {
    if(element.toString().includes("3")){
      chewedArray.push("Won't you be my neighbor?");
    } else if(element.toString().includes("2")) {
      chewedArray.push("Boop!");
    } else if(element.toString().includes("1")) {
      chewedArray.push("Beep!");
    } else {
      chewedArray.push(element);
    }
  });
  return chewedArray.join(", ")
}

window.addEventListener("load", function(e){
  console.log("load");
  const button = document.querySelector("button");
  const numberInput = document.querySelector("#inputnumber");
  const output = document.querySelector("#outputarea");
  e.preventDefault();
  button.addEventListener("click", function(event){
    console.log("submit");
    output.innerText = feedRobot(numberInput.value);
    event.preventDefault();
  })
})