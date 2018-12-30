$.getScript("/assets/js/dom/stats.js")

function make_rtable_for_season(season) {
  start = '\
  <table class="rtab"> \
    <tr> \
      <th>Game</th> \
      <th>1st</th> \
      <th>2nd</th> \
      <th>3rd</th> \
      <th>4th</th> \
    </tr>';
  end = '</table>';
  return start + make_rtable_row(s1g1_g, "S1G1") + end;
}

function make_rtable_row(game, name) {
  return '\
    <tr> \
      <th><a href="'+game.video_url+'" target="_blank">'+name+'</a></th> \
      <td>' + game.first() + '</td> \
      <td>' + game.second() + '</td> \
      <td>' + game.third() + '</td> \
      <td>' + game.fourth() + '</td> \
    </tr>';
}

function make_ptable_for_season(season) {
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
      <td>0</td> \
      <td>0</td> \
      <td>0</td> \
      <td>0</td> \
      <td>0</td> \
      <td>0</td> \
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
