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

  // remote

  var searchy = "bingo";

  var url = new URL("https://api.themoviedb.org/3/search/tv")
  var params = { api_key: "fb6a1d3f38c3d97f67df6d141f936f29", language:  "en-US", query: `${searchy}`, page: 1}
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

  var gogo = fetch(url, params)
              .then(data => {
                return data.json()
              })
              .then(res => {
                console.log(res);
                // console.log(res["results"]);
                // var simpler = {};
                // var pieces = res["results"];
                // pieces.forEach((key, i) => simpler[key["name"]] = null);
                // console.log(simpler);
              })
              .then(error => {
                console.log(error)
              });

  // brave tries

// https://repl.it/repls/NearDarkFactor
//   var simpler = {}
//   var dogs = [{ "name": "Puppy Dog Pals", "id": 72089, "favorite": "Doodoo"}, { "name": "Hobos", "id": 72229, "favorite": "Mix"}]
//   dogs.forEach((key, i) => simpler[key["name"]] = null);
//    console.log(simpler);

// https://repl.it/repls/DimwittedOrneryCarriers
// var autocompleteData = {"Vikings": null, "The Flash": null, "Riverdale": null, "Arrow": null, "Dragon Ball": null}
// var points = {"Growth": null, "Pear": null, "LaPen Wins": null, "Hoki": null}
// var newy = Object.assign(autocompleteData, points);
// console.log(newy);

  // end remote


  $('input.autocomplete').autocomplete({
    data: autocompleteData,
    onAutocomplete: function(val) {
        // Callback function when value is autcompleted.
        var value = $('input.autocomplete').val();
        var targetId = tvShowMap.filter(obj => obj.name === value)[0]["id"];
        window.location.assign(`/tv_shows/${targetId}/view_it`)
    },
    limit: 10
  });
});
