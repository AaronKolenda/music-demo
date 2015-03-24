    var noteData = [];

$(document).ready(function(){
  $('td').click(function() {
    $(this).toggleClass('selected');
  });
  
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

  });





// Create the notes
  /*var notes = [
    // A quarter-note C.
    new Vex.Flow.StaveNote({ keys: ["c/4"], duration: "q" }),

    // A quarter-note D.
    new Vex.Flow.StaveNote({ keys: ["d/4"], duration: "q" }),

    // A quarter-note rest. Note that the key (b/4) specifies the vertical
    // position of the rest.
    new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "qr" }),

    // A C-Major chord.
    new Vex.Flow.StaveNote({ keys: ["c/4", "e/4", "g/4"], duration: "q" })
  ];

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
  voice.draw(ctx, stave);*/

   });