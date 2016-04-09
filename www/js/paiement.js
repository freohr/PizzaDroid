/**
 * Created by stephen on 09/04/2016.
 */

var app = {
    initialize : function () {

    },

    bindEvents : function () {
        this.onPaymentScreenLoaded();
    },

    onPaymentScreenLoaded: function () {
        nfc.addNdefListener(
            app.onNdef,
            function () {
                console.log("Listening for NDEF tags.");
            },
            failure
        );

        if (device.platform == "Android") {

            // Android reads non-NDEF tag. BlackBerry and Windows don't.
            nfc.addTagDiscoveredListener(
                app.onNfc,
                function () {
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
                function () {
                    console.log("Listening for NDEF mime tags with type text/pg.");
                },
                failure
            );
        }
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