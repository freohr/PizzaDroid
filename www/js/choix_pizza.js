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
    var pizza = {"name":"pizzaName","price":"pizzaPrice"};
    pizzaList.push(pizza);
    localStorage.setItem("pizzaList",JSON.stringify(pizzaList));
    console.log(pizzaList);
    //pizza number
    var pizzaNumberStr = localStorage.getItem("pizzaNumber");
    console.log(pizzaNumberStr);
    pizzaNumber = parseInt(pizzaNumberStr)+1;
    console.log(pizzaNumber);
    localStorage.setItem("pizzaNumber",pizzaNumber);
    }
};

app.initialize();
