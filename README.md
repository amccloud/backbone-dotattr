# Backbone Dotattr #
Access deep Backbone.js model attributes with dot-syntax.

## Download ##
https://raw.github.com/amccloud/backbone-dotattr/master/backbone-dotattr.js

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
song.get('album.release.year'); // "1987"

// Regular attributes
song.get('title') // "Lucy In The Sky With Diamonds"
```
