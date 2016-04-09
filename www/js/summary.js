/**
 * Created by stephen on 09/04/2016.
 */

function generateCouvertsList(nbCouverts) {
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
}


var app = {
    
    initialize : function () {
        app.generateCouvertsummary();
    },

    bindEvents : function () {

    },

    selectPizza : function(event) {

    },

    selectBoisson : function(event) {

    },

    generateCouvertsummary: function() {
        var qty = localStorage.getItem('qty');


        var ul = generateCouvertsList(qty);

        var summary = document.querySelector('#summary');
        summary.appendChild(ul);
    },

};

app.initialize();