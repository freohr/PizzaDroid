import * as _ from "./libs/underscore-min";
/**
 * Created by stephen on 09/04/2016.
 */

var app;
app = {
    initialize: function () {
        this.initDrinkList();
    },

    bindEvents: function () {

    },

    addDrink: function () {
        //drink
        var drinkList = JSON.parse(localStorage.getItem("drinkList"));
        var tableNumberStr = localStorage.getItem("tableNumber");
        var tableNumber = parseInt(tableNumberStr);
        var drink = {"name": "pizzaName", "table": tableNumber, "price": "pizzaPrice"};
        drinkList.push(drink);
        localStorage.setItem("drinkList", JSON.stringify(drinkList));
        //drink number
        var drinkNumberStr = localStorage.getItem("drinkNumber");
        drinkNumber = parseInt(drinkNumberStr) + 1;
        localStorage.setItem("drinkNumber", drinkNumber);
    },

    chooseDrink : function(event) {

    },

    initDrinkList: function () {

        var drinkList = JSON.parse(localStorage.getItem("drinkList"));

        var ul = document.createElement('ul');

        _.each(drinkList, function (element, index) {
            var li = document.createElement('li');

            li.className = 'drink ' + index;

            var button = document.createElement('button');

            button.className = li.className;

            li.appendChild(button);

            ul.appendChild(li);
        });
        
        var content = document.querySelector('#content');
        content.appendChild(ul);
    }
};

app.initialize();
