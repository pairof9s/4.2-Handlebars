//console.log("Hello World!");
var $ = require('jquery');
var handlebars = require('handlebars');

var albums = [
  {
    "title": "Album 1",
    "thumb": {"title": "Album Art", "image": "http://unsplash.it/120/140"},
    "photos": [
      {"title": "Photo 1", "image": "http://unsplash.it/60/225"},
      {"title": "Photo 2", "image": "http://unsplash.it/175/275"},
      {"title": "Photo 3", "image": "http://unsplash.it/120/140"},
      {"title": "Photo 4", "image": "http://unsplash.it/53/101"},
      {"title": "Photo 5", "image": "http://unsplash.it/75/75"},
      {"title": "Photo 6", "image": "http://unsplash.it/120/140"}
    ]
  },
  {
    "title": "Album 2",
    "thumb": {"title": "Album Art", "image": "http://unsplash.it/75/75"},
    "photos": [
      {"title": "Photo 1", "image": "http://unsplash.it/75/75"},
      {"title": "Photo 2", "image": "http://unsplash.it/75/75"},
      {"title": "Photo 3", "image": "http://unsplash.it/60/225"},
      {"title": "Photo 4", "image": "http://unsplash.it/120/140"},
      {"title": "Photo 5", "image": "http://unsplash.it/75/75"},
      {"title": "Photo 6", "image": "http://unsplash.it/175/275"}
    ]
  },
  {
    "title": "Album 3",
    "thumb": {"title": "Album Art", "image": "http://unsplash.it/175/275"},
    "photos": [
      {"title": "Photo 1", "image": "http://unsplash.it/60/225"},
      {"title": "Photo 2", "image": "http://unsplash.it/175/275"},
      {"title": "Photo 3", "image": "http://unsplash.it/120/140"},
      {"title": "Photo 4", "image": "http://unsplash.it/175/275"},
      {"title": "Photo 5", "image": "http://unsplash.it/175/275"},
      {"title": "Photo 6", "image": "http://unsplash.it/75/75"}
    ]
  },
  {
    "title": "Album 4",
    "thumb": {"title": "Album Art", "image": "http://unsplash.it/53/101"},
    "photos": [
      {"title": "Photo 1", "image": "http://unsplash.it/75/75"},
      {"title": "Photo 2", "image": "http://unsplash.it/120/140"},
      {"title": "Photo 3", "image": "http://unsplash.it/53/101"},
      {"title": "Photo 4", "image": "http://unsplash.it/175/275"},
      {"title": "Photo 5", "image": "http://unsplash.it/60/225"},
      {"title": "Photo 6", "image": "http://unsplash.it/75/75"}
    ]
  }
];

var totalAlbums = albums.length;

var source = $('#header-template').html();
var template = handlebars.compile(source);
var context = {"count": totalAlbums};
var renderTemplate = template(context);

$('.container').html(renderTemplate);

var albumTile = $('#album-tile').html();
var albumTileTemplate = handlebars.compile(albumTile);

var context = {'albums':albums};

var renderTemplate = albumTileTemplate(context);

$('.container').append(renderTemplate);
