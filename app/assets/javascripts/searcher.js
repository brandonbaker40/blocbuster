$(document).ready(function(){

  // collect ids from page
  var tvShowIds = [];
  var idsOnPage = document.getElementsByClassName('invisible_tv_show_ids');
  for (var i = 0; i < idsOnPage.length; i++) {
    tvShowIds.push(idsOnPage[i].innerHTML);
   }

  // collect show names from page
  var tvShowNames = [];
  var showNamesOnPage = document.getElementsByClassName('name');
  for(var j = 0; j < showNamesOnPage.length; j++) {
    tvShowNames.push(showNamesOnPage[j].innerHTML);
  }

  // copy arrays to new vars and initialize empty object for autocomplete func
  var keys = tvShowNames;
  var values = tvShowIds;
  var localTvShows = {};

  // merge ids and show names to create an object for autocomplete func
  keys.forEach((key, i) => localTvShows[key] = values[i]);
  tvShowMap = Object.entries(localTvShows).map(([name, id]) => ({name, id}));

  $('input.autocomplete').autocomplete({
    data: localTvShows,
    onAutocomplete: function(val) {
        // Callback function when value is autcompleted.
        var value = $('input.autocomplete').val();
        var targetId = tvShowMap.filter(obj => obj.name === value)[0]["id"];
        window.location.assign(`/tv_shows/${targetId}/view_it`)
    },
    limit: 10
  });
});
