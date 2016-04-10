/**
 * Created by stephen
 */

var app = {

    initialize: function () {
        app.generateCouvertSummary();
        this.bindEvents();
    },

    bindEvents: function () {
        var buttonPizza = document.querySelector('button#add-pizza');
        buttonPizza.addEventListener('click', this.onAddPizza, false);

        var buttonDrink = document.querySelector('button#add-drink');
        buttonDrink.addEventListener('click', this.onAddDrink, false);

        var buttonValid = document.querySelector('button#valid-button');
        buttonValid.addEventListener('click', this.onValidCommand, false);
    },

    onValidCommand: function() {
        function onConfirmValid (index) {
            if(index === 1) {
                window.location.href = 'paiement.html';
            }
        }

        navigator.notification.confirm(
            'Souhaitez-vous confirmer la commande?',
            onConfirmValid,
            'Confirmation de Commande',
            ['Oui', 'Annuler']
        );
    },

    onAddPizza: function (event) {
        var tablePizzaList = JSON.parse(localStorage.getItem('tablePizzaList'));
        var qty = localStorage.getItem('qtyPizza');

        var pizza = {};
        pizza.name = "Choisir une pizza"
        tablePizzaList[qty] = pizza;

        localStorage.setItem('tablePizzaList', JSON.stringify(tablePizzaList));
        localStorage.setItem('currentChosenPizza', qty);
        localStorage.setItem('qtyPizza', ++qty);

        window.location.href = 'choix_pizza.html';

    },
    onAddDrink: function (event) {
        var tableDrinkList = JSON.parse(localStorage.getItem('tableDrinkList'));
        var qty = localStorage.getItem('qtyDrink');

        var drink = {};
        drink.name = "Choisir une boisson";

        tableDrinkList[qty] = drink;

        localStorage.setItem('tableDrinkList', JSON.stringify(tableDrinkList));
        localStorage.setItem('currentChosenDrink', qty);
        localStorage.setItem('qtyDrink', ++qty);

        window.location.href = 'boisson.html';
    },
    selectPizza: function (event) {
        var source = event.target;
        var id = source.id;

        localStorage.setItem('currentChosenPizza', id);

        window.location.href = 'choix_pizza.html';

    },
    selectDrink: function (event) {
        var source = event.target;
        var id = source.id;

        localStorage.setItem('currentChosenDrink', id);

        window.location.href = 'boisson.html';
    },

    generateCouvertSummary: function () {
        this.generatePizzasSummary();
        this.generateDrinksSummary();
    },

    generatePizzasSummary: function () {
        var tablePizzaList = JSON.parse(localStorage.getItem('tablePizzaList'));
        var qty = localStorage.getItem('qtyPizza');

        var ulPizza = document.querySelector('div.left .summary-list');

        for (var i = 0; i < qty; i++) {
            var pizza = tablePizzaList[i.toString()];

            var li = document.createElement('li');
            var button = document.createElement('button');
            button.className = 'waves-effect waves-teal btn-flat pizza';
            button.id = i;
            button.textContent = pizza.name;
            button.addEventListener('click', this.selectPizza, false);

            li.appendChild(button);

            ulPizza.appendChild(li);
        }
    },
    generateDrinksSummary: function () {
        var tableDrinkList = JSON.parse(localStorage.getItem('tableDrinkList'));
        var qty = localStorage.getItem('qtyDrink');

        var ulDrink = document.querySelector('div.right .summary-list');

        for (var i = 0; i < qty; i++) {
            var drink = tableDrinkList[i.toString()];

            var li = document.createElement('li');
            var button = document.createElement('button');
            button.className = 'waves-effect waves-teal btn-flat drink';
            button.id = i;
            button.textContent = drink.name;
            button.addEventListener('click', this.selectDrink, false);

            li.appendChild(button);

            ulDrink.appendChild(li);
        }
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
