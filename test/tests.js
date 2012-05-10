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
