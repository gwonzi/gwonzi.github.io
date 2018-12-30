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
  return name + '<br />(<a href="' + url + '" target="_blank">' + txt + '</a>)';
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

var corey = {
  s1g1: {
    name: COREY,
    deck: {
      commander: NARSET,
      short_name: "Narset",
      version: "1.0",
      url: "https://www.mtggoldfish.com/deck/1483881",
    },
    ref: function() {
      return deck_link(this.name, this.deck);
    },
    order: 4,
    rank: 4,
    turns: 11,
    stats: {
      damage: 3,
      lifegain: 0,
      carddraw_direct: 28,
      carddraw_indirect: 7,
      removal: 1,
      counterspells: 1,
      boardwipes: 1,
      creatures: 1,
      tutors: 1,
      lands_played: 11,
      lands_in_play: 11,
    },
    bp: {
      blood: 0,
      counter: 1,
      removal: 0,
      sweeper: 1,
      generalist: 0,
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

var eduardo = {
  s1g1: {
    name: EDUARDO,
    deck: {
      commander: KUMENA,
      short_name: "Kumena",
      version: "1.0",
      url: "https://www.mtggoldfish.com/deck/1485205",
    },
    ref: function() {
      return deck_link(this.name, this.deck);
    },
    order: 1,
    rank: 3,
    turns: 13,
    stats: {
      damage: 14,
      lifegain: 1,
      carddraw_direct: 15,
      carddraw_indirect: 17,
      removal: 2,
      counterspells: 0,
      boardwipes: 0,
      creatures: 7,
      tutors: 0,
      lands_played: 8,
      lands_in_play: 8,
    },
    bp: {
      blood: 0,
      counter: 0,
      removal: 0,
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

var ryan = {
  s1g1: {
    name: RYAN,
    deck: {
      commander: YIDRIS,
      short_name: "Yidris",
      version: "1.0",
      url: "https://www.mtggoldfish.com/deck/1483892",
    },
    ref: function() {
      return deck_link(this.name, this.deck);
    },
    order: 3,
    rank: 2,
    turns: 12,
    stats: {
      damage: 44,
      lifegain: 6,
      carddraw_direct: 15,
      carddraw_indirect: 17,
      removal: 2,
      counterspells: 0,
      boardwipes: 2,
      creatures: 9,
      tutors: 0,
      lands_played: 10,
      lands_in_play: 10,
    },
    bp: {
      blood: 0,
      counter: 0,
      removal: 0,
      sweeper: 0,
      generalist: 0,
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

function get_rank(rank, players) {
  for (var p in players) {
    if (players[p].rank == rank) {
      return players[p].ref();
    }
  }
}

// GLOBAL VARIABLE FOR EACH GAME

var s1g1_g = {
  played: true,
  video_url: "https://www.youtube.com/watch?v=1CqYDICrI_0",
  players: [chris.s1g1, corey.s1g1, eduardo.s1g1, ryan.s1g1],
  first: function() {
    return get_rank(1, this.players);
  },
  second: function() {
    return get_rank(2, this.players);
  },
  third: function() {
    return get_rank(3, this.players);
  },
  fourth: function() {
    return get_rank(4, this.players);
  }
};

var s1g2_g = {
  played: false
};

var s1g3_g = {
  played: false
};

var s1g4_g = {
  played: false
};

var s1g5_g = {
  played: false
};

var s1g6_g = {
  played: false
};

// SEASONS GLOBAL HOLDS THE GAMES

var played = {
  s1: [1]
};

function count_ranks(season, played, player, rank) {
  var x = 0;
  for (var i = 0; i < played.length; i++) {
    var game = "s" + season + "g" + (i + 1);
    if (player[game].rank == rank) {
      x += 1;
    }
  }
  return x;
}

var seasons = {
  1: {
    games: [s1g1_g, s1g2_g, s1g3_g, s1g4_g, s1g5_g, s1g6_g],
    totals: {
      chris: {
        name: CHRIS,
        rec_1st: function() {
          return count_ranks(1, played, chris, 1);
        },
        rec_2nd: 8,
        rec_3rd: 7,
        rec_4th: 6,
        rp_tot: function() {
          return (this.rec_1st * 4) +
                 (this.rec_2nd * 3) +
                 (this.rec_3rd * 2) +
                 (this.rec_4th);
        },
        bp_tot: 3
      },
      corey: {
        name: COREY
      },
      eduardo: {
        name: EDUARDO
      },
      ryan: {
        name: RYAN
      },
      get_ranking: function(player) {

      }
    }
  }
};
