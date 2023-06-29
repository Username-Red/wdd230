const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        
        displayNames(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}

function displayNames(data) {

    // var name = document.createElement('p');
    // var main = document.querySelector('.home-main');

    // name.textContent = data[0].name;
    // main.appendChild(name);

    for(var i = 0; i < 39; i++) {
        var name = document.createElement('p');
        var main = document.querySelector('.home-main');

        name.textContent = data[i].name;
        main.appendChild(name);
        


    }
}

apiFetch();