var dateAdded = document.getElementById("time").innerHTML;
console.log(dateAdded);

var validationExpression = /[A-Z-a-z-0-9]{7}/;
var validationString = document.getElementsByClassName("job-position-box")[0].textContent;

document.querySelector(".date-p").textContent = dateAdded;