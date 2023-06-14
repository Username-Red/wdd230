const url = "json/data.json"

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);


    displayBusinessesCard(data);
    
}

async function getBusinessDataList() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);


    displayBusinessesList(data);
    
}

getBusinessData();

const displayBusinessesCard = (businesses) => {
    const cards = document.querySelector('.main-box');
    cards.innerHTML = "";
    toggleCards();
    businesses.forEach((business) => {
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let website = document.createElement('a');
        let location = document.createElement('p');
        let cellNum = document.createElement('p');

        location.textContent = `${business.address}`
        cellNum.textContent = `${business.phoneNumber}`

        website.textContent = `Go to the ${business.name} website`
        website.setAttribute('href', business.website);

        logo.setAttribute('src', business.image);
        logo.setAttribute('alt', `Logo of ${business.name}`);
        logo.setAttribute('loading', 'lazy');
        

        //image, location, number, webpage
        card.appendChild(logo);
        card.appendChild(location);
        card.appendChild(cellNum);
        card.appendChild(website);

        cards.appendChild(card);
    });
}

const displayBusinessesList = (businesses) => {
    const list = document.querySelector('.main-box');
    list.innerHTML = "";
    toggleList();
    businesses.forEach(business => {
        let table = document.createElement('table');

        let infoRow = document.createElement('tr');
        

        let name = document.createElement('th');
        let website = document.createElement('td');
        let webLink = document.createElement('a');
        let location = document.createElement('td');
        let cellNum = document.createElement('td'); 

        location.textContent = `${business.address}`
        name.textContent = `${business.name}`;
        cellNum.textContent = `${business.phoneNumber}`

       
        webLink.textContent = `${business.website}`
        webLink.setAttribute('href', business.website);
        webLink.setAttribute('target', 'blank')
        website.appendChild(webLink)

        infoRow.appendChild(name);
        infoRow.appendChild(location);
        infoRow.appendChild(cellNum);
        infoRow.appendChild(website);
        

        table.appendChild(infoRow);
        

        list.appendChild(table)
    })

}


function toggleList() {
    const classname = document.querySelector('.main-box');
    
    
    classname.classList.remove("card")
    
    
    
    document.getElementsByClassName("main-box")[0].classList.toggle("list");
}

function toggleCards() {
    const classname = document.querySelector('.main-box');
    
    
    classname.classList.remove("list")
   

    document.getElementsByClassName("main-box")[0].classList.toggle("card");
}
