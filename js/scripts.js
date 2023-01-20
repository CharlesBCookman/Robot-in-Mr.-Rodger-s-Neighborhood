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
  return chewedArray
}


window.addEventListener("load", function(){
  const submitButton = document.querySelector("#submitbutton");
  const numberInput = this.document.querySelector("#inputnumber");
  window.addEventListener("submit", function(event){
    event.preventDefault();
    feedRobot(numberInput.value);
  })
})