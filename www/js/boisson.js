/**
 * Created by stephen on 09/04/2016.
 */

function initializeDrinksList() {

}

var app = {
    initialize : function () {
        initializeDrinksList();
    },
    
    bindEvents : function() {

    },

    addDrink:function (){
        //drink
        var drinkList = JSON.parse(localStorage.getItem("drinkList"));
        var tableNumberStr = localStorage.getItem("tableNumber");
        var tableNumber = parseInt(tableNumberStr);
        var drink = {"name":"pizzaName","table":tableNumber,"price":"pizzaPrice"};
        drinkList.push(drink);
        localStorage.setItem("drinkList",JSON.stringify(drinkList));
        //drink number
        var drinkNumberStr = localStorage.getItem("drinkNumber");
        drinkNumber = parseInt(drinkNumberStr)+1;
        localStorage.setItem("drinkNumber",drinkNumber);
    },
};

app.initialize();
