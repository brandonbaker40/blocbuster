$(document).ready(function(){
  var idsOnPage = [];
  var tvShowIds = document.getElementsByClassName('invisible_tv_show_ids');
  for (var i = 0; i < tvShowIds.length; i++) {
    idsOnPage.push(tvShowIds[i].innerHTML);
   }
   console.log(idsOnPage);

  var showNamesOnPage = [];
  var tvShowNames = document.getElementsByClassName('name');
  for(var j = 0; j < tvShowNames.length; j++) {
    showNamesOnPage.push(tvShowNames[j].innerHTML);
  }
  console.log(showNamesOnPage);

  var keys = showNamesOnPage;
  var values = idsOnPage;
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
