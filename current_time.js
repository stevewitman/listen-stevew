"use strict";$(document).ready(function() {  $.getJSON('data-80s.txt', function(tracks) {    var $tracksTemplate = $('#tracksTemplate').html();    var newHTML = Mustache.to_html($tracksTemplate, tracks);    $('.tracks').html(newHTML);  });  $('.container').on('click', '.fa-play', function() {    $('.fa').removeClass('fa-stop').addClass('fa-play');    $(this).removeClass('fa-play').addClass('fa-stop');    var song_id = $(this).data('id');    var song_title = $(this).data('title');		$('#player').prop("currentTime",0);    $('#player').trigger("play");    $("#heading").text("Now playing: " + song_title);  });  $('.container').on('click', '.fa-stop', function() {    $(this).removeClass('fa-stop').addClass('fa-play');    $("#player").trigger("pause");    $("#heading").text("Select a song!");  });});