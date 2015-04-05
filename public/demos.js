var Demos = {};
Demos.latin = {};
Demos.rock = {};
Demos.jazz = {};
Demos.funk = {};
Demos.metal = {};

Demos.latin.rimshotNotes = [];
Demos.latin.cowbellNotes = [true, false, false, true,
                      false, false, true, false,
                      false, false, true, false,
                      true, false, false, false,
                      true, false, false, true,
                      false, false, true, false,
                      false, false, true, false,
                      true, false, false, false];
Demos.latin.splashNotes = [];
Demos.latin.crashNotes = [];
Demos.latin.rideNotes = [];
Demos.latin.openHHNotes = [];
Demos.latin.closedHHNotes = [true, false, false, false,
                      false, false, false, false,
                      false, false, false, false,
                      false, false, true, true,
                      true, false, true, false,
                      false, false, false, false,
                      false, false, false, false,
                      false, false, true, true];
Demos.latin.highTomNotes = [true, false, false, true,
                      true, false, false, false,
                      false, false, false, true,
                      true, false, false, false,
                      true, false, false, true,
                      true, false, false, false,
                      false, false, false, false,
                      false, false, false, false];
Demos.latin.smallTomNotes = [false, false, false, false,
                      false, false, false, false,
                      false, false, false, false,
                      false, false, false, false,
                      false, false, false, false,
                      false, false, true, false,
                      false, false, false, false,
                      false, false, false, false];
Demos.latin.snareNotes = [true, false, false, false,
                      false, false, false, true,
                      false, false, false, false,
                      false, false, false, false,
                      true, false, false, false,
                      false, false, false, true,
                      false, false, false, false,
                      false, false, false, false];
Demos.latin.middleTomNotes = [false, false, false, false,
                      false, false, true, false,
                      false, false, false, false,
                      false, false, false, false,
                      false, false, false, false,
                      false, false, false, false,
                      false, false, false, false,
                      false, false, false, false];
Demos.latin.floorTomNotes = [false, false, false, false,
                      false, false, false, false,
                      false, false, false, false,
                      false, false, true, false,
                      false, false, false, false,
                      false, false, false, false,
                      false, false, true, false,
                      true, false, false, false];
Demos.latin.footHH = [false, false, false, false,
                      true, false, false, false,
                      false, false, false, false,
                      true, false, false, false,
                      false, false, false, false,
                      true, false, false, false,
                      false, false, false, false,
                      true, false, false, false];
Demos.latin.bassNotes = [true, false, false, false,
                      false, false, false, false,
                      true, false, false, false,
                      false, false, false, false,
                      true, false, false, false,
                      false, false, false, false,
                      true, false, false, false,
                      false, false, false, false];

  _(32).times(function(){
    Demos.latin.splashNotes.push(false);
});
  _(32).times(function(){
    Demos.latin.crashNotes.push(false);
});
  _(32).times(function(){
    Demos.latin.rideNotes.push(false);
});
  _(32).times(function(){
    Demos.latin.openHHNotes.push(false);
});
  _(32).times(function(){
    Demos.latin.rimshotNotes.push(false);
});

Demos.latin.beatName = "Latin Beat";
Demos.latin.tempo = "100";

//---------------Rock Demo----------------//


    Demos.rock.rimshotNotes = [];
    Demos.rock.cowbellNotes = [];
    Demos.rock.splashNotes = [];
    Demos.rock.crashNotes = [];
    Demos.rock.rideNotes = [];
    Demos.rock.openHHNotes = [];
    Demos.rock.closedHHNotes = [];
    Demos.rock.highTomNotes = [];
    Demos.rock.smallTomNotes = [];
    Demos.rock.snareNotes = [];
    Demos.rock.middleTomNotes = [];
    Demos.rock.floorTomNotes = [];
    Demos.rock.footHH = [];
    Demos.rock.bassNotes = [];

_.each(Demos.rock, function(element) {

      _(32).times(function(){
        element.push(false);
      });
    })

Demos.rock.bassNotes[0] = true;
Demos.rock.bassNotes[2] = true;
Demos.rock.bassNotes[7] = true;
Demos.rock.bassNotes[8] = true;
Demos.rock.bassNotes[10] = true;
Demos.rock.bassNotes[16] = true;
Demos.rock.bassNotes[18] = true;
Demos.rock.bassNotes[22] = true;
Demos.rock.bassNotes[24] = true;
Demos.rock.bassNotes[26] = true;

Demos.rock.closedHHNotes[2] = true;
Demos.rock.closedHHNotes[4] = true;
Demos.rock.closedHHNotes[6] = true;
Demos.rock.closedHHNotes[8] = true;
Demos.rock.closedHHNotes[10] = true;
Demos.rock.closedHHNotes[12] = true;
Demos.rock.closedHHNotes[14] = true;
Demos.rock.closedHHNotes[16] = true;
Demos.rock.closedHHNotes[18] = true;
Demos.rock.closedHHNotes[20] = true;
Demos.rock.closedHHNotes[22] = true;
Demos.rock.closedHHNotes[24] = true;
Demos.rock.closedHHNotes[26] = true;

Demos.rock.snareNotes[4] = true;
Demos.rock.snareNotes[12] = true;
Demos.rock.snareNotes[20] = true;
Demos.rock.snareNotes[28] = true;
Demos.rock.snareNotes[29] = true;
Demos.rock.snareNotes[30] = true;
Demos.rock.snareNotes[31] = true;

Demos.rock.crashNotes[0] = true;

Demos.rock.beatName = "Rock Demo";
Demos.rock.tempo = "100";

//---------------Jazz Demo----------------//


    Demos.jazz.rimshotNotes = [];
    Demos.jazz.cowbellNotes = [];
    Demos.jazz.splashNotes = [];
    Demos.jazz.crashNotes = [];
    Demos.jazz.rideNotes = [];
    Demos.jazz.openHHNotes = [];
    Demos.jazz.closedHHNotes = [];
    Demos.jazz.highTomNotes = [];
    Demos.jazz.smallTomNotes = [];
    Demos.jazz.snareNotes = [];
    Demos.jazz.middleTomNotes = [];
    Demos.jazz.floorTomNotes = [];
    Demos.jazz.footHH = [];
    Demos.jazz.bassNotes = [];

_.each(Demos.jazz, function(element) {

      _(32).times(function(){
        element.push(false);
      });
    })

Demos.jazz.bassNotes[0] = true;
Demos.jazz.bassNotes[8] = true;
Demos.jazz.bassNotes[16] = true;
Demos.jazz.bassNotes[24] = true;

Demos.jazz.splashNotes[0] = true;

Demos.jazz.rideNotes[4] = true;
Demos.jazz.rideNotes[7] = true;
Demos.jazz.rideNotes[9] = true;
Demos.jazz.rideNotes[12] = true;
Demos.jazz.rideNotes[14] = true;
Demos.jazz.rideNotes[15] = true;
Demos.jazz.rideNotes[16] = true;
Demos.jazz.rideNotes[20] = true;
Demos.jazz.rideNotes[23] = true;
Demos.jazz.rideNotes[24] = true;
Demos.jazz.rideNotes[25] = true;
Demos.jazz.rideNotes[27] = true;
Demos.jazz.rideNotes[30] = true;

Demos.jazz.smallTomNotes[18] = true;
Demos.jazz.smallTomNotes[19] = true;

Demos.jazz.snareNotes[4] = true;
Demos.jazz.snareNotes[12] = true;
Demos.jazz.snareNotes[20] = true;
Demos.jazz.snareNotes[23] = true;
Demos.jazz.snareNotes[26] = true;
Demos.jazz.snareNotes[29] = true;
Demos.jazz.snareNotes[31] = true;

Demos.jazz.footHH[4] = true;
Demos.jazz.footHH[12] = true;
Demos.jazz.footHH[20] = true;
Demos.jazz.footHH[28] = true;

Demos.jazz.beatName = "Jazz Demo";
Demos.jazz.tempo = "80";


//---------------Funk Demo----------------//


    Demos.funk.rimshotNotes = [];
    Demos.funk.cowbellNotes = [];
    Demos.funk.splashNotes = [];
    Demos.funk.crashNotes = [];
    Demos.funk.rideNotes = [];
    Demos.funk.openHHNotes = [];
    Demos.funk.closedHHNotes = [];
    Demos.funk.highTomNotes = [];
    Demos.funk.smallTomNotes = [];
    Demos.funk.snareNotes = [];
    Demos.funk.middleTomNotes = [];
    Demos.funk.floorTomNotes = [];
    Demos.funk.footHH = [];
    Demos.funk.bassNotes = [];

_.each(Demos.funk, function(element) {

      _(32).times(function(){
        element.push(false);
      });
    })

Demos.funk.bassNotes[0] = true;
Demos.funk.bassNotes[8] = true;
Demos.funk.bassNotes[13] = true;
Demos.funk.bassNotes[15] = true;
Demos.funk.bassNotes[16] = true;
Demos.funk.bassNotes[24] = true;
Demos.funk.bassNotes[31] = true;

Demos.funk.rideNotes[0] = true;
Demos.funk.rideNotes[31] = true;

Demos.funk.smallTomNotes[30] = true;

Demos.funk.snareNotes[1] = true;
Demos.funk.snareNotes[4] = true;
Demos.funk.snareNotes[6] = true;
Demos.funk.snareNotes[7] = true;
Demos.funk.snareNotes[9] = true;
Demos.funk.snareNotes[12] = true;
Demos.funk.snareNotes[17] = true;
Demos.funk.snareNotes[20] = true;
Demos.funk.snareNotes[22] = true;
Demos.funk.snareNotes[23] = true;
Demos.funk.snareNotes[25] = true;
Demos.funk.snareNotes[28] = true;
Demos.funk.snareNotes[29] = true;

Demos.funk.closedHHNotes[2] = true;
Demos.funk.closedHHNotes[3] = true;
Demos.funk.closedHHNotes[5] = true;
Demos.funk.closedHHNotes[8] = true;
Demos.funk.closedHHNotes[10] = true;
Demos.funk.closedHHNotes[11] = true;
Demos.funk.closedHHNotes[16] = true;
Demos.funk.closedHHNotes[18] = true;
Demos.funk.closedHHNotes[19] = true;
Demos.funk.closedHHNotes[21] = true;
Demos.funk.closedHHNotes[24] = true;
Demos.funk.closedHHNotes[26] = true;
Demos.funk.closedHHNotes[27] = true;

Demos.funk.openHHNotes[13] = true;


Demos.funk.beatName = "Funk Demo";
Demos.funk.tempo = "110";

//---------------Metal Demo----------------//


    Demos.metal.rimshotNotes = [];
    Demos.metal.cowbellNotes = [];
    Demos.metal.splashNotes = [];
    Demos.metal.crashNotes = [];
    Demos.metal.rideNotes = [];
    Demos.metal.openHHNotes = [];
    Demos.metal.closedHHNotes = [];
    Demos.metal.highTomNotes = [];
    Demos.metal.smallTomNotes = [];
    Demos.metal.snareNotes = [];
    Demos.metal.middleTomNotes = [];
    Demos.metal.floorTomNotes = [];
    Demos.metal.footHH = [];
    Demos.metal.bassNotes = [];

_.each(Demos.metal, function(element) {

      _(32).times(function(){
        element.push(false);
      });
    })



Demos.metal.rideNotes[22] = true;

Demos.metal.splashNotes[26] = true;

Demos.metal.snareNotes[4] = true;
Demos.metal.snareNotes[12] = true;
Demos.metal.snareNotes[20] = true;
Demos.metal.snareNotes[22] = true;

Demos.metal.middleTomNotes[28] = true;
Demos.metal.middleTomNotes[29] = true;

Demos.metal.floorTomNotes[30] = true;
Demos.metal.floorTomNotes[31] = true;

Demos.metal.bassNotes[0] = true;
Demos.metal.bassNotes[1] = true;
Demos.metal.bassNotes[2] = true;
Demos.metal.bassNotes[3] = true;
Demos.metal.bassNotes[5] = true;
Demos.metal.bassNotes[6] = true;
Demos.metal.bassNotes[7] = true;
Demos.metal.bassNotes[8] = true;
Demos.metal.bassNotes[9] = true;
Demos.metal.bassNotes[10] = true;
Demos.metal.bassNotes[11] = true;
Demos.metal.bassNotes[13] = true;
Demos.metal.bassNotes[14] = true;
Demos.metal.bassNotes[15] = true;
Demos.metal.bassNotes[16] = true;
Demos.metal.bassNotes[17] = true;
Demos.metal.bassNotes[18] = true;
Demos.metal.bassNotes[19] = true;
Demos.metal.bassNotes[21] = true;
Demos.metal.bassNotes[24] = true;
Demos.metal.bassNotes[25] = true;
Demos.metal.bassNotes[26] = true;
Demos.metal.bassNotes[27] = true;


Demos.metal.closedHHNotes[4] = true;
Demos.metal.closedHHNotes[8] = true;
Demos.metal.closedHHNotes[12] = true;
Demos.metal.closedHHNotes[16] = true;
Demos.metal.closedHHNotes[20] = true;


Demos.metal.crashNotes[0] = true;
Demos.metal.crashNotes[24] = true;


Demos.metal.beatName = "Metal Demo";
Demos.metal.tempo = "120";





