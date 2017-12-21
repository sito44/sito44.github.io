'use strict';
$(function() {
    var config = {
        apiKey: "AIzaSyDanW4pUqUihC8LaGuwYZn3OWtqfw_TJno",
        authDomain: "andre-holguin-code-bootcamp.firebaseapp.com",
        databaseURL: "https://andre-holguin-code-bootcamp.firebaseio.com",
        projectId: "andre-holguin-code-bootcamp",
        storageBucket: "andre-holguin-code-bootcamp.appspot.com",
        messagingSenderId: "551036825528"
    };

    firebase.initializeApp(config);

    var database = firebase.database();

    $('#addTrain').on("click", function(event) {
        event.preventDefault();


        var trainName = $("#trainName").val().trim();
        var destination = $("#destination").val().trim();
        var firstTrainTime = $("#firstTrainTime").val().trim();
        var frequency = $("#frequency").val().trim();

        var trainUpdate = {
            name: trainName,
            email: destination,
            firstTrainTime: firstTrainTime,
            frequency: frequency
        };

        database.ref().push(trainUpdate);
        $('#trainName').val('');
        $('#destination').val('');
        $('#firstTrainTime').val('');
        $('#frequency').val('');


    });

    database.ref().on("child_added", function(snap) {
        var name = snap.val().name;
        var email = snap.val().email;
        var firstTrainTime = snap.val().firstTrainTime;
        var frequency = snap.val().frequency;
        $("#trainTable").append("<tr><td>" + name + "</td><td>" + email + "</td><td>" +
            firstTrainTime + "</td><td>" + frequency + "</td></tr>");
    });
});