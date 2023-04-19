
document.querySelector(".date-last-modified").textContent = new Date(document.lastModified);

const d = new Date;
let year = d.getFullYear();

document.querySelector(".year").textContent = year;