var Demos = {};
Demos.latin = {};
Demos.rock = {};
Demos.jazz = {};
Demos.funk = {};
Demos.metal = {};
Demos.punk = {};
Demos.bossaNova = {};
Demos.trap = {};
Demos.dubstep = {};
Demos.house = {};

//---------------Latin Demo----------------//

Demos.latin.rimshotNotes = [];
Demos.latin.cowbellNotes = [];
Demos.latin.splashNotes = [];
Demos.latin.crashNotes = [];
Demos.latin.rideNotes = [];
Demos.latin.openHHNotes = [];
Demos.latin.closedHHNotes = [];
Demos.latin.highTomNotes = [];
Demos.latin.smallTomNotes = [];
Demos.latin.snareNotes = [];
Demos.latin.middleTomNotes = [];
Demos.latin.floorTomNotes = [];
Demos.latin.footHH = [];
Demos.latin.bassNotes = [];

  _.each(Demos.latin, function(element) {

      _(32).times(function(){
        element.push(false);
      });
    })

Demos.latin.cowbellNotes[0] = true;
Demos.latin.cowbellNotes[3] = true;
Demos.latin.cowbellNotes[6] = true;
Demos.latin.cowbellNotes[10] = true;
Demos.latin.cowbellNotes[12] = true;
Demos.latin.cowbellNotes[16] = true;
Demos.latin.cowbellNotes[19] = true;
Demos.latin.cowbellNotes[22] = true;
Demos.latin.cowbellNotes[26] = true;
Demos.latin.cowbellNotes[28] = true;

Demos.latin.bassNotes[0] = true;
Demos.latin.bassNotes[8] = true;
Demos.latin.bassNotes[16] = true;
Demos.latin.bassNotes[24] = true;

Demos.latin.footHH[4] = true;
Demos.latin.footHH[12] = true;
Demos.latin.footHH[20] = true;
Demos.latin.footHH[28] = true;

Demos.latin.closedHHNotes[0] = true;
Demos.latin.closedHHNotes[14] = true;
Demos.latin.closedHHNotes[15] = true;
Demos.latin.closedHHNotes[16] = true;
Demos.latin.closedHHNotes[18] = true;
Demos.latin.closedHHNotes[30] = true;
Demos.latin.closedHHNotes[31] = true;

Demos.latin.snareNotes[0] = true;
Demos.latin.snareNotes[7] = true;
Demos.latin.snareNotes[16] = true;
Demos.latin.snareNotes[23] = true;

Demos.latin.floorTomNotes[14] = true;
Demos.latin.floorTomNotes[26] = true;
Demos.latin.floorTomNotes[28] = true;

Demos.latin.highTomNotes[0] = true;
Demos.latin.highTomNotes[3] = true;
Demos.latin.highTomNotes[4] = true;
Demos.latin.highTomNotes[11] = true;
Demos.latin.highTomNotes[12] = true;
Demos.latin.highTomNotes[16] = true;
Demos.latin.highTomNotes[19] = true;
Demos.latin.highTomNotes[20] = true;

Demos.latin.middleTomNotes[6] = true;

Demos.latin.smallTomNotes[22] = true;

Demos.latin.beatName = "Latin Demo";
Demos.latin.tempo = "100";
Demos.latin.timeSig = "4";


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
Demos.rock.timeSig = "4";

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

      _(24).times(function(){
        element.push(false);
      });
    })

Demos.jazz.bassNotes[0] = true;
Demos.jazz.bassNotes[6] = true;
Demos.jazz.bassNotes[12] = true;
Demos.jazz.bassNotes[18] = true;

Demos.jazz.splashNotes[0] = true;

Demos.jazz.openHHNotes[21] = true;

Demos.jazz.rideNotes[3] = true;
Demos.jazz.rideNotes[5] = true;
Demos.jazz.rideNotes[6] = true;
Demos.jazz.rideNotes[9] = true;
Demos.jazz.rideNotes[11] = true;
Demos.jazz.rideNotes[12] = true;
Demos.jazz.rideNotes[15] = true;
Demos.jazz.rideNotes[17] = true;
Demos.jazz.rideNotes[18] = true;

Demos.jazz.smallTomNotes[23] = true;

Demos.jazz.snareNotes[3] = true;
Demos.jazz.snareNotes[9] = true;
Demos.jazz.snareNotes[15] = true;
Demos.jazz.snareNotes[19] = true;
Demos.jazz.snareNotes[20] = true;
Demos.jazz.snareNotes[22] = true;

Demos.jazz.footHH[3] = true;
Demos.jazz.footHH[9] = true;
Demos.jazz.footHH[15] = true;

Demos.jazz.beatName = "Jazz Demo";
Demos.jazz.tempo = "80";
Demos.jazz.timeSig = "3";


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
Demos.funk.timeSig = "4";

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
Demos.metal.timeSig = "4";

//---------------Punk Demo----------------//


Demos.punk.rimshotNotes = [];
Demos.punk.cowbellNotes = [];
Demos.punk.splashNotes = [];
Demos.punk.crashNotes = [];
Demos.punk.rideNotes = [];
Demos.punk.openHHNotes = [];
Demos.punk.closedHHNotes = [];
Demos.punk.highTomNotes = [];
Demos.punk.smallTomNotes = [];
Demos.punk.snareNotes = [];
Demos.punk.middleTomNotes = [];
Demos.punk.floorTomNotes = [];
Demos.punk.footHH = [];
Demos.punk.bassNotes = [];

_.each(Demos.punk, function(element) {

      _(32).times(function(){
        element.push(false);
      });
    })



Demos.punk.snareNotes[2] = true;
Demos.punk.snareNotes[6] = true;
Demos.punk.snareNotes[10] = true;
Demos.punk.snareNotes[14] = true;
Demos.punk.snareNotes[18] = true;
Demos.punk.snareNotes[22] = true;
Demos.punk.snareNotes[23] = true;

Demos.punk.middleTomNotes[26] = true;
Demos.punk.middleTomNotes[27] = true;
Demos.punk.middleTomNotes[28] = true;
Demos.punk.middleTomNotes[29] = true;

Demos.punk.floorTomNotes[30] = true;
Demos.punk.floorTomNotes[31] = true;

Demos.punk.bassNotes[0] = true;
Demos.punk.bassNotes[3] = true;
Demos.punk.bassNotes[5] = true;
Demos.punk.bassNotes[8] = true;
Demos.punk.bassNotes[11] = true;
Demos.punk.bassNotes[13] = true;
Demos.punk.bassNotes[16] = true;
Demos.punk.bassNotes[19] = true;
Demos.punk.bassNotes[21] = true;
Demos.punk.bassNotes[24] = true;



Demos.punk.closedHHNotes[2] = true;
Demos.punk.closedHHNotes[4] = true;
Demos.punk.closedHHNotes[6] = true;
Demos.punk.closedHHNotes[8] = true;
Demos.punk.closedHHNotes[10] = true;
Demos.punk.closedHHNotes[12] = true;
Demos.punk.closedHHNotes[14] = true;
Demos.punk.closedHHNotes[16] = true;
Demos.punk.closedHHNotes[18] = true;
Demos.punk.closedHHNotes[20] = true;
Demos.punk.closedHHNotes[24] = true;


Demos.punk.crashNotes[0] = true;



Demos.punk.beatName = "Punk Demo";
Demos.punk.tempo = "170";
Demos.punk.timeSig = "4";

//---------------Bossa Nova Demo----------------//


Demos.bossaNova.rimshotNotes = [];
Demos.bossaNova.cowbellNotes = [];
Demos.bossaNova.splashNotes = [];
Demos.bossaNova.crashNotes = [];
Demos.bossaNova.rideNotes = [];
Demos.bossaNova.openHHNotes = [];
Demos.bossaNova.closedHHNotes = [];
Demos.bossaNova.highTomNotes = [];
Demos.bossaNova.smallTomNotes = [];
Demos.bossaNova.snareNotes = [];
Demos.bossaNova.middleTomNotes = [];
Demos.bossaNova.floorTomNotes = [];
Demos.bossaNova.footHH = [];
Demos.bossaNova.bassNotes = [];

_.each(Demos.bossaNova, function(element) {

      _(32).times(function(){
        element.push(false);
      });
    })

Demos.bossaNova.footHH[0] = true;
Demos.bossaNova.footHH[4] = true;
Demos.bossaNova.footHH[8] = true;
Demos.bossaNova.footHH[12] = true;
Demos.bossaNova.footHH[16] = true;
Demos.bossaNova.footHH[20] = true;
Demos.bossaNova.footHH[24] = true;
Demos.bossaNova.footHH[28] = true;

Demos.bossaNova.rideNotes[2] = true;
Demos.bossaNova.rideNotes[5] = true;
Demos.bossaNova.rideNotes[8] = true;
Demos.bossaNova.rideNotes[11] = true;
Demos.bossaNova.rideNotes[14] = true;
Demos.bossaNova.rideNotes[18] = true;
Demos.bossaNova.rideNotes[21] = true;
Demos.bossaNova.rideNotes[24] = true;
Demos.bossaNova.rideNotes[27] = true;
Demos.bossaNova.rideNotes[30] = true;

Demos.bossaNova.rimshotNotes[0] = true;
Demos.bossaNova.rimshotNotes[3] = true;
Demos.bossaNova.rimshotNotes[6] = true;
Demos.bossaNova.rimshotNotes[10] = true;
Demos.bossaNova.rimshotNotes[13] = true;
Demos.bossaNova.rimshotNotes[16] = true;
Demos.bossaNova.rimshotNotes[19] = true;
Demos.bossaNova.rimshotNotes[22] = true;
Demos.bossaNova.rimshotNotes[26] = true;
Demos.bossaNova.rimshotNotes[29] = true;

Demos.bossaNova.middleTomNotes[29] = true;
Demos.bossaNova.middleTomNotes[30] = true;

Demos.bossaNova.bassNotes[0] = true;
Demos.bossaNova.bassNotes[3] = true;
Demos.bossaNova.bassNotes[4] = true;
Demos.bossaNova.bassNotes[7] = true;
Demos.bossaNova.bassNotes[8] = true;
Demos.bossaNova.bassNotes[11] = true;
Demos.bossaNova.bassNotes[12] = true;
Demos.bossaNova.bassNotes[15] = true;
Demos.bossaNova.bassNotes[16] = true;
Demos.bossaNova.bassNotes[19] = true;
Demos.bossaNova.bassNotes[20] = true;
Demos.bossaNova.bassNotes[23] = true;
Demos.bossaNova.bassNotes[24] = true;
Demos.bossaNova.bassNotes[27] = true;
Demos.bossaNova.bassNotes[28] = true;
Demos.bossaNova.bassNotes[31] = true;

Demos.bossaNova.highTomNotes[22] = true;
Demos.bossaNova.highTomNotes[22] = true;

Demos.bossaNova.smallTomNotes[7] = true;
Demos.bossaNova.smallTomNotes[15] = true;
Demos.bossaNova.smallTomNotes[23] = true;

Demos.bossaNova.beatName = "Bossa Nova Demo";
Demos.bossaNova.tempo = "65";
Demos.bossaNova.timeSig = "4";

//---------------Trap Demo----------------//


Demos.trap.rimshotNotes = [];
Demos.trap.cowbellNotes = [];
Demos.trap.splashNotes = [];
Demos.trap.crashNotes = [];
Demos.trap.rideNotes = [];
Demos.trap.openHHNotes = [];
Demos.trap.closedHHNotes = [];
Demos.trap.highTomNotes = [];
Demos.trap.smallTomNotes = [];
Demos.trap.snareNotes = [];
Demos.trap.middleTomNotes = [];
Demos.trap.floorTomNotes = [];
Demos.trap.footHH = [];
Demos.trap.bassNotes = [];

_.each(Demos.trap, function(element) {

      _(32).times(function(){
        element.push(false);
      });
    })

Demos.trap.closedHHNotes[0] = true;
Demos.trap.closedHHNotes[4] = true;
Demos.trap.closedHHNotes[6] = true;
Demos.trap.closedHHNotes[10] = true;
Demos.trap.closedHHNotes[11] = true;
Demos.trap.closedHHNotes[13] = true;
Demos.trap.closedHHNotes[14] = true;
Demos.trap.closedHHNotes[15] = true;
Demos.trap.closedHHNotes[18] = true;
Demos.trap.closedHHNotes[24] = true;
Demos.trap.closedHHNotes[27] = true;
Demos.trap.closedHHNotes[30] = true;

Demos.trap.floorTomNotes[0] = true;
Demos.trap.floorTomNotes[14] = true;
Demos.trap.floorTomNotes[19] = true;
Demos.trap.floorTomNotes[29] = true;


Demos.trap.snareNotes[4] = true;
Demos.trap.snareNotes[12] = true;
Demos.trap.snareNotes[20] = true;


Demos.trap.rimshotNotes[17] = true;

Demos.trap.bassNotes[1] = true;
Demos.trap.bassNotes[9] = true;
Demos.trap.bassNotes[16] = true;
Demos.trap.bassNotes[22] = true;
Demos.trap.bassNotes[24] = true;
Demos.trap.bassNotes[27] = true;
Demos.trap.bassNotes[30] = true;


Demos.trap.beatName = "Trap Demo";
Demos.trap.tempo = "95";
Demos.trap.timeSig = "4";

//---------------Dubstep Demo----------------//


Demos.dubstep.rimshotNotes = [];
Demos.dubstep.cowbellNotes = [];
Demos.dubstep.splashNotes = [];
Demos.dubstep.crashNotes = [];
Demos.dubstep.rideNotes = [];
Demos.dubstep.openHHNotes = [];
Demos.dubstep.closedHHNotes = [];
Demos.dubstep.highTomNotes = [];
Demos.dubstep.smallTomNotes = [];
Demos.dubstep.snareNotes = [];
Demos.dubstep.middleTomNotes = [];
Demos.dubstep.floorTomNotes = [];
Demos.dubstep.footHH = [];
Demos.dubstep.bassNotes = [];

_.each(Demos.dubstep, function(element) {

      _(32).times(function(){
        element.push(false);
      });
    })

Demos.dubstep.closedHHNotes[4] = true;
Demos.dubstep.closedHHNotes[5] = true;
Demos.dubstep.closedHHNotes[6] = true;
Demos.dubstep.closedHHNotes[7] = true;
Demos.dubstep.closedHHNotes[13] = true;
Demos.dubstep.closedHHNotes[20] = true;
Demos.dubstep.closedHHNotes[21] = true;
Demos.dubstep.closedHHNotes[22] = true;
Demos.dubstep.closedHHNotes[24] = true;
Demos.dubstep.closedHHNotes[27] = true;
Demos.dubstep.closedHHNotes[29] = true;

Demos.dubstep.rideNotes[12] = true;
Demos.dubstep.rideNotes[26] = true;
Demos.dubstep.rideNotes[30] = true;

Demos.dubstep.openHHNotes[16] = true;

Demos.dubstep.bassNotes[0] = true;
Demos.dubstep.bassNotes[14] = true;
Demos.dubstep.bassNotes[16] = true;


Demos.dubstep.snareNotes[8] = true;
Demos.dubstep.snareNotes[24] = true;

Demos.dubstep.middleTomNotes[30] = true;

Demos.dubstep.beatName = "Dubstep Demo";
Demos.dubstep.tempo = "137";
Demos.dubstep.timeSig = "4";

//---------------House Demo----------------//


Demos.house.rimshotNotes = [];
Demos.house.cowbellNotes = [];
Demos.house.splashNotes = [];
Demos.house.crashNotes = [];
Demos.house.rideNotes = [];
Demos.house.openHHNotes = [];
Demos.house.closedHHNotes = [];
Demos.house.highTomNotes = [];
Demos.house.smallTomNotes = [];
Demos.house.snareNotes = [];
Demos.house.middleTomNotes = [];
Demos.house.floorTomNotes = [];
Demos.house.footHH = [];
Demos.house.bassNotes = [];

_.each(Demos.house, function(element) {

      _(32).times(function(){
        element.push(false);
      });
    })

Demos.house.closedHHNotes[2] = true;
Demos.house.closedHHNotes[6] = true;
Demos.house.closedHHNotes[10] = true;
Demos.house.closedHHNotes[14] = true;
Demos.house.closedHHNotes[18] = true;
Demos.house.closedHHNotes[22] = true;
Demos.house.closedHHNotes[26] = true;

Demos.house.openHHNotes[30] = true;

Demos.house.bassNotes[0] = true;
Demos.house.bassNotes[4] = true;
Demos.house.bassNotes[8] = true;
Demos.house.bassNotes[12] = true;
Demos.house.bassNotes[16] = true;
Demos.house.bassNotes[20] = true;
Demos.house.bassNotes[24] = true;
Demos.house.bassNotes[28] = true;
Demos.house.bassNotes[30] = true;


Demos.house.snareNotes[4] = true;
Demos.house.snareNotes[12] = true;
Demos.house.snareNotes[20] = true;
Demos.house.snareNotes[28] = true;

Demos.house.beatName = "House Demo";
Demos.house.tempo = "125";
Demos.house.timeSig = "4";
