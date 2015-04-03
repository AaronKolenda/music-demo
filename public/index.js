  $(document).on("ready", function(){

  getTemplates();
   $rimshot = $("#rimshot");
   $cowbell = $("#cowbell");
   $splash = $("#splash");
   $crash = $("#crash");
   $ride = $("#ride");
   $openHH = $("#openHH");
   $closedHH = $("#closedHH");
   $highTom = $("#high-tom");
   $smallTom = $("#small-tom");
   $snare = $("#snare");
   $middleTom = $("#middle-tom");
   $floorTom = $("#floor-tom");
   $HHFoot = $("#HHFoot");
   $bass = $("#bass");



   rows = [$rimshot, $cowbell, $splash, $crash, $ride, $openHH, $closedHH, $highTom, $smallTom, $snare, $middleTom, $floorTom, $HHFoot, $bass];
   temp = rows.slice(0);
      

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

  var mousedown = false;

  $('#beat td').on("mousedown", function(event) {
    event.preventDefault();
    $(this).toggleClass('selected');
    mousedown = true;
  });

  $('#beat td').on("mouseover", function(event) {
    event.preventDefault();
    if (mousedown) {
      $(this).toggleClass('selected');
    }
  });

  $('html').on("mouseup", function(event) {
    event.preventDefault();
    mousedown = false;
    if (savedBeat) {
      savedBeat.mousedown = false;
    }
  });

  $('#save').on("click", function() {
    save();
  });

  $('#load').on("click", function() {
    load();
  });


});

var notesFromServer;
var savedBeat;

  var save = function() {
    var notes = {};
    notes.rimshotNotes = [];
    notes.cowbellNotes = [];
    notes.splashNotes = [];
    notes.crashNotes = [];
    notes.rideNotes = [];
    notes.openHHNotes = [];
    notes.closedHHNotes = [];
    notes.highTomNotes = [];
    notes.smallTomNotes = [];
    notes.snareNotes = [];
    notes.middleTomNotes = [];
    notes.floorTomNotes = [];
    notes.footHH = [];
    notes.bassNotes = [];


    var tableRows = $("#beat tr");

      var counter = 0;
    _.each(notes, function(eacharray, index) {
      var tdsArray = $(tableRows[counter]);
      counter++

        _.each(tdsArray[0].children, function(element) {
          $element = $(element);
          if ($element.hasClass('selected') ) {
            eacharray.push(true);
          }
          else {
            eacharray.push(false);
          }
        });
    });
    notes.tempo = $('#tempo').val();
    notes.beatName = $('#name').val();
    console.log(notes);
    notesFromServer = notes;
    savedBeat = new Beat(notes);
}

var load = function() {
  /*$("#loaded-beat").html("");
  var newBeatView = new BeatView(savedBeat);
  $("#loaded-beat").append(newBeatView.el);*/
  $("body").html("");
  var newBeatView = new BeatView(savedBeat);
  $("body").append(newBeatView.el);
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
  volume: 0.2
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
  volume: 0.2
});
var rideAudio = new Howl({
  urls: ['samples/ride.mp3'],
  volume: 0.2
});
var smallTomAudio = new Howl({
  urls: ['samples/smalltom.mp3'],
  volume: 1.0
});
var snareAudio = new Howl({
  urls: ['samples/snare.mp3'],
  volume: 0.5
});
var footHHAudio = new Howl({
  urls: ['samples/footHH.mp3'],
  volume: 0.3
});
var cowbellAudio = new Howl({
  urls: ['samples/cowbell.mp3'],
  volume: 0.7
});
var rimshotAudio = new Howl({
  urls: ['samples/rimshot.mp3'],
  volume: 0.2
});
var splashAudio = new Howl({
  urls: ['samples/splash.mp3'],
  volume: 1.0
});
var highTomAudio = new Howl({
  urls: ['samples/hightom.mp3'],
  volume: 0.7
});

var templates = {};

var getTemplates = function(){

  var beatString = $("#beat-template").text()
  templates.beatInfo = Handlebars.compile(beatString);

}

  var $rimshot;
  var $cowbell;
  var $splash;
  var $ride;
  var $openHH;
  var $closedHH;
  var $highTom;
  var $smallTom;
  var $snare;
  var $middleTom;
  var $floorTom;
  var $HHFoot;
  var $bass;
  var rows;


var playLine = function(currentTD, originalTD, tempNum, audio) {
  currentTD = temp[tempNum];
  if (currentTD[0].nextElementSibling === null) {

    if (currentTD.hasClass('selected')) {
      currentTD.addClass('highlight');
      audio.play();
      setTimeout(turnOffHighlight, 120, currentTD);
    }

    temp[tempNum] = originalTD;
    return;
  }

  if (currentTD.next()[0].nodeName === 'TD') {

    if (currentTD.hasClass('selected')) {

      currentTD.addClass('highlight');
      audio.play();
      setTimeout(turnOffHighlight, 120, currentTD);
    }
    temp[tempNum] = currentTD.next();
  }  
}

var temp;

var rowIDs = [];

var currentlyPlaying = false;

var play = function() {

  rimshot = $("#rimshot-row")[0].children[0];
 $rimshot = $(rimshot);

 cowbell = $("#cowbell-row")[0].children[0];
 $cowbell = $(cowbell);

 splash = $("#splash-row")[0].children[0];
 $splash = $(splash);

 crash = $("#crash-row")[0].children[0];
 $crash = $(crash);

 ride = $("#ride-row")[0].children[0];
 $ride = $(ride);

 openHH = $("#openHH-row")[0].children[0];
 $openHH = $(openHH);

 closedHH = $("#closedHH-row")[0].children[0];
 $closedHH = $(closedHH);

 highTom = $("#high-tom-row")[0].children[0];
 $highTom = $(highTom);

 smallTom = $("#small-tom-row")[0].children[0];
 $smallTom = $(smallTom);

 snare = $("#snare-row")[0].children[0];
 $snare = $(snare);

 middleTom = $("#middle-tom-row")[0].children[0];
 $middleTom = $(middleTom);

 floorTom = $("#floor-tom-row")[0].children[0];
 $floorTom = $(floorTom);

 HHFoot = $("#footHH-row")[0].children[0];
 $HHFoot = $(HHFoot);

 bass = $("#bass-row")[0].children[0];
 $bass = $(bass);

   rows = [$rimshot, $cowbell, $splash, $crash, $ride, $openHH, $closedHH, $highTom, $smallTom, $snare, $middleTom, $floorTom, $HHFoot, $bass];
   temp = rows.slice(0);

  rimshotID = setInterval(function(){playLine(rows[0], rows[0], 0, rimshotAudio)}, calculateTempo());
  cowbellID = setInterval(function(){playLine(rows[1], rows[1], 1, cowbellAudio)}, calculateTempo());
  splashID = setInterval(function(){playLine(rows[2], rows[2], 2, splashAudio)}, calculateTempo());
  crashID = setInterval(function(){playLine(rows[3], rows[3], 3, crashAudio)}, calculateTempo());
  rideID = setInterval(function(){playLine(rows[4], rows[4], 4, rideAudio)}, calculateTempo());
  openHHID = setInterval(function(){playLine(rows[5], rows[5], 5, openHHAudio)}, calculateTempo());
  closedHHID = setInterval(function(){playLine(rows[6], rows[6], 6, closedHHAudio)}, calculateTempo());
  highTomID = setInterval(function(){playLine(rows[7], rows[7], 7, highTomAudio)}, calculateTempo());
  smallTomID = setInterval(function(){playLine(rows[8], rows[8], 8, smallTomAudio)}, calculateTempo());
  snareID = setInterval(function(){playLine(rows[9], rows[9], 9, snareAudio)}, calculateTempo());
  middleTomID = setInterval(function(){playLine(rows[10], rows[10], 10, middleTomAudio)}, calculateTempo());
  floorTomID = setInterval(function(){playLine(rows[11], rows[11], 11, floorTomAudio)}, calculateTempo());
  hhFootID = setInterval(function(){playLine(rows[12], rows[12], 12, footHHAudio)}, calculateTempo());
  bassID = setInterval(function(){playLine(rows[13], rows[13], 13, bassAudio)}, calculateTempo());

  rowIDs.push(rimshotID);
  rowIDs.push(cowbellID);
  rowIDs.push(splashID);
  rowIDs.push(crashID);
  rowIDs.push(rideID);
  rowIDs.push(openHHID);
  rowIDs.push(closedHHID);
  rowIDs.push(highTomID);
  rowIDs.push(smallTomID);
  rowIDs.push(snareID);
  rowIDs.push(middleTomID);
  rowIDs.push(floorTomID);
  rowIDs.push(hhFootID);
  rowIDs.push(bassID);

  currentlyPlaying = true;


}




