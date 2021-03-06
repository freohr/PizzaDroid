import * as _ from "./libs/underscore-min";
/**
 * Created by stephen
 */

var app;
app = {
    initialize: function () {
        this.generateDrinkList();
    },

    temp: function (event) {

    },

    generateDrinkList: function () {
        var drinkList = JSON.parse(localStorage.getItem('drinkMenu'));

        var ulDrink = document.createElement('ul');
        ulDrink.className = 'menu-list';

        _.each(drinkList, function (item, index) {
            var li = document.createElement('li');
            var button = document.createElement('button');
            button.className = 'waves-effect waves-light waves-teal btn';
            button.id = index;
            button.textContent = item.name + ' : ' + item.price + '€';
            button.addEventListener('click', this.addDrink, false);

            li.appendChild(button);
            ulDrink.appendChild(li);
        });

        var summary = document.querySelector('div#summary');
        summary.appendChild(ulDrink);
    },

    addDrink: function (event) {
        //drink
        var choosenDrink = localStorage.getItem('currentChosenDrink');
        //get pizza name and price in the menu
        var source = event.target;
        var id = source.id;
        var drinkMenu = localStorage.getItem("drinkMenu");
        var drinkName = drinkMenu[id].name;
        var drinkPrice = drinkMenu[id].price;
        var drinkList = JSON.parse(localStorage.getItem("drinkList"));
        var tableNumberStr = localStorage.getItem("tableNumber");
        var tableNumber = parseInt(tableNumberStr);
        var drink = {"name": drinkName, "table": tableNumber, "price":drinkPrice};
        drinkList.push(drink);
        localStorage.setItem("drinkList", JSON.stringify(drinkList));
        //drink number
        var drinkNumberStr = localStorage.getItem("drinkNumber");
        drinkNumber = parseInt(drinkNumberStr) + 1;
        localStorage.setItem("drinkNumber", drinkNumber);

        //drinkTableList
        var tableDrinkList = localStorage.getItem('tableDrinkList');
        tableDrinkList[id] = {"name":drinkName,"price":drinkPrice};
    },


    chooseDrink: function (event) {

        var source = event.target;
        var id = source.id;

        var cmdNumber = localStorage.getItem('currentDrinkOrder');

        var drinkList = JSON.parse(localStorage.getItem('drinkList'));

        var tableDrinkList = JSON.parse(localStorage.getItem('tableDrinkList'));

    },

    initDrinkList: function () {

        var drinkList = JSON.parse(localStorage.getItem("drinkList"));

        var ul = document.createElement('ul');

        _.each(drinkList, function (element, index) {
            var li = document.createElement('li');

            li.className = 'drink ' + index;

            var button = document.createElement('button');

            button.className = 'drink';
            button.id = index;
            button.addEventListener('click', app.chooseDrink, false);

            li.appendChild(button);

            ul.appendChild(li);
        });

        var content = document.querySelector('#content');
        content.appendChild(ul);
    }
};

app.initialize();
