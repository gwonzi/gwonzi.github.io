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
          <th><em style="color:#888">'+name+'</em></th> \
          <td> - </td> \
          <td> - </td> \
          <td> - </td> \
          <td> - </td> \
        </tr>';
    }
}

function make_ptable_for_season(season) {
  var points = seasons[season].totals
  return '\
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
    </tr> \
    <tr> \
      <th>Chris</th> \
      <td>' + points["chris"].rec_1st() + '</td> \
      <td>' + points["chris"].rec_2nd + '</td> \
      <td>' + points["chris"].rec_3rd + '</td> \
      <td>' + points["chris"].rec_4th + '</td> \
      <td>' + points["chris"].rp_tot() + '</td> \
      <td>' + points["chris"].bp_tot + '</td> \
      <td>0th</td> \
    </tr> \
    <tr> \
      <th>Corey</th> \
      <td>0</td> \
      <td>0</td> \
      <td>0</td> \
      <td>0</td> \
      <td>0</td> \
      <td>0</td> \
      <td>0th</td> \
    </tr> \
    <tr> \
      <th>Eduardo</th> \
      <td>0</td> \
      <td>0</td> \
      <td>0</td> \
      <td>0</td> \
      <td>0</td> \
      <td>0</td> \
      <td>0th</td> \
    </tr> \
    <tr> \
      <th>Ryan</th> \
      <td>0</td> \
      <td>0</td> \
      <td>0</td> \
      <td>0</td> \
      <td>0</td> \
      <td>0</td> \
      <td>0th</td> \
    </tr> \
  </table>';
}

$("#s1").click(function() {
  var game = s1g1_g;
  var rtable = make_rtable_for_season(1);
  var ptable = make_ptable_for_season(1);

  $("#rtable").html(rtable);
  $("#ptable").html(ptable);
  $("#stitle").html("Season 1 Standings");
});
