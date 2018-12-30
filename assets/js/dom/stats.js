// when using these strings, use the ALL CAPS constant to avoid errors/typos

const CHRIS = "Chris";
const COREY = "Corey";
const EDUARDO = "Eduardo";
const RYAN = "Ryan";

const BREYA = "Breya, Etherium Shaper";
const YIDRIS = "Yidris, Maelstrom Wielder";
const KUMENA = "Kumena, Tyrant of Orazca";
const NARSET = "Narset, Enlightened Master";

function deck_link(name, deck) {
  var url = deck.url;
  var txt = deck.short_name + ' ' + deck.version;
  return name + ' (<a href="' + url + '" target="_blank">' + txt + '</a>)';
}

// SEASON ONE STATISTICS BY PLAYER

var chris = {
  s1g1: {
    name: CHRIS,
    deck: {
      commander: BREYA,
      short_name: "Breya",
      version: "1.0",
      url: "https://www.mtggoldfish.com/deck/1483882",
    },
    ref: function() {
      return deck_link(this.name, this.deck);
    },
    order: 2,
    rank: 1,
    bp: {
      blood: 1,
      counter: 0,
      removal: 1,
      sweeper: 0,
      generalist: 1,
      flex: 0,
      generosity: 0,
      commanded: 0,
      overrun: 0,
      wrath: 0,
      greed: 0,
      nonbo: 0,
      hero: 0
    },
    bp_total: function() {
      var i = 0;
      for (var key in this.bp) {
        i += this.bp[key];
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
