function completeDrink() {

    const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";

    async function apiFetch() {
        try {
          const response = await fetch(url);
          if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            // populateOptions(data);
            totalAmount(data);
          } else {
              throw Error(await response.text());
          }
        } catch (error) {
            console.log(error);
        }
    }


    function totalAmount(data) {
        var ingredients = document.querySelectorAll(".ingredient");
        var totalFat = 0;
        var totalCarbs = 0;
        var totalProtein = 0;
        var totalCalories = 0;
        var totalSugar = 0;

        var ingCount = 0;

        for(i = 0; i <= data.length; i++) {
            if(ingCount < 3 && ingredients[ingCount].value == data[i].name){
                apiFat = data[i].nutritions.fat;
                apiCarbs = data[i].nutritions.carbohydrates;
                apiProtein = data[i].nutritions.protein;
                apiCalories = data[i].nutritions.calories;
                apiSugar = data[i].nutritions.sugar;

     
                totalFat += apiFat;
                totalCarbs += apiCarbs;
                totalProtein += apiProtein;
                totalCalories += apiCalories;
                totalSugar += apiSugar;
                ingCount += 1;
            }           
        }

        document.querySelector(".fat").textContent = `Total Fat: ${totalFat}`;
        document.querySelector(".carbs").textContent = `Total Carbohydrates: ${totalCarbs}`;
        document.querySelector(".protien").textContent = `Total Protien: ${totalProtein}`;
        document.querySelector(".sugar").textContent = `Total Sugar: ${totalSugar}`;
        document.querySelector(".calories").textContent = `Total Calories: ${totalCalories}`;
    }



    document.querySelector(".drink-form").classList.toggle("complete");
    document.querySelector(".receipt-box").classList.toggle("complete");

    selectElement = document.querySelectorAll('.ingredient');

    var ing1 = selectElement[0].value;
    var ing2 = selectElement[1].value;
    var ing3 = selectElement[2].value;
    var name = document.querySelector(".name-input").value;
    var email = document.querySelector(".email-input").value;
    var cellnum = document.querySelector(".cell-input").value;
    var instructions = document.querySelector(".user-textbox").value;
    var carbs = document.querySelector(".user-textbox").value;

    document.querySelector(".ingredient1").textContent = ing1;
    document.querySelector(".ingredient2").textContent = ing2;
    document.querySelector(".ingredient3").textContent = ing3;
    document.querySelector(".fname").textContent = name;
    document.querySelector(".email").textContent = email;
    document.querySelector(".cell-num").textContent = cellnum;
    document.querySelector(".instructions").textContent = instructions;

    document.querySelector(".ingredient3").textContent = ing3;
    document.querySelector(".fname").textContent = name;
    document.querySelector(".email").textContent = email;
    document.querySelector(".cell-num").textContent = cellnum;
    document.querySelector(".instructions").textContent = instructions;


    var orderString = `${ing1}, ${ing2}, ${ing3}`;
    //const name = localStorage.getItem(".name-input").value;
    localStorage.setItem("order-string", orderString);
    // localStorage.setItem("drink-count", 0);
    drinksNum = localStorage.getItem("drink-count");

    
    orderString = localStorage.getItem("order-string");
    

    switch (drinksNum) {
        case null:
            localStorage.setItem("drink-count", 1);
            break;
        default:
            drinksNum = parseInt(drinksNum);
            drinksNum += 1;
            localStorage.setItem("drink-count", drinksNum)
    }

    
    
    apiFetch();
}