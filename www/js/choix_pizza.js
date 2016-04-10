/**
 * Created by stephen on 09/04/2016.
 */

var app = {
    initialize : function () {

    },
    
    addPizza:function (){
    //pizza
        console.log(localStorage.getItem("pizzaList"));
        var choosenPizza = localStorage.getItem('currentChosenPizza');
        //get pizza name and price in the menu
        var source = event.target;
        var id = source.id;
        var pizzaMenu = localStorage.getItem("pizzaMenu");
        var pizzaName = pizzaMenu[id].name;
        var pizzaPrice = pizzaMenu[id].price;
        var pizzaList = JSON.parse(localStorage.getItem("pizzaList"));
        var tableNumberStr = localStorage.getItem("tableNumber");
        var tableNumber = parseInt(tableNumberStr);
        console.log(tableNumberStr);
        var pizza = {"name":pizzaName,"table":tableNumber,"price":pizzaPrice};
        pizzaList.push(pizza);
        localStorage.setItem("pizzaList",JSON.stringify(pizzaList));
        //pizza number
        var pizzaNumberStr = localStorage.getItem("pizzaNumber");
        pizzaNumber = parseInt(pizzaNumberStr)+1;
        localStorage.setItem("pizzaNumber",pizzaNumber);
        //pizzaTableList
        var tablePizzaList = localStorage.getItem('tablePizzaList');
        tablePizzaList[id] = {"name":pizzaName,"price":pizzaPrice};
    }
};

app.initialize();
