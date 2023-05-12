document.getElementById("year").innerHTML = new Date().getFullYear()
document.getElementById("lst-updt").innerHTML = "Last updated: "+document.lastModified

// select the DOM elements to manipulate (we will output to these)
const datefield = document.querySelector("time");
// for european/family history format with day first.


// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);



datefield.textContent = fulldate;
