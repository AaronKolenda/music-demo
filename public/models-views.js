 var Beat  = Backbone.Model.extend({

    defaults: {
      isCurrentlyPlaying: false
    },

  viewDetails: function() {
    var details = this.toJSON();
    return details;
  },


});

 var BeatView = Backbone.View.extend({

  events: { "click #save": "save",
            "click #play-pause": "playBeat",
            "mousedown #beat td": "mouseDown",
            "mouseover #beat td": "mouseOver",
            "mouseup": "mouseUp",
            "change #tempo":  "tempoChanged"},

  tagName: "div",

  initialize: function(model) {
    this.model = model;
    this.render();
  },

  render: function() {
    this.$el.html(templates.beatInfo(this.model.viewDetails()));
  },

  mouseDown: function(ev) {
    ev.preventDefault();
    $(ev.currentTarget).toggleClass('selected');
  },

  mouseOver: function(ev) {
    ev.preventDefault();
    if (ev.originalEvent.which === 1) {
      $(ev.currentTarget).toggleClass('selected');
    }

  },

  mouseUp: function(ev) {
    ev.preventDefault();
  },

  save: function() {

    if (this.model.get('tempo') < 0 || this.model.get('tempo') > 400) {
      alert("you must chose a tempo in between 1 and 400");
      return;
    }

    var notes = {};   //notes will be sent to the server
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
    //notesFromServer = notes;
},

playBeat: function() {
    if (this.model.get('tempo') < 0 || this.model.get('tempo') > 400) {
      alert("you must chose a tempo in between 1 and 400");
      return;
    }

    if (this.model.get('isCurrentlyPlaying') === true) {
      _.each(rowIDs, function(element) {
        window.clearInterval(element);
      });
      this.model.set('isCurrentlyPlaying', false);
      return;
    }
    else {
      play();
      this.model.set('isCurrentlyPlaying', true);
    }
  },

tempoChanged: function() {
  console.log("in tempo changed");
  var newTempo = $("#tempo").val();
  this.model.set('tempo', newTempo);
}

});

var Router = Backbone.Router.extend({

  routes: {
    "": "displayLanding",
    "user/:user_id": "showBeatsList",
    "user/:user_id/:beat_name": "showBeat",
    "demos/:demo": "displayDemo",
  },

  displayLanding: function(){
    $("#loaded-beat").html("");
    var allNotes = {};
    allNotes.rimshotNotes = [];
    allNotes.cowbellNotes = [];
    allNotes.splashNotes = [];
    allNotes.crashNotes = [];
    allNotes.rideNotes = [];
    allNotes.openHHNotes = [];
    allNotes.closedHHNotes = [];
    allNotes.highTomNotes = [];
    allNotes.smallTomNotes = [];
    allNotes.snareNotes = [];
    allNotes.middleTomNotes = [];
    allNotes.floorTomNotes = [];
    allNotes.footHH = [];
    allNotes.bassNotes = [];

    _.each(allNotes, function(element) {

      _(32).times(function(){
        element.push(false);
      });
    })

    allNotes.beatName = "";
    allNotes.tempo = "100";

    var demoModel = new Beat(allNotes);
    var demoView = new BeatView(demoModel);
    console.log(demoView);
    $("#loaded-beat").append(demoView.$el);
  },

  displayDemo: function(demo){
    $("#loaded-beat").html("");
    var demoModel = new Beat(Demos[demo]);
    var demoView = new BeatView(demoModel);
    console.log(demoView);
    $("#loaded-beat").append(demoView.$el);
  },

  showBeatsList: function() {

  },

  showBeat: function(page) {
    
  }

});

