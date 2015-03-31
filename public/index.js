    //var noteData = [];
   
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

  var $crashAudio = $("#crash-audio");
  var $closedHHAudio = $("#closedHH-audio");
  var $bassAudio = $("#bass-audio");
  var $openHHAudio = $("#openHH-audio");
  var $rideAudio = $("#ride-audio");
  var $snareAudio = $("#snare-audio");
  var $smallTomAudio = $("#small-tom-audio");
  var $middleTomAudio = $("#middle-tom-audio");
  var $floorTomAudio = $("#floor-tom-audio");


 var rows = [$crash, $ride, $openHH, $closedHH, $smallTom, $snare, $middleTom, $floorTom, $HHFoot, $bass];
 
      /*var playLine = function(row) { 
        while (row[0].nextElementSibling !== null) {
          setTimeout(checkSelected, 1000, row);
          row = row.next();
        }
        setTimeout(playNote, 1000, row); 
      }*/


      var playNote = function(row) {
       
          if (row.hasClass('selected')) {
          console.log("last td, $td has selected class");
          }
          else {console.log("last td, $td doesn't have selected class")
          }
          console.log("it stopped")
          return;
      
      }

      var checkSelected = function(row) {
        if (row.hasClass('selected')) {
          console.log("$td has selected class");
          }
          else {
            console.log("$td doesn't have selected class")
          }
      }

      var playLine = function(currentTD, originalTD, tempNum, audio) {
          currentTD = temp[tempNum];
        if (currentTD[0].nextElementSibling === null) {
          if (currentTD.hasClass('selected')) {
          console.log("last td, $td has selected class");
          currentTD.addClass('highlight');
          //$('audio').get(audio).play();
          audio.play();
          setTimeout(turnOffHighlight, 100, currentTD);
          }
          else {console.log("last td, $td doesn't have selected class")
          }
          console.log("it reached the end")
          temp[tempNum] = originalTD;
          return;
        }

        if (currentTD.next()[0].nodeName === 'TD') {
          if (currentTD.hasClass('selected')) {
          console.log("$td has selected class");
          currentTD.addClass('highlight');
          //$('audio').get(audio).play();
          audio.play();
          setTimeout(turnOffHighlight, 100, currentTD);
          }
          else {console.log("$td doesn't have selected class")
          }
          temp[tempNum] = currentTD.next();
        }  
      }
      var temp = rows.slice(0);
      //console.log(rows);
      //console.log(temp);


      //playLine(rows[0]);
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

    crashID = setInterval(function(){playLine(rows[0], rows[0], 0, crashAudio)}, 100);
    rideID = setInterval(function(){playLine(rows[1], rows[1], 1, rideAudio)}, 100);
    openHHID = setInterval(function(){playLine(rows[2], rows[2], 2, openHHAudio)}, 100);
    closedHHID = setInterval(function(){playLine(rows[3], rows[3], 3, closedHHAudio)}, 100);
    smallTomID = setInterval(function(){playLine(rows[4], rows[4], 4, smallTomAudio)}, 100);
    snareID = setInterval(function(){playLine(rows[5], rows[5], 5, snareAudio)}, 100);
    middleTomID = setInterval(function(){playLine(rows[6], rows[6], 6, middleTomAudio)}, 100);
    floorTomID = setInterval(function(){playLine(rows[7], rows[7], 7, floorTomAudio)}, 100);
    hhFootID = setInterval(function(){playLine(rows[8], rows[8], 8)}, 100);
    bassID = setInterval(function(){playLine(rows[9], rows[9], 9, bassAudio)}, 100);
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
    if (currentlyPlaying === true) {
      _.each(rowIDs, function(element) {
        console.log(element);  
        window.clearInterval(element);
      });
      currentlyPlaying = false;
      return;
    }
    else {
      play();
    }

  });

  var turnOffHighlight = function(td) {
    td.removeClass('highlight');
  }


  
  $('td').click(function() {
    $(this).toggleClass('selected');
  });
  /*
  $('#half').click(function() {

    $('.selected').attr('colspan','2');
    $('.selected').next().remove();
  });
  
  $('#whole').click(function() {

    $('.selected').attr('colspan','4');
    $('.selected').next().remove();
    $('.selected').next().remove();
    $('.selected').next().remove();
  });
  

  var canvas = document.getElementById("music-canvas");

  var renderer = new Vex.Flow.Renderer(canvas,
    Vex.Flow.Renderer.Backends.CANVAS);

  var ctx = renderer.getContext();

  var stave = new Vex.Flow.Stave(10, 0, 500);
  stave.addClef("treble").setContext(ctx).draw();

  $("#submit-note").on("click", function() {
    var letter = $("#letter").val();
    var octave = $("#octave").val();
    var pitchArray = [];
    var pitch = letter + "/" + octave;
    getAccidental();
    if (getAccidental() !== 'none') {
      pitch = letter + getAccidental() + "/" + octave;
    }
    pitchArray.push(pitch);
    var duration = $("#duration").val();
    var noteObject = {keys: pitchArray, duration: duration};
    var actualNote = new Vex.Flow.StaveNote(noteObject);
    if (getAccidental() !== 'none') {
      actualNote.addAccidental(0, new Vex.Flow.Accidental(getAccidental()));
    }
    noteData.push(actualNote);
  });

  var getAccidental = function() {
    var accidental = $("#accidental").val();
    if (accidental === "sharp") {
      accidental = '#';
    }
    if (accidental === "doubleSharp") {
      accidental = '##';
    }
    if (accidental === "natural") {
      accidental = 'n';
    }
    if (accidental === "flat") {
      accidental = 'b';
    }
    if (accidental === "doubleFlat") {
      accidental = 'bb';
    }
    if (accidental === "none") {
      accidental = 'none';
    }

    return accidental;
  }
    

  $("#submit-voice").on("click", function() {
    // Create a voice in 4/4
  var voice = new Vex.Flow.Voice({
    num_beats: 4,
    beat_value: 4,
    resolution: Vex.Flow.RESOLUTION
  });

  // Add notes to voice
  voice.addTickables(noteData);

  // Format and justify the notes to 500 pixels
  var formatter = new Vex.Flow.Formatter().
    joinVoices([voice]).format([voice], 500);

  // Render voice
  voice.draw(ctx, stave);

  });*/

        });

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

      







