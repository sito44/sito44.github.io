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
    var clockRunning = false;
    var clockContainer = $('#clock');
    var currentTime;
    var nowTimeDifference;
    var timeRemainder;
    var minsToNextArrival;
    var nextTrainTime;



    clock();
    // clock function for future realtime minutes away update
    function clock() {
        if (!clockRunning) {

            currentTime = setInterval(clock, 1000);
            clockRunning = true;
        }
        clockContainer.empty();
        var t = moment().format('LT');
        clockContainer.text(t);

    }

    $('#addTrain').on("click", function(event) {
        event.preventDefault();


        var trainName = $("#trainName").val().trim();
        var destination = $("#destination").val().trim();
        var firstTrainTime = $("#firstTrainTime").val().trim();
        var frequency = $("#frequency").val().trim();

        var trainUpdate = {
            tName: trainName,
            endLocation: destination,
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
        var k = snap.key;
        var tName = snap.val().tName;
        var endLocation = snap.val().endLocation;
        var firstTrainTime = snap.val().firstTrainTime;
        var frequency = snap.val().frequency;

        nowTimeDifference = moment().diff(moment.unix(snap.val().firstTrainTime), "minutes");
        console.log(nowTimeDifference);

        timeRemainder = nowTimeDifference % frequency;
        console.log(timeRemainder);

        minsToNextArrival = frequency - timeRemainder;
        console.log(minsToNextArrival);

        nextTrainTime = moment().add(minsToNextArrival, "m").format("hh:mm A");
        console.log(nextTrainTime);

        $("#trainTable").append("<tr><td>" + tName + "</td><td>" + endLocation + "</td><td>" +
            frequency + " min</td><td>" + nextTrainTime + "</td><td id='mtna'>" + minsToNextArrival + "</td></tr>");
    });
});