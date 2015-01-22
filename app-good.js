"use strict";

var App = {
  updateHeading: function (title) {
    $("#heading").text(title);
  },

  populateTracks: function (tracks) {
    var $tracksTemplate = $('#tracksTemplate').html();
    var newHTML = Mustache.to_html($tracksTemplate, tracks);
    $('.tracks').html(newHTML);
  },

  playTrack: function() {
    $('.fa').removeClass('fa-stop').addClass('fa-play');
    var $this = $(this);
    $this.removeClass('fa-play').addClass('fa-stop');
    var song_id = $this.data('id');
    var song_title = $this.data('title');
    var song_src_path = "tracks/" + $this.data('src') + ".mp3";
    $("#player").attr("src",song_src_path).get(0).play();
    App.updateHeading("Now playing: " + song_title);
  },

  stopTrack: function() {
    $(this).removeClass('fa-stop').addClass('fa-play');
    $("#player").trigger("pause");
    App.updateHeading("Select a song!");
  }
};

$(document).ready(function() {

  $.getJSON('data.json', App.populateTracks);

  $('.container').on('click', '.fa-play', App.playTrack);

  $('.container').on('click', '.fa-stop', App.stopTrack);
});
