 var Beat  = Backbone.Model.extend({

    defaults: {
      isCurrentlyPlaying: false
    },

  viewDetails: function() {
    var details = this.toJSON();
    return details;
  },


});

 var DemoView = Backbone.View.extend({

  tagName: "div",

  className: "demo-wrapper",

  initialize: function(model) {
    this.render();
  },

  render: function() {
    this.$el.html(templates.demoInfo());
  },

});

var ResultView = Backbone.View.extend({

  events: { "click #close": "closeResult"},

  tagName: "div",

  className: "result-wrapper",

  initialize: function(url) {
    this.url = url;
    this.render();
  },

  render: function() {
    this.$el.html(templates.resultInfo({ url: this.url }));
  },

  closeResult: function(ev) {
    ev.preventDefault();
    this.$el.hide();
  }

});

 var BeatView = Backbone.View.extend({

  events: { "click #save": "save",
            "click #play-pause": "playBeat",
            "mousedown #beat td": "mouseDown",
            "mouseover #beat td": "mouseOver",
            "mouseup": "mouseUp",
            "change #tempo":  "tempoChanged",
            "hover #save":  "saveHover",
            "change #timeSig": "changeTime"},

  tagName: "div",

  className: "beat-wrapper",

  initialize: function(model) {
    this.model = model;
    this.render();
  },

  render: function() {
    this.$el.html(templates.beatInfo(this.model.viewDetails()));
  },

  changeTime: function() {

    var oldTime = this.model.get('timeSig');

    var newNotes = {};   //this will be the new model to render after timeSig changed
    newNotes.rimshotNotes = [];
    newNotes.cowbellNotes = [];
    newNotes.splashNotes = [];
    newNotes.crashNotes = [];
    newNotes.rideNotes = [];
    newNotes.openHHNotes = [];
    newNotes.closedHHNotes = [];
    newNotes.highTomNotes = [];
    newNotes.smallTomNotes = [];
    newNotes.snareNotes = [];
    newNotes.middleTomNotes = [];
    newNotes.floorTomNotes = [];
    newNotes.footHH = [];
    newNotes.bassNotes = [];

    var tableRows = $("#beat tr");

      var counter = 0;
    _.each(newNotes, function(eacharray, index) {
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
    newNotes.tempo = $('#tempo').val();
    newNotes.beatName = $('#name').val();
    newNotes.timeSig = $('#timeSig').val();

    var newModel = new Beat(newNotes);

    this.model = newModel;

    //this resets the time back to 4/4 before changing it

    if (oldTime === "3") {
    _.each(this.model.attributes, function(value, key) {
          if (key !== "beatName" && key !== "tempo" && key !== "timeSig" && key !== "isCurrentlyPlaying") {
            _(8).times(function(){ 
              value.push(false); 
            });
          }
      });
    }
    if (oldTime === "5") {
    _.each(this.model.attributes, function(value, key) {
          if (key !== "beatName" && key !== "tempo" && key !== "timeSig" && key !== "isCurrentlyPlaying") {
            _(12).times(function(){ 
              value.push(false); 
            });
          }
      });
    }
    if (oldTime === "7") {
    _.each(this.model.attributes, function(value, key) {
          if (key !== "beatName" && key !== "tempo" && key !== "timeSig" && key !== "isCurrentlyPlaying") {
            _(4).times(function(){ 
              value.push(false); 
            });
          }
      });
    }
    
    //this now sets the new time

    if ($("#timeSig").val() === "4") {
      this.render();
    }
    if ($("#timeSig").val() === "3") {
      var newData = _.each(this.model.attributes, function(value, key) {
          if (key !== "beatName" && key !== "tempo" && key !== "timeSig" && key !== "isCurrentlyPlaying") {
            _(8).times(function(){ 
              value.pop(); 
            });
          }
      });
    }
    if ($("#timeSig").val() === "5") {
      var newData = _.each(this.model.attributes, function(value, key) {
          if (key !== "beatName" && key !== "tempo" && key !== "timeSig"  && key !== "isCurrentlyPlaying") {
            _(12).times(function(){ 
              value.pop(); 
            });
          }
      });
    }
    if ($("#timeSig").val() === "7") {
      var newData = _.each(this.model.attributes, function(value, key) {
          if (key !== "beatName" && key !== "tempo" && key !== "timeSig"  && key !== "isCurrentlyPlaying") {
            _(4).times(function(){ 
              value.pop(); 
            });
          }
      });
    }

    this.model.set('timeSig', $("#timeSig").val());

    this.render();
    $("#timeSig").val(this.model.get('timeSig'));

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

  save: function(ev) {
    event.preventDefault()
    
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
    notes.timeSig = $('#timeSig').val(); 
    console.log(notes);

    $.ajax({
      url: "http://shelf-life.herokuapp.com/beat",
      method: "POST",
      data: notes,
      success: function(data) {
        var beatUrlString = ("localhost:3000/#/beat/" + data.id);
        var resultView = new ResultView(beatUrlString);
        console.log(resultView);
        $('body').append(resultView.$el);
      },
      error: function() {
        console.log("post failed");
      }

    });

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
      $("#play-pause").html('<img src="/images/play.png" class="play"/>');
      return;
    }
    else {
      play();
      $("#play-pause").html('<img src="/images/stop.png" class="stop"/>');
      this.model.set('isCurrentlyPlaying', true);
    }
  },

tempoChanged: function() {
  var newTempo = $("#tempo").val();
  this.model.set('tempo', newTempo);
}

});

var Router = Backbone.Router.extend({

  routes: {
    "": "displayLanding",
    "demos/:demo": "displayDemo",
    "demopage": "displayDemoPage",
    "beat/:id": "displaySavedBeat"
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
    $("#loaded-beat").append(demoView.$el);
  },

  displayDemo: function(demo){
    $("#loaded-beat").html("");
    var demoModel = new Beat(Demos[demo]);
    var demoView = new BeatView(demoModel);
    $("#loaded-beat").append(demoView.$el);
    $("#timeSig").val(demoModel.get('timeSig'));
  },

  displayDemoPage: function(){
    $("#loaded-beat").html("");
    var demoPageView = new DemoView;
    $("#loaded-beat").append(demoPageView.$el);
  },

  displaySavedBeat: function(id){
    $.ajax({
      url: "http://shelf-life.herokuapp.com/beat/" + id,
      method: "GET",
      success: function(data) {

        //this converts the strings that were stored back into booleans
        var newData = _.each(data, function(value, key) {

          if (key !== "beatName" && key !== "tempo") {

             _.each(value, function(element, index) {

              if (element === "true") {
                console.log("element is ", element);
                element = true;
                console.log("now element is ", element);
              }
              if (element === "false") {
                console.log("false element is ", element);
                element = false;
                console.log("now false element is ", element);
              }

              value[index] = element;
            });

          }

        });

        console.log(newData);

        $("#loaded-beat").html("");
        var savedBeatModel = new Beat(data);
        var savedBeatView = new BeatView(savedBeatModel);
        $("#loaded-beat").append(savedBeatView.$el);
        $("#timeSig").val(savedBeatModel.get('timeSig'));
      },
      error: function() {
        console.log("get failed");
      }

    });

    
  },

});

