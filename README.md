# Backbone Dotattr [![Build Status](https://secure.travis-ci.org/amccloud/backbone-dotattr.png)](http://travis-ci.org/amccloud/backbone-dotattr]) #
Access deep Backbone.js model attributes with dot-syntax.

## Example ##
```javascript
var song = new Backbone.Model({
    title: "Lucy In The Sky With Diamonds",
    album: new Backbone.Model({
        title: "Sgt. Pepper's Lonely Hearts Club Band",
        release: {
            year: "1987"
        }
    })
});

// Deep model attributes
song.get('album.title'); // "Sgt. Pepper's Lonely Hearts Club Band"

// Deep object attributes
song.has('album.release.year'); // true
song.get('album.release.year'); // "1987"

// Regular attributes
song.get('title') // "Lucy In The Sky With Diamonds"
```

## Supported Methods ##
    - get
    - escape
    - has
