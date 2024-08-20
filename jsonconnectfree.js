// jsonconnect live event
$.getJSON('https://blacktvreborn.my.id/database/liveevent/liveevent.json', 
function(result) {
  let event = result.event;
  //console.log(event);

  $.each(event, function(i, result) {
    $('#liveevent').append('<div onclick="' + result.url + '()" class="live-event_item"><img src="' + result.poster + '" class="live-event_image" /><h3><span>' + result.tanggal + '</span></h3><h4><span>' + result.jam + '</span></h4></div>');
  });
});

// jsonconnect national sport
$.getJSON('acarafavorit.json', 
function(result) {
  let nationalsp = result.nationalsp;
  //console.log(event);

  $.each(nationalsp, function(i, result) {
    $('#nationalsp').append('<div onclick="' + result.url + '()" class="nationalsp_item"><img src="' + result.poster + '" class="nationalsp_image" /><h3><span>' + result.tanggal + '</span></h3><h4><span>' + result.jam + '</span></h4></div>');
  });
});

// jsonconnect sportlist
$.getJSON('https://blacktvreborn.my.id/database/liveevent/sportlist.json', 
function(result) {
  let sportlist = result.sportlist;
  //console.log(sportlist);

  $.each(sportlist, function(i, result) {

    $('#sportlist').append('<div class="sportlist_item"><a href="go:' + result.url + '" class="stretched-link"><img src="' + result.poster + '" class="sportlist_image" /></a></div>');

  });
});

// jsonconnect ustv
// $.getJSON('https://blacktvreborn.my.id/database/ustv.json', 
// function(result) {
//   let ustv = result.ustv;
//   console.log(ustv);

//   let kategory = 'popular';
//   $.each(ustv, function(i, result) {
//     if (kategory = result.kategori) {
//       $('#ustv').append('<div id="' + result.id + '" class="sportlist_item"><img src="' + result.logo + '" class="tv_image"></div>');
//       $('#' + result.id + '').click(function() {
//         document.getElementById("objek").innerHTML = '<iframe src="intent://' + result.url + '?|referer=' + result.ref + '&User-Agent=' + result.useragent + '#Intent;scheme=' + result.protokol + ';type=video/*;package=com.genuine.leone;S.browser_fallback_url=market://details?id=com.genuine.leone.ad;S.title=NGTV;end" height="0" width="0" style="border:none;display:none;" title="SS Sport"></iframe>'
//       });
//     }

//   });
// });

//json connect movies
$.getJSON('https://blacktvreborn.my.id/movies/source/data/movies.json', function(result) {
  let movies = result.movies;
  //console.log(movies);

  let conten = '';

  $.each(movies, function(i, result) {
    if (i > 15) {
      return;
    }

    $('#movies').append('<div id="' + result.kode + '" class="movies_item"><img src="' + result.poster + '" class="movies_image"></div>');
    //conten += '<div id="' + result.kode + '" class="item"><img src="' + result.poster + '"></div>'
    // $('#' + result.kode + '').click(function() {
    //   document.getElementById("objek").innerHTML = '<iframe src="' + result.url + '" height="0" width="0" style="border:none;display:none;" title="SS Sport"></iframe>'
    // });

  });
});

//json connect series
$.getJSON('https://blacktvreborn.my.id/movies/source/data/series.json', function(result) {
  let series = result.series;
  //console.log(series);

  let conten = '';

  $.each(series, function(i, result) {
    if (i > 8) {
      return;
    }

    $('#series').append('<div id="' + result.kode + '" class="movies_item"><img src="' + result.poster + '" class="movies_image"></div>');
    //conten += '<div id="' + result.kode + '" class="item"><img src="' + result.poster + '"></div>'
    // $('#' + result.kode + '').click(function() {
    //   location.href = 'https://blacktvreborn.my.id/movies/page/series/get.html?code=' + result.kode + '';
    // });

  });
});

//jsonconnect indonesia movies
let kategori = 'indonesia';
$.getJSON('https://blacktvreborn.my.id/movies/source/data/movies.json', function(result) {
  let movies = result.movies;
  let conten = '';
  let j = 0;
  //console.log(result);
  $.each(movies, function(i, result) {
    if (result.kategori == kategori) {
      if (j > 9) {
        return;
      }
      j++;
      //console.log(result.kode);
      $('#indonesia').append('<div id="' + result.kode + '" class="movies_item"><img src="' + result.poster + '" class="movies_image"></div>');
      //conten += '<div id="' + result.kode + '" class="item"><img src="' + result.poster + '"></div>'
    //   $('#' + result.kode + '').click(function() {
    //     document.getElementById("objek").innerHTML = '<iframe src="' + result.url + '" height="0" width="0" style="border:none;display:none;" title="SS Sport"></iframe>'
    //   });
    }
  });
});