var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
              },

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

printPlaylists: function () {
  for (var happyList in this.playlists) {
    console.log(happyList ,': ',this.playlists[happyList].name ,' - ', this.playlists[happyList].tracks.length, ' tracks');
  }
},
// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
printTracks: function () {
  for (var awesomeTracks in this.tracks) {
    console.log(awesomeTracks, ': ', this.tracks[awesomeTracks].name, 'by', 
      this.tracks[awesomeTracks].artist, '(', this.tracks[awesomeTracks].album, ')')
  }
},
// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
printPlaylist: function (playlistId) { 
  console.log(playlistId, ': ', this.playlists[playlistId].name, ' - ', this.playlists[playlistId].tracks.length, ' tracks');
  for (var i = 0; i < this.playlists[playlistId].tracks.length; i++) {
    var trackId = this.playlists[playlistId].tracks[i]
      console.log(trackId, ": ", this.tracks[trackId].name, 'by',
      this.tracks[trackId].artist, "(", this.tracks[trackId].album, ")")
    }
  },
// adds an existing track to an existing playlist

addTrackToPlaylist: function (trackId, playlistId) {
  this.playlists[playlistId].tracks.push(trackId);
},
// generates a unique id
// (use this for addTrack and addPlaylist)

uid: function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
},


// adds a track to the library

addTrack: function (name, artist, album) {
  var createdId = this.uid();
  this.tracks[createdId] = {
    "id": createdId, 
    "name": name, 
    "artist": artist, 
    "album": album
  }
},
// adds a playlist to the library

addPlaylist: function (name) {
  var createdId = this.uid();
  this.playlists[createdId] = {
    "id": createdId,
    "name": name,
    "tracks": []
  }
}
}

library.printPlaylists();
library.printTracks();
library.printPlaylist("p01");
library.addTrackToPlaylist("t02", "p02");
library.printPlaylist("p02");
library.addTrack("Meow", "Dounai", "I'm Hungry");
library.printTracks();
library.addPlaylist("Cats");
library.printPlaylists();
// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}