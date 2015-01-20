"use strict";

$(document).ready(function() {

  $.getJSON('data.json', function(tracks) {
    var $tracksTemplate = $('#tracksTemplate').html();
    var newHTML = Mustache.to_html($tracksTemplate, tracks);
    $('.tracks').html(newHTML);
  });

  $('.container').on('click', '.fa-play', function() {
    $('.fa').removeClass('fa-stop').addClass('fa-play');
    $(this).removeClass('fa-play').addClass('fa-stop');
    var song_id = $(this).data('id');
    var song_title = $(this).data('title');
    document.getElementById(song_id).src = "";
    var song_src = $(this).data('src');
    document.getElementById(song_id).src = "tracks/" + song_src + ".mp3";
    document.getElementById(song_id).play();
    $("#heading").text("Now playing: " + song_title);
  });

  $('.container').on('click', '.fa-stop', function() {
    $(this).removeClass('fa-stop').addClass('fa-play');
    var song_id = $(this).data('id');
    document.getElementById(song_id).pause();
    document.getElementById(song_id).src = "";
    $("#heading").text("Select a song!");
  });

});
