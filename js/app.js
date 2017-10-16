var listHtml = '';
var filmRating;
var ratedFilms = [];
var $selectedStars = $('select option:selected').val();
var $selector = $('select');

// films list concatination

function getHtml (myArray) {
  
  for ( var i = 0 ; i < myArray.length; ++i ) {
  
    if ( myArray[i].rating === 5 ) {
      filmRating = 'stars5';
    } else if ( myArray[i].rating === 4 ) {
      filmRating = 'stars4';
    } else if ( myArray[i].rating === 3 ) {
      filmRating = 'stars3';
    } else if ( myArray[i].rating === 2 ) {
      filmRating = 'stars2';
    } else if ( myArray[i].rating === 1 ) {
      filmRating = 'stars1';
    }

    listHtml += '<h2 class="' + filmRating + '">' + myArray[i].name + '</h2>';
  }
  return listHtml;
}

//for ( var i = 0 ; i < films.length; ++i ) {
//  
//  if ( films[i].rating === 5 ) {
//    filmRating = 'stars5';
//  } else if ( films[i].rating === 4 ) {
//    filmRating = 'stars4';
//  } else if ( films[i].rating === 3 ) {
//    filmRating = 'stars3';
//  } else if ( films[i].rating === 2 ) {
//    filmRating = 'stars2';
//  } else if ( films[i].rating === 1 ) {
//    filmRating = 'stars1';
//  }
//  
//  listHtml += '<h2 class="' + filmRating + '">' + films[i].name + '</h2>';
//}

getHtml(films);

// append to #films-list
$('#films-list').append(listHtml);

function getRatedFilms () {
  ratedFilms = [];
  for ( var i = 0 ; i < films.length; ++i ) {
    if (films[i].rating === parseInt($selectedStars)) {
      ratedFilms.push(films[i]);
    } 
  }
  
}

$selector.on('change', function () {
  $selectedStars = $('select option:selected').val();
  getRatedFilms();
  $('#films-list').empty();
  listHtml = '';
  getHtml(ratedFilms);
  $('#films-list').append(listHtml);
});