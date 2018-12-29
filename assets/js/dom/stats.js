// when using a player's name, we use the ALL CAPS constant
// instead of a string or variable to avoid errors/typos

const CHRIS = "Chris";
const COREY = "Corey";
const EDUARDO = "Eduardo";
const RYAN = "Ryan";

function linkify(name, url, txt) {
  return name + ' (<a href="' + url + '" target="_blank">' + txt + '</a>)';
}

// SEASON ONE, GAME ONE STATISTICS BY PLAYER

var chris = {
  s1g1: {
    name: CHRIS,
    rank: 1, // 1, 2, 3, or 4
    deck_name: "Breya",
    deck_ver: "1.0",
    deck_url: "https://www.mtggoldfish.com/deck/1483882",
    ref: function() {
      return linkify(this.name, this.deck_url, this.deck_name);
    },
    bp: {
      blood: true,
      counter: false,
      removal: true,
      sweeper: false,
      generalist: true,
      flex: false,
      generosity: false,
      commanded: false,
      overrun: false,
      wrath: false,
      greed: false,
      nonbo: false,
      hero: false
    },
    bp_total: function() {
      var i;
      for (var key in this.bp) {
        if (this.bp.key) {
          i++;
        }
      }
      return i;
    }
  },
  s1g2: {}
};

/*
var s1g1_ranks = function() {
  return {

  }
}
*/
var s1g1_globals = {
  video_url: "https://www.youtube.com/watch?v=1CqYDICrI_0",
  first: chris.s1g1,
  //second: s1g1_ryan,
  //third: s1g1_eduardo,
  //fourth: s1g1_corey
};
