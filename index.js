    //var noteData = [];
   
$(document).on("ready", function(){
 var $td = $("#startRow");


      var playLine = function() {
        //console.log($td[0].nextElementSibling);

        if ($td[0].nextElementSibling === null) {
          if ($td.hasClass('selected')) {
          console.log("$td has selected class");
          }
          else {console.log("$td doesn't have selected class")
          }
          console.log("it stopped")
          window.clearInterval(intervalID);
          return;
        }

        if ($td.next()[0].nodeName === 'TD') {
          //console.log("it stopp");
          if ($td.hasClass('selected')) {
          console.log("$td has selected class");
          }
          else {console.log("$td doesn't have selected class")
          }
          $td = $td.next()
        //console.log($td);
        }  
      }


var intervalID = setInterval(playLine, 1000);

  
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

      







