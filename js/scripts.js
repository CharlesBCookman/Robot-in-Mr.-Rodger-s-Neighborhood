function feedRobot(number){
  numbersArray = []
  if (number < 0) {
    number = number * (-1);
  }
  for( i=0; i <= number; i++){
    numbersArray.push(i);
  }
  chew321(numbersArray);
}

function chew321(array){
  chewedArray = [];
  array.forEach(element => {
    if(element.toString.includes("3")){
      chewedArray.push("Won't you be my neighbor?");
    } else {
      chewedArray.push(element);
    }
  });
}


window.addEventListener("load", function(){
  const submitButton = document.querySelector("#submitbutton");
  const numberInput = this.document.querySelector("#inputnumber");
  window.addEventListener("submit", function(event){
    event.preventDefault();
    feedRobot(numberInput.value);
  })
})