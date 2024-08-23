// jsonconnect live event
$.getJSON('liveevent.json', 
function(result) {
  let event = result.event;
  //console.log(event);

  $.each(event, function(i, result) {
    $('#liveevent').append('<div onclick="' + result.url + '()" class="live-event_item"><img src="' + result.poster + '" class="live-event_image" /><h3><span>' + result.tanggal + '</span></h3><h4><span>' + result.jam + '</span></h4></div>');
  });
});
// jsonconnect spsport
$.getJSON('spsport.json', 
function(result) {
  let spsport = result.spsport;
  //console.log(spsport);

  $.each(spsport, function(i, result) {
    $('#spsport').append('<div onclick="' + result.url + '()" class="spsport_item"><img src="' + result.poster + '" class="spsport_image" /><h3><span>' + result.tanggal + '</span></h3><h4><span>' + result.jam + '</span></h4></div>');
  });
});
// jsonconnect starsport
$.getJSON('starsport.json', 
function(result) {
  let starsport = result.starsport;
  //console.log(starsport);

  $.each(starsport, function(i, result) {
    $('#starsport').append('<div onclick="' + result.url + '()" class="starsport_item"><img src="' + result.poster + '" class="starsport_image" /><h3><span>' + result.tanggal + '</span></h3><h4><span>' + result.jam + '</span></h4></div>');
  });
});

// jsonconnect portugal
$.getJSON('portugal.json', 
function(result) {
  let portugal = result.portugal;
  //console.log(portugal);

  $.each(portugal, function(i, result) {
    $('#portugal').append('<div onclick="' + result.url + '()" class="portugal_item"><img src="' + result.poster + '" class="portugal_image" /><h3><span>' + result.tanggal + '</span></h3><h4><span>' + result.jam + '</span></h4></div>');
  });
});
// jsonconnect eleven
$.getJSON('eleven.json', 
function(result) {
  let eleven = result.eleven;
  //console.log(eleven);

  $.each(eleven, function(i, result) {
    $('#eleven').append('<div onclick="' + result.url + '()" class="eleven_item"><img src="' + result.poster + '" class="eleven_image" /><h3><span>' + result.tanggal + '</span></h3><h4><span>' + result.jam + '</span></h4></div>');
  });
});

// jsonconnect Popular tv
$.getJSON('acarafavorit.json', 
function(result) {
  let acara = result.acara;
  //console.log(event);

  $.each(acara, function(i, result) {
    $('#acara').append('<div onclick="' + result.url + '()" class="acaratv_item"><img src="' + result.poster + '" class="acaratv_image" /><h3><span>' + result.tanggal + '</span></h3><h4><span>' + result.jam + '</span></h4></div>');
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
$.getJSON('/ustv.json', 
function(result) {
   let ustv = result.ustv;
   console.log(ustv);

   let kategory = 'popular';
   $.each(ustv, function(i, result) {
     if (kategory = result.kategori) {
       $('#ustv').append('<div id="' + result.id + '" class="sportlist_item"><img src="' + result.logo + '" class="tv_image"></div>');
       $('#' + result.id + '').click(function() {
         document.getElementById("objek").innerHTML = '<iframe src="intent://' + result.url + '?|referer=' + result.ref + '&User-Agent=' + result.useragent + '#Intent;scheme=' + result.protokol + ';type=video/*;package=com.genuine.leone;S.browser_fallback_url=market://details?id=com.genuine.leone.ad;S.title=NGTV;end" height="0" width="0" style="border:none;display:none;" title="SS Sport"></iframe>'
       });
     }

   });
 });

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