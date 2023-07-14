function completeDrink() {

    var validationExpression = /[A-Z-a-z-0-9]{7}/;
    //var validationString = document.getElementsByClassName("job-position-box")[0].textContent;


    document.querySelector(".drink-form").classList.toggle("complete");
    document.querySelector(".receipt-box complete").classList.toggle("complete");

    // var ingredient = document.querySelector('.ingredient');
    // alert(ingredient.option)

    selectElement = document.querySelectorAll('.ingredient');
    output = selectElement[2].value;

    

    document.querySelector(".ingredient1").textContent = selectElement[0].value;
    document.querySelector(".ingredient2").textContent = selectElement[1].value;
    document.querySelector(".ingredient3").textContent = selectElement[2].value;
    document.querySelector(".fname").textContent = document.querySelector(".name-input").value;
    document.querySelector(".email").textContent = document.querySelector(".email-input").value;
    document.querySelector(".cell-num").textContent = document.querySelector(".cell-input").value;
    document.querySelector(".instructions").textContent = document.querySelector(".user-textbox").value;
}