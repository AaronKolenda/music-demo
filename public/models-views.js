 var Beat  = Backbone.Model.extend({

    defaults: {
      mousedown: false,
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
            "mousedown td": "mouseDown",
            "mouseover td": "mouseOver",
            "mouseup": "mouseUp"},

  tagName: "div",

  initialize: function(model) {
    this.model = model;
    this.render();
  },

  render: function() {
    this.$el.html(templates.beatInfo(this.model.viewDetails()));
    console.log(this.model.get('isCurrentlyPlaying'));
  },

  mouseDown: function(ev) {
    ev.preventDefault();
    $(ev.currentTarget).toggleClass('selected');
    this.mousedown = true;
  },

  mouseOver: function(ev) {
    ev.preventDefault();
    if (this.mousedown) {
      $(ev.currentTarget).toggleClass('selected');
    }
  },

  mouseUp: function(ev) {
    ev.preventDefault();
    this.mousedown = false;
  },

  save: function() {
  var notes = {};   //notes will be sent to the server
  notes.crashNotes = [];
  notes.rideNotes = [];
  notes.openHHNotes = [];
  notes.closedHHNotes = [];
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
},

playBeat: function() {
    if (this.tempo < 0 || this.tempo > 400) {
      alert("you must chose a tempo in between 1 and 400");
      return;
    }

    if (this.model.get('isCurrentlyPlaying') === true) {
      _.each(rowIDs, function(element) {
        window.clearInterval(element);
      });
      this.model.set('isCurrentlyPlaying', false);
      console.log(this.model.get('isCurrentlyPlaying'));
      return;
    }
    else {
      play();
      this.model.set('isCurrentlyPlaying', true);
      console.log(this.model.get('isCurrentlyPlaying'));
    }
  }

});


