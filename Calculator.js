inputDate = document.getElementById("birth")
outputDate = document.getElementById("result")
const now = new Date();


function calculate(){
  const birthdayValue = inputDate.value;
  const birth = new Date(birthdayValue);

  const age = now.getFullYear() - birth.getFullYear();

  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    if (age >= 0){
    outputDate.innerText = `Your age is ${age} old`;
    } else {
    alert("Please enter your correct birthday");
    }
  }
}
