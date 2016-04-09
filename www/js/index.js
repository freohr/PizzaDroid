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
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('paymentScreenLoaded', this.onPaymentScreenLoaded, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onPaymentScreenLoaded: function() {
        nfc.addNdefListener(
            app.onNdef,
            function() {
                console.log("Listening for NDEF tags.");
            },
            failure
        );

        if (device.platform == "Android") {

            // Android reads non-NDEF tag. BlackBerry and Windows don't.
            nfc.addTagDiscoveredListener(
                app.onNfc,
                function() {
                    console.log("Listening for non-NDEF tags.");
                },
                failure
            );

            // Android launches the app when tags with mime type text/pg are scanned
            // because of an intent in AndroidManifest.xml.
            // phonegap-nfc fires an ndef-mime event (as opposed to an ndef event)
            // the code reuses the same onNfc handler
            nfc.addMimeTypeListener(
                'text/pg',
                app.onNdef,
                function() {
                    console.log("Listening for NDEF mime tags with type text/pg.");
                },
                failure
            );
        }
    },

    onDeviceReady: function() {
        function failure(reason) {
            navigator.notification.alert(reason, function() {}, "There was a problem");
        }

        app.receivedEvent('deviceready');

    },
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    // Received NFC or NDEF event
    onNfc: function (nfcEvent) {

        var tag = nfcEvent.tag;

        console.log(JSON.stringify(nfcEvent.tag));
        // app.clearScreen();

        function paymentAlertDismissed() {
            // do something
        }

        // tagContents.innerHTML = app.nonNdefTagTemplate(tag);
        navigator.notification.vibrate(100);
        navigator.notification.alert(
            'Paiement recu!',  // message
            paymentAlertDismissed,         // callback
            '',
            'Ok'                  // buttonName
        )
    },
    onNdef: function (nfcEvent) {

        console.log(JSON.stringify(nfcEvent.tag));
        // app.clearScreen();

        var tag = nfcEvent.tag;

        function paymentAlertDismissed() {
            // do something
        }

        // tagContents.innerHTML = app.nonNdefTagTemplate(tag);
        navigator.notification.vibrate(100);
        navigator.notification.alert(
            'Paiement recu!',  // message
            paymentAlertDismissed,         // callback
            '',
            'Ok'                  // buttonName
        )

        // BB7 has different names, copy to Android names
        // if (tag.serialNumber) {
        //     tag.id = tag.serialNumber;
        //     tag.isWritable = !tag.isLocked;
        //     tag.canMakeReadOnly = tag.isLockable;
        // }

        // tagContents.innerHTML = app.tagTemplate(tag);

        // navigator.notification.vibrate(100);
    },
};

app.initialize();