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

          var link = window.location.replace(`/tv_shows/${foundObject}/view_it`)
        },
        limit: 10
    });
  });
