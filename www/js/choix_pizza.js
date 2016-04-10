import * as _ from "./libs/underscore-min";
/**
 * Created by stephen
 */

var app = {
    initialize: function () {
        this.generatePizzaList();
    },

    temp: function (event) {

    },

    generatePizzaList: function () {
        var pizzaList = JSON.parse(localStorage.getItem('pizzaMenu'));

        var ulPizza = document.createElement('ul');
        ulPizza.className = 'menu-list';

        _.each(pizzaList, function (item, index) {
            var li = document.createElement('li');
            var button = document.createElement('button');
            button.className = 'waves-effect waves-light waves-teal btn';
            button.id = index;
            button.textContent = item.name + ' : ' + item.price + '€';
            button.addEventListener('click', this.addPizza, false);

            li.appendChild(button);
            ulPizza.appendChild(li);
        });

        var summary = document.querySelector('div#summary');
        summary.appendChild(ulPizza);
    },

    addPizza: function (event) {
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
        var pizza = {"name": pizzaName, "table": tableNumber, "price": pizzaPrice};
        pizzaList.push(pizza);
        localStorage.setItem("pizzaList", JSON.stringify(pizzaList));
        //pizza number
        var pizzaNumberStr = localStorage.getItem("pizzaNumber");
        pizzaNumber = parseInt(pizzaNumberStr) + 1;
        localStorage.setItem("pizzaNumber", pizzaNumber);
        //pizzaTableList
        var tablePizzaList = localStorage.getItem('tablePizzaList');
        tablePizzaList[id] = {"name": pizzaName, "price": pizzaPrice};
    }
};

app.initialize();
