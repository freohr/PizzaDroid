/**
 * Created by stephen on 09/04/2016.
 */

var app = {
    initialize : function () {

    },
    
    addPizza:function (){
    //pizza
        console.log(localStorage.getItem("pizzaList"));
        var pizzaList = JSON.parse(localStorage.getItem("pizzaList"));
        var tableNumberStr = localStorage.getItem("tableNumber");
        var tableNumber = parseInt(tableNumberStr);
        console.log(tableNumberStr);
        var pizza = {"name":"pizzaName","table":tableNumber,"price":"pizzaPrice"};
        pizzaList.push(pizza);
        localStorage.setItem("pizzaList",JSON.stringify(pizzaList));
        //pizza number
        var pizzaNumberStr = localStorage.getItem("pizzaNumber");
        pizzaNumber = parseInt(pizzaNumberStr)+1;
        localStorage.setItem("pizzaNumber",pizzaNumber);
    }
};

app.initialize();
