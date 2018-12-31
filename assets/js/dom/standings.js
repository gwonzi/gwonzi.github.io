$.getScript("/assets/js/dom/stats.js")

function make_rtable_for_season(season) {
  var txt = '\
  <table class="rtab"> \
    <tr> \
      <th>Game</th> \
      <th>1st</th> \
      <th>2nd</th> \
      <th>3rd</th> \
      <th>4th</th> \
    </tr>';
  var end = '</table>';
  var games = seasons[season].games;
  for (var g = 0; g < games.length; g++) {
    var title = "S" + season + "G" + (g + 1);
    txt += make_rtable_row(games[g], title);
  }
  return txt + end;
}

function make_rtable_row(game, name) {
  if (game.played) {
    return '\
      <tr> \
        <th><a href="'+game.video_url+'" target="_blank">'+name+'</a></th> \
        <td>' + game.first() + '</td> \
        <td>' + game.second() + '</td> \
        <td>' + game.third() + '</td> \
        <td>' + game.fourth() + '</td> \
      </tr>';
    } else {
      return '\
        <tr> \
          <th><em style="color:#888">' + name + '</em></th> \
          <td> - </td> \
          <td> - </td> \
          <td> - </td> \
          <td> - </td> \
        </tr>';
    }
}

function make_ptable_row(name) {
  var capname = name.charAt(0).toUpperCase() + name.slice(1);
  return '<tr> \
    <th>' + capname + '</th> \
    <td>' + points[name].rec_1st() + '</td> \
    <td>' + points[name].rec_2nd() + '</td> \
    <td>' + points[name].rec_3rd() + '</td> \
    <td>' + points[name].rec_4th() + '</td> \
    <td>' + points[name].rp_tot() + '</td> \
    <td>' + points[name].bp_tot + '</td> \
    <td>0th</td> \
  </tr>';
}

function make_ptable_for_season(season) {
  var points = seasons[season].totals;
  var txt = '\
  <table class="ptab"> \
    <tr> \
      <th>Player</th> \
      <th colspan="4">Record</th> \
      <th>Rank Points</th> \
      <th>Bonus Points</th> \
      <th>Season Rank</th> \
    </tr> \
    <tr> \
      <td class="emptycell"></td> \
      <th class="rp-small">1st</th> \
      <th class="rp-small">2nd</th> \
      <th class="rp-small">3rd</th> \
      <th class="rp-small">4th</th> \
      <td class="emptycell"></td> \
      <td class="emptycell"></td> \
      <td class="emptycell"></td> \
    </tr>';
  var end = '</table>';
  var players = ["chris","corey","ryan","eduardo"];
  for (var i = 0; i < players.length; i++) {
    txt += make_ptable_row(players[i]);
  }
  return txt + end;
}

$("#s1").click(function() {
  var rtable = make_rtable_for_season(1);
  var ptable = make_ptable_for_season(1);

  $("#rtable").html(rtable);
  $("#ptable").html(ptable);
  $("#stitle").html("Season 1 Standings");
});
