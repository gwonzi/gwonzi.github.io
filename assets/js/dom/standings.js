$.getScript("/assets/js/dom/stats.js")

$("#s1").click(function() {
  var game = s1g1_g;
  var rtable = '\
  <table class="rtab"> \
    <tr> \
      <th>Game</th> \
      <th>1st</th> \
      <th>2nd</th> \
      <th>3rd</th> \
      <th>4th</th> \
    </tr> \
    <tr> \
      <th><a href="' + game.video_url + '" target="_blank">S1G1</a></th> \
      <td>' + game.first() + '</td> \
      <td>' + game.second() + '</td> \
      <td>' + game.third() + '</td> \
      <td>' + game.fourth() + '</td> \
    </tr> \
  </table>';

  var ptable = '\
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
      <td></td> \
      <td></td> \
      <td>1st</td> \
    </tr> \
  </table>';

  $("#rtable").html(rtable);
  $("#ptable").html(ptable);
});
