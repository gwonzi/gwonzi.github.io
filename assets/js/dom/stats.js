// when using a player's name, we use the ALL CAPS constant
// instead of a string or variable to avoid errors/typos

const CHRIS = "Chris";
const COREY = "Corey";
const EDUARDO = "Eduardo";
const RYAN = "Ryan";

// SEASON ONE, GAME ONE STATISTICS BY PLAYER

var s1g1_chris = {
  name: CHRIS,
  rank: 1, // 1, 2, 3, or 4
  deck_name: "Breya",
  deck_ver: "1.0",
  deck_url: "https://www.mtggoldfish.com/deck/1483882",
  name_deck_link: this.name + " (<a href=\"" + this.deck_url + "\">" + this.deck_name + "</a>)"
};

var s1g1_globals = {
  video_url: "https://www.youtube.com/watch?v=1CqYDICrI_0",
  first: s1g1_chris,
  second: s1g1_ryan,
  third: s1g1_eduardo,
  fourth: s1g1_corey
};
