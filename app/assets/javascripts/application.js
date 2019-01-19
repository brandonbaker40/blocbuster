// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require materialize
//= require materialize-sprockets

$(document).ready(function(){
  var arrayOfIds = [];
  var pancakes = document.getElementsByClassName('invisible_tv_show_ids');
  for (var i = 0; i < pancakes.length; i++) {
    arrayOfIds.push(pancakes[i].innerHTML);
   }
   console.log(arrayOfIds);

  var arrayOfNames = [];
  var tacos = document.getElementsByClassName('name');
  for(var j = 0; j < tacos.length; j++) {
    arrayOfNames.push(tacos[j].innerHTML);
  }
  console.log(arrayOfNames);

  var keys = arrayOfNames;
  var values = arrayOfIds;
  var yummy = {};
  keys.forEach((key, i) => yummy[key] = values[i]);
  barrel = Object.entries(yummy).map(([name, id]) => ({name, id}));
  console.log(barrel);

    $('input.autocomplete').autocomplete({
      data: yummy,
      onAutocomplete: function(val) {
          // Callback function when value is autcompleted.
          var value = $('input.autocomplete').val();
          var foundObject = barrel.filter(obj => obj.name === value)[0]["id"];

          var link = window.open(`/tv_shows/${foundObject}/view_it`)

          // if(value == "Apple"){
          // 		var link = window.open('http://www.apple.com', '_blank');
          // 		link.location;
          // } else if(value == "Google"){
          // 		var link = window.open('http://www.google.com', '_blank');
          // 		link.location;
          // } else {
          // 		var link = window.open('http://www.microsoft.com', '_blank');
          // 		link.location;
          //     console.log(link.location);
          // }
        },
        limit: 10
    });
  });
