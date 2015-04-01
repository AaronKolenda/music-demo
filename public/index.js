  $(document).on("ready", function(){
  var $crash = $("#crash");
  var $ride = $("#ride");
  var $openHH = $("#openHH");
  var $closedHH = $("#closedHH");
  var $smallTom = $("#small-tom");
  var $snare = $("#snare");
  var $middleTom = $("#middle-tom");
  var $floorTom = $("#floor-tom");
  var $HHFoot = $("#HHFoot");
  var $bass = $("#bass");

  var rows = [$crash, $ride, $openHH, $closedHH, $smallTom, $snare, $middleTom, $floorTom, $HHFoot, $bass];

      var playLine = function(currentTD, originalTD, tempNum, audio) {
        currentTD = temp[tempNum];
        if (currentTD[0].nextElementSibling === null) {

          if (currentTD.hasClass('selected')) {
          currentTD.addClass('highlight');
          audio.play();
          setTimeout(turnOffHighlight, 100, currentTD);
          }

          temp[tempNum] = originalTD;
          return;
        }

        if (currentTD.next()[0].nodeName === 'TD') {
          if (currentTD.hasClass('selected')) {
          currentTD.addClass('highlight');
          audio.play();
          setTimeout(turnOffHighlight, 100, currentTD);
          }
          temp[tempNum] = currentTD.next();
        }  
      }
      var temp = rows.slice(0);

  var crashID;
  var rideID;
  var openHHID;
  var closedHHID;
  var smallTomID;
  var snareID;
  var middleTomID;
  var floorTomID;
  var hhFootID;
  var bassID;

  var rowIDs = [];

  var currentlyPlaying = false;

  var play = function() {

  //the following doesn't work so I'm writing it all out seperatly below
  /*_.each(rowIDs, function(element){
    rowIDs[element] = setInterval(function(){playLine(rows[element], rows[element], element)}, 1000);
  })*/ 

    crashID = setInterval(function(){playLine(rows[0], rows[0], 0, crashAudio)}, calculateTempo());
    rideID = setInterval(function(){playLine(rows[1], rows[1], 1, rideAudio)}, calculateTempo());
    openHHID = setInterval(function(){playLine(rows[2], rows[2], 2, openHHAudio)}, calculateTempo());
    closedHHID = setInterval(function(){playLine(rows[3], rows[3], 3, closedHHAudio)}, calculateTempo());
    smallTomID = setInterval(function(){playLine(rows[4], rows[4], 4, smallTomAudio)}, calculateTempo());
    snareID = setInterval(function(){playLine(rows[5], rows[5], 5, snareAudio)}, calculateTempo());
    middleTomID = setInterval(function(){playLine(rows[6], rows[6], 6, middleTomAudio)}, calculateTempo());
    floorTomID = setInterval(function(){playLine(rows[7], rows[7], 7, floorTomAudio)}, calculateTempo());
    hhFootID = setInterval(function(){playLine(rows[8], rows[8], 8)}, calculateTempo());
    bassID = setInterval(function(){playLine(rows[9], rows[9], 9, bassAudio)}, calculateTempo());

    rowIDs.push(crashID);
    rowIDs.push(rideID);
    rowIDs.push(openHHID);
    rowIDs.push(closedHHID);
    rowIDs.push(smallTomID);
    rowIDs.push(snareID);
    rowIDs.push(middleTomID);
    rowIDs.push(floorTomID);
    rowIDs.push(hhFootID);
    rowIDs.push(bassID);

    currentlyPlaying = true;

  }

  $('#play-pause').click(function() {
    if ($('#tempo').val() < 0 || $('#tempo').val() > 400) {
      alert("you must chose a tempo in between 1 and 400");
      return;
    }

    if (currentlyPlaying === true) {
      _.each(rowIDs, function(element) {
        window.clearInterval(element);
      });
      currentlyPlaying = false;
      return;
    }
    else {
      play();
    }

  });

  $('td').click(function() {
    $(this).toggleClass('selected');
  });

  $('#save').click(function() {
    save();
  });


});

  var save = function() {
    var crashNotes = [];
    var tdsArray = $("#crash-row td");
    _.each(tdsArray, function(element) {
      element = $(element);
      console.log(element[0].className);
      if (element[0].className === 'selected') {
        crashNotes.push(true);
      }
      else {
        crashNotes.push(false);
      }
    })
    console.log(crashNotes);
  }

  var calculateTempo = function() {
    var bpm = $('#tempo').val();
    var sixteenthPerMin = bpm * 4;
    var millisecondsApart = 1000 * (60/sixteenthPerMin);
    return millisecondsApart;
  }

var turnOffHighlight = function(td) {
  td.removeClass('highlight');
}

var crashAudio = new Howl({
  urls: ['samples/crash.mp3'],
  volume: 0.4
});
var floorTomAudio = new Howl({
  urls: ['samples/floortom.mp3'],
  volume: 1.0
});
var closedHHAudio = new Howl({
  urls: ['samples/hihat.mp3'],
  volume: 0.4
});
var bassAudio = new Howl({
  urls: ['samples/kick.mp3'],
  volume: 1.0
});
var middleTomAudio = new Howl({
  urls: ['samples/middletom.mp3'],
  volume: 1.0
});
var openHHAudio = new Howl({
  urls: ['samples/openhat.mp3'],
  volume: 0.4
});
var rideAudio = new Howl({
  urls: ['samples/ride.mp3'],
  volume: 0.4
});
var smallTomAudio = new Howl({
  urls: ['samples/smalltom.mp3'],
  volume: 1.0
});
var snareAudio = new Howl({
  urls: ['samples/snare.mp3'],
  volume: 0.4
});

      







