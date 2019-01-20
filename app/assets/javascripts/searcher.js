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
  var autocompleteData = {};
  var localTvShows = {};

  // map objects for navigation after selection
  keys.forEach((key, i) => localTvShows[key] = values[i]);
  tvShowMap = Object.entries(localTvShows).map(([name, id]) => ({name, id}));

  // map object for autocomplete
  keys.forEach((key, i) => autocompleteData[key] = null);


  $('input.autocomplete').autocomplete({
    data: autocompleteData,
    onAutocomplete: function(val) {
        // Callback function when value is autcompleted.
        var value = $('input.autocomplete').val();
        window.location.assign(`/tv_shows/${getTime().toString()}/search_results?query=${value}`);
    },
    limit: 10
  });

  $('input.autocomplete').keypress(function (e) {
    if (e.which == 13) {
      var value = $('input.autocomplete').val();
      window.location.assign(`/tv_shows/${getTime().toString()}/search_results?query=${value}`);
      //$('form#login').submit();
      //return false;    //<---- Add this line
    }
  });
});
