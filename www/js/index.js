/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
        localStorage.clear();

        var tableNumber = getRandomIntInclusive(1, 10);

        localStorage.setItem('tableNumber', tableNumber);
        this.initPizzaDrink();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('paymentScreenLoaded', this.onPaymentScreenLoaded, false);
        // document.addEventListener('saveCouverts', this.onCouvertSaved, false);

        var saveButton = document.querySelector('#saveCouverts');
        saveButton.addEventListener('click',this.onCouvertSaved, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onCouvertSaved: function () {
        var parent = document.getElementById("couvertSelector");
        var input = parent.querySelector('#couvertsNumber');
        var qty = input.value;

        localStorage.setItem('qty', qty);
        localStorage.setItem('qtyPizza', qty);
        localStorage.setItem('qtyDrink', qty);

        var tablePizzaList = new Array();
        var tableDrinkList = new Array();

        for(var i = 0; i < qty; i++) {
            var drink = {};
            drink.name = "Choisir une boisson";

            tableDrinkList[i] = drink;

            var pizza = {};
            pizza.name = "Choisir une pizza"
            tablePizzaList[i] = pizza;
        }

        localStorage.setItem('tablePizzaList', JSON.stringify(tablePizzaList));
        localStorage.setItem('tableDrinkList', JSON.stringify(tableDrinkList));

        window.location.href = 'summary.html';

        console.log(`${qty} couverts saisis`);
    },

    onDeviceReady: function () {
        function failure(reason) {
            navigator.notification.alert(reason, function () {
            }, "There was a problem");
        }
    },
    initPizzaDrink:function (){
        localStorage.clear();
        localStorage.setItem("tableNumber",1);
        var pizzaList = []; 
        localStorage.setItem("pizzaNumber",0);
        localStorage.setItem("pizzaList",JSON.stringify(pizzaList));
        var drinkList = [];
        localStorage.setItem("drinkNumber",0);
        localStorage.setItem("drinkList",JSON.stringify(drinkList));
        //pizzaMenu
        var pizzaMenu = '[{"name":"4 Fromages","price":"10"},{"name":"Chevre/miel","price":"10.5"},{"name":"savoyarde","price":"11"},{"name":"carnivore","price":"12"},{"name":"raclette","price":"12.5"},{"name":"foie gras","price":"13"}]';
        //drinkMenu
        var drinkMenu = '[{"name":"eau","price":"0"},{"name":"coca","price":"1.5"},{"name":"jus d\'orange","price":"1.5"},{"name":"vin blanc","price":"2"},{"name":"vin rouge","price":"2"},{"name":"chanpagne","price":"5"}]';
        localStorage.setItem("pizzaMenu",pizzaMenu);
        localStorage.setItem("drinkMenu",drinkMenu);
    }
};

app.initialize();
