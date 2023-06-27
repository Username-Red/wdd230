
const url2 = "json/data.json";

async function getBusinessDataList() {
    const response = await fetch(url2);
    const data = await response.json();
    console.table(data);
    
   
    generateSpotlight(data);
    generateSpotlight(data);
    generateSpotlight3(data);
}

function generateSpotlight(businesses) {
    var randomNum = Math.floor(Math.random() * 9);
    var business = businesses[randomNum];
    const spotlightBox = document.querySelector('.company-spotlight-box');

    const spotlight = document.createElement('div');
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    const contactBox = document.createElement('div');
    const websiteNumber = document.createElement('p');
    const email = document.createElement('p');
    


    img.setAttribute('src', `images/icons/${business.image}`);
    img.setAttribute('class', 'icon');
    contactBox.setAttribute('class', 'spotlight-box');
    spotlight.setAttribute("class", "spotlight");

    h1.textContent = business.name;
    email.textContent = `${business.name}@gmail.com`;
    websiteNumber.textContent = `${business.phoneNumber} | ${business.website}`;
    contactBox.appendChild(email);
    contactBox.appendChild(websiteNumber);



    
    spotlight.appendChild(h1);
    spotlight.appendChild(img);
    spotlight.appendChild(contactBox);
    spotlightBox.appendChild(spotlight);

}

function generateSpotlight3(businesses) {
    var randomNum = Math.floor(Math.random() * 9);
    var business = businesses[randomNum];
    const spotlightBox = document.querySelector('.company-spotlight-box');

    const spotlight = document.createElement('div');
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    const contactBox = document.createElement('div');
    const websiteNumber = document.createElement('p');
    const email = document.createElement('p');
    


    img.setAttribute('src', `images/icons/${business.image}`);
    img.setAttribute('class', 'icon');
    contactBox.setAttribute('class', 'spotlight-box');
    spotlight.setAttribute("class", "third-spotlight");

    h1.textContent = business.name;
    email.textContent = `${business.name}@gmail.com`;
    websiteNumber.textContent = `${business.phoneNumber} | ${business.website}`;
    contactBox.appendChild(email);
    contactBox.appendChild(websiteNumber);



    
    spotlight.appendChild(h1);
    spotlight.appendChild(img);
    spotlight.appendChild(contactBox);
    spotlightBox.appendChild(spotlight);

}

getBusinessDataList();