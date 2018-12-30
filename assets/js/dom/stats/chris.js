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
