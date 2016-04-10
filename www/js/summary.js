/**
 * Created by stephen on 09/04/2016.
 */

var app = {

    initialize: function () {
        app.generateCouvertSummary();
    },

    bindEvents: function () {

    },

    selectPizza: function (event) {
        var source = event.target;
        var id = source.id;

    },

    selectDrink: function (event) {
        var source = event.target;
        var id = source.id;
    },

    generateCouvertSummary: function () {
        this.generatePizzasSummary();
        this.generateDrinksSummary();
    },

    generatePizzasSummary: function () {
        var tablePizzaList = localStorage.getItem('tablePizzaList');
        var qty = localStorage.getItem('qty');

        var ulPizza = document.createElement('ul');
        ulPizza.className = 'summaryList';

        for (var i = 0; i < qty; i++) {
            var pizza = tablePizzaList[i.toString()];

            var li = document.createElement('li');
            var button = document.createElement('button');
            button.className = 'pizza';
            button.id = i;
            button.addEventListener('click', this.selectPizza, false);

            li.appendChild(button);

            ulPizza.appendChild(li);
        }

        var summary = document.querySelector('#summary');
        summary.appendChild(ulPizza);
    },

    generateDrinksSummary: function () {
        var tableDrinkList = localStorage.getItem('tableDrinkList');
        var qty = localStorage.getItem('qty');

        var ulDrink = document.createElement('ul');
        ulDrink.className = 'summaryList';

        for (var i = 0; i < qty; i++) {
            var drink = tableDrinkList[i.toString()];

            var li = document.createElement('li');
            var button = document.createElement('button');
            button.className = 'drink';
            button.id = i;
            button.addEventListener('click', this.selectDrink, false);

            li.appendChild(button);

            ulDrink.appendChild(li);
        }

        var summary = document.querySelector('#summary');
        summary.appendChild(ulDrink);
    },

    getPizzas: function () {
        var tableNumberStr = localStorage.getItem("tableNumber");

        // numero table courante
        var tableNumber = parseInt(tableNumberStr);

        // liste menu pizzas
        var pizzaList = JSON.parse(localStorage.getItem("pizzaList"));

        // qty de pizzas
        var pizzaNumberStr = localStorage.getItem("pizzaNumber");
        pizzaNumber = parseInt(pizzaNumberStr);

        var ulPizza = document.createElement('ul');

        for (i = 0; i < pizzaNumber; i++) {
            console.log(pizzaList[i]);
            if (pizzaList[i].tableNumber = tableNumber) {
                var node = document.createElement("li");                 // Create a <li> node
                var pizzaName = pizzaList[i].name;
                var textnode = document.createTextNode(pizzaName);         // Create a text node
                node.appendChild(textnode);                              // Append the text to <li>
                ulPizza.appendChild(node);
            } else {
                console.log("nope");
            }
        }
    },

    getDrinks: function () {
        var tableNumberStr = localStorage.getItem("tableNumber");
        var tableNumber = parseInt(tableNumberStr);
        var drinkList = JSON.parse(localStorage.getItem("drinkList"));
        var drinkNumberStr = localStorage.getItem("drinkNumber");
        drinkNumber = parseInt(drinkNumberStr);
        for (i = 0; i < drinkNumber; i++) {
            console.log(pizzaList[i]);
            if (drinkList[i].tableNumber = tableNumber) {
                var node = document.createElement("LI");                 // Create a <li> node
                var drinkName = drinkList[i].name;
                var textnode = document.createTextNode(drinkName);         // Create a text node
                node.appendChild(textnode);                              // Append the text to <li>
                document.getElementById("drinkList").appendChild(node);
            } else {
                console.log("nope");
            }
        }
    }

};

app.initialize();
