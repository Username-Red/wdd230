const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        // populateOptions(data);
        displayNames(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}

function displayNames(data) {

    var ingredients = document.querySelectorAll('.ingredient')

    ingredients.forEach(ingredientInput => {
        for(var i = 0; i < 39; i++) {
            var option = document.createElement('option');
            
            option.textContent = data[i].name;
            option.setAttribute('value', data[i].name);
            ingredientInput.appendChild(option);
            
        }
    });

    
}

// function populateOptions(data) {
//     var ingredient1 = document.querySelector(".ingredent1");
//     var option = document.createElement('option');

//     option.innerHTML = data[1].name
//     ingredient1.appendChild(option);
// }

apiFetch();