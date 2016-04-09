/**
 * Created by stephen on 09/04/2016.
 */




var app = {

    initialize: function () {
        app.generateCouvertsummary();
    },

    bindEvents: function () {

    },

    selectPizza: function (event) {

        event.target;

    },

    selectBoisson: function (event) {

    },

    generateCouvertsList: function (nbCouverts) {
        var ul = document.createElement('ul');
        ul.id = 'pizzaList';

        for (var i = 0; i < Math.min(nbCouverts, 10); i++) {
            var li = document.createElement('li');
            li.className = 'couvert ' + i;

            var span = document.createElement('span');
            span.className = 'couvertItem';

            var buttonPizza = document.createElement('button');
            buttonPizza.className = 'pizza ' + i;
            buttonPizza.innerHTML = 'Choisir une pizza';

            span.appendChild(buttonPizza);

            var buttonBoisson = document.createElement('button');
            buttonBoisson.className = 'boisson ' + i;
            buttonBoisson.innerHTML = 'Choisir une boisson';

            span.appendChild(buttonBoisson);

            li.appendChild(span);

            ul.appendChild(li);
        }

        return ul;
    },

    generateCouvertsummary: function () {
        var qty = localStorage.getItem('qty');


        var ulPizza = this.getPizzas(qty);
        var ulDrinks = this.getDrinks();

        var summary = document.querySelector('#summary');
        summary.appendChild(ul);
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
