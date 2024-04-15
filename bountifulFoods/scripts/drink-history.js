const drinksBox = document.querySelector('.drinks-box');
document.querySelector('.drinks-box').innerHTML = `<p>Drinks Made: ${localStorage.getItem("drink-count")}</p> <p>Your previous drink was: ${localStorage.getItem("order-string")}</p>`;

