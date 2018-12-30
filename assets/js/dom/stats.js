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
  var txt = deck.short_name;
  return name + ' (<a href="' + url + '" target="_blank">' + txt + '</a>)';
}

function total_bp(bp) {
  var i = 0;
  for (var key in bp) {
    i += bp[key];
  }
  return i;
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
    turns: 11,
    stats: {
      damage: 87,
      lifegain: 0,
      carddraw_direct: 15,
      carddraw_indirect: 7,
      removal: 2,
      counterspells: 0,
      boardwipes: 0,
      creatures: 17,
      tutors: 3,
      lands_played: 10,
      lands_in_play: 10,
    },
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
      return total_bp(this.bp);
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
var s1g1_g = {
  video_url: "https://www.youtube.com/watch?v=1CqYDICrI_0",
  first: chris.s1g1,
  //second: s1g1_ryan,
  //third: s1g1_eduardo,
  //fourth: s1g1_corey
};
