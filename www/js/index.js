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
var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
        localStorage.clear();
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

        window.location = 'summary.html';

        console.log(`${qty} couverts saisis`);
    },
    
    onDeviceReady: function () {
        function failure(reason) {
            navigator.notification.alert(reason, function () {
            }, "There was a problem");
        }
    }
};

app.initialize();