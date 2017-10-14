var listHtml = '';
var filmRating;

// films list concatination
for (var i = 0 ; i < films.length; ++i) {
  
  if (films[i].rating === 5) {
    filmRating = 'stars5';
  } else if (films[i].rating === 4) {
    filmRating = 'stars4';
  } else if (films[i].rating === 3) {
    filmRating = 'stars3';
  } else if (films[i].rating === 2) {
    filmRating = 'stars2';
  } else if (films[i].rating === 1) {
    filmRating = 'stars1';
  }
  
  listHtml += '<h2 class="' + filmRating + '">' + films[i].name + '</h2>';
}

// append to #films-list
$('#films-list').append(listHtml);