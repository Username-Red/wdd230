document.getElementById("year").innerHTML = new Date().getFullYear()
document.getElementById("lst-updt").innerHTML = "Last updated: "+document.lastModified

// select the DOM elements to manipulate (we will output to these)
const datefield = document.querySelector("time");


// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);



datefield.textContent = fulldate;

const current = new Date();
const day1 = current.getDay();
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const day = dayNames[day1]

if (day == "Monday" || day == "Tuesday") {
	const datefield = document.querySelector("time");
	datefield.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m";
}

