var listHtml = '';

// films list concatination
for (var i = 0 ; i < films.length; ++i) {
  listHtml += '<h2>' + films[i].name + '</h2>';
}

// append to #films-list
$('#films-list').append(listHtml);