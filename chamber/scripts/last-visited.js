const todaysDate = new Date();
const lastVisited = new Date(localStorage.getItem("last-visited"));

switch (lastVisited) {
    case null:
        localStorage.setItem("last-visited", todaysDate);
        break;
    default:
        const daysSinceLastVisit = Math.floor((todaysDate - lastVisited) / (1000*60*60*24));
        document.getElementById("last-visited").innerHTML = `You last visited ${daysSinceLastVisit} days ago`;
        localStorage.setItem("last-visited", todaysDate);
}