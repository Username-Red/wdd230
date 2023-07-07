
document.querySelector(".last-modified").textContent = new Date(document.lastModified);

const d = new Date;
let year = d.getFullYear();

document.querySelector(".last-modified").textContent = `Last Modified: ${year}`;