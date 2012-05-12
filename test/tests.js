var song = new Backbone.Model({
    title: "Lucy In The Sky With Diamonds",
    album: new Backbone.Model({
        title: "Sgt. Pepper's Lonely Hearts Club Band",
        release: {
            year: "1987"
        }
    })
});

test("get model attribute", function() {
    equal(song.get('title'), "Lucy In The Sky With Diamonds", "get attribute from model");
    equal(song.get('album.title'), "Sgt. Pepper's Lonely Hearts Club Band", "get deep attribute from model");
    equal(song.get('album.release.year'), "1987", "get deep attribute from object");
});

test("get root attributes with wildcard", function() {
    equal(song.get('*')[0], "Lucy In The Sky With Diamonds", "title is in attributes");
    equal(song.get('*')[1], song.get('album'), "title is in attributes");
});

test("get album attributes with wildcard", function() {
    equal(song.get('album.*')[0], "Sgt. Pepper's Lonely Hearts Club Band", "album name is in attributes");
    equal(song.get('album.*')[1].year, "1987", "year is in attributes");
});

test("get year with wildcard", function() {
    equal(song.get('album.release.*')[0], "1987", "get 'unknown' attribute from release with wildcard");
});