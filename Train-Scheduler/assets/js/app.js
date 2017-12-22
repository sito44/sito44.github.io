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


        let trainName = $("#trainName").val().trim();
        let destination = $("#destination").val().trim();
        let firstTrainTime = $("#firstTrainTime").val().trim();
        let frequency = $("#frequency").val().trim();

        let trainUpdate = {
            tName: trainName,
            endLocation: destination,
            firstTrainTime: firstTrainTime,
            frequency: frequency,
            nextTime: 0
        };

        database.ref().push(trainUpdate);
        $('#trainName').val('');
        $('#destination').val('');
        $('#firstTrainTime').val('');
        $('#frequency').val('');


    });

    database.ref().on("child_added", function(snap) {
    	let k = snap.key;
    	console.log(k);
        let tName = snap.val().tName;
        let endLocation = snap.val().endLocation;
        let firstTrainTime = snap.val().firstTrainTime;
        let frequency = snap.val().frequency;
        let nextArrival = parseInt(firstTrainTime) + parseInt(frequency);
        let naString = nextArrival.toString();
        database.ref(k).update({
        	nextTime: naString
        });
        let nA = snap.val().nextTime;
        /*firstTrainTime = moment(firstTrainTime, "hmm").format("LT");*/
        
        let naTime = moment(nA, "hmm").format("LT");
        console.log(nextArrival);


        $("#trainTable").append("<tr><td>" + tName + "</td><td>" + endLocation + "</td><td>" +
            frequency + "</td><td>" + naTime + "</td></tr>");
    });
});