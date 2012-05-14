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
    equal(song.get('title'), "Lucy In The Sky With Diamonds");
    equal(song.get('album.title'), "Sgt. Pepper's Lonely Hearts Club Band");
    equal(song.get('album.release.year'), "1987");
});

test("escape model attribute", function() {
    equal(song.escape('album.title'), "Sgt. Pepper&#x27;s Lonely Hearts Club Band");
});

test("has model attribute", function() {
    ok(song.has('title'));
    ok(song.has('album.title'));
    ok(song.has('album.release.year'));
});
