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

function count_ranks(season, player, rank) {
  var played = seasons[season].played;
  var x = 0;
  for (var i = 0; i < played.length; i++) {
    var game = "s" + season + "g" + (i + 1);
    if (player[game].rank == rank) {
      x += 1;
    }
  }
  return x;
}

function count_bp(season, player) {
  var played = seasons[season].played;
  var x = 0;
  for (var i = 0; i < played.length; i++) {
    var game = "s" + season + "g" + (i + 1);
    x += player[game].bp_total();
  }
  return x;
}

function index_max(arr) {
  var mx = 0;
  var n = [0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > mx) {
      mx = arr[i];
      n = [i]; // keep index in array format for for loops
    } else if (arr[i] === mx) {
      n.push(i); // tie means append the index instead of replacing it
    }
  }
  return n;
}

function season_ranking(season) {
  var t = seasons[season].totals;
  var ps = ['chris', 'corey', 'eduardo', 'ryan'];
  var r_tots = [];
  var b_tots = [];
  var ranking = [];
  for (var i = 0; i < ps.length; i++) {
    r_tots.push(t[ps[i]].rp_tot());
    b_tots.push(t[ps[i]].bp_tot());
  }
  for (var n = 1; n <= 4; n++) {
    var ix = index_max(r_tots);
    var ns = [];
    for (var j = 0; j < ix.length; j++) {
      ns.push(ps[ix[j]]);
      r_tots[ix[j]] = -1; // set max(s) to -1 so next max is next rank, etc.
    }
    ranking.push(ns);
  }
  var obj = {};
  var final_rank = 1;
  for (var k = 0; k < ranking.length; k++) {
    obj[final_rank] = ranking[k];
    final_rank += ranking[k].length;
  }
  var pairings = []; // [{chris:1},{ryan:1},{eduardo:3},{corey:4}]
  console.log("before loop: " + pairings);
  for (var rank in obj) {
    if (obj.hasOwnProperty(rank)) {
      for (var indx in obj[rank]) {
        pairings.push({
          "name": obj[rank][indx],
          "rank": rank});
        console.log("loop/rank="+rank+"/indx="+indx+": " + pairings);
      }
    }
  }
  return pairings;
}

var seasons = {
  1: {
    played: [1],
    games: [s1g1_g, s1g2_g, s1g3_g, s1g4_g, s1g5_g, s1g6_g],
    totals: {
      chris: {
        name: CHRIS,
        rec_1st: function() {
          return count_ranks(1, chris, 1);
        },
        rec_2nd: function() {
          return count_ranks(1, chris, 2);
        },
        rec_3rd: function() {
          return count_ranks(1, chris, 3);
        },
        rec_4th: function() {
          return count_ranks(1, chris, 4);
        },
        rp_tot: function() {
          return (this.rec_1st() * 4) +
                 (this.rec_2nd() * 3) +
                 (this.rec_3rd() * 2) +
                 (this.rec_4th());
        },
        bp_tot: function() {
          return count_bp(1, chris);
        }
      },
      corey: {
        name: COREY,
        rec_1st: function() {
          return count_ranks(1, corey, 1);
        },
        rec_2nd: function() {
          return count_ranks(1, corey, 2);
        },
        rec_3rd: function() {
          return count_ranks(1, corey, 3);
        },
        rec_4th: function() {
          return count_ranks(1, corey, 4);
        },
        rp_tot: function() {
          return (this.rec_1st() * 4) +
                 (this.rec_2nd() * 3) +
                 (this.rec_3rd() * 2) +
                 (this.rec_4th());
        },
        bp_tot: function() {
          return count_bp(1, corey);
        }
      },
      eduardo: {
        name: EDUARDO,
        rec_1st: function() {
          return count_ranks(1, eduardo, 1);
        },
        rec_2nd: function() {
          return count_ranks(1, eduardo, 2);
        },
        rec_3rd: function() {
          return count_ranks(1, eduardo, 3);
        },
        rec_4th: function() {
          return count_ranks(1, eduardo, 4);
        },
        rp_tot: function() {
          return (this.rec_1st() * 4) +
                 (this.rec_2nd() * 3) +
                 (this.rec_3rd() * 2) +
                 (this.rec_4th());
        },
        bp_tot: function() {
            return count_bp(1, eduardo);
        }
      },
      ryan: {
        name: RYAN,
        rec_1st: function() {
          return count_ranks(1, ryan, 1);
        },
        rec_2nd: function() {
          return count_ranks(1, ryan, 2);
        },
        rec_3rd: function() {
          return count_ranks(1, ryan, 3);
        },
        rec_4th: function() {
          return count_ranks(1, ryan, 4);
        },
        rp_tot: function() {
          return (this.rec_1st() * 4) +
                 (this.rec_2nd() * 3) +
                 (this.rec_3rd() * 2) +
                 (this.rec_4th());
        },
        bp_tot: function() {
          return count_bp(1, ryan);
        }
      }
    }
  }
};
