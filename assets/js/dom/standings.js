$.getScript("/assets/js/dom/stats.js")

$("#s1").click(function() {
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
      <th>1</th> \
      <td>' + s1g1_globals.first.name_deck_link() + '</td> \
      <td>Ryan</td> \
      <td>Eduardo</td> \
      <td>Corey</td> \
    </tr> \
  </table>';

  var ptable = '\
  <table class="ptab"> \
    <tr> \
      <th>Player</th> \
      <th colspan="4">Rank Points</th> \
      <th>Bonus Points</th> \
      <th>Total</th> \
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
      <td>1</td> \
      <td>0</td> \
      <td>0</td> \
      <td>0</td> \
      <td>3</td> \
      <td>7</td> \
      <td>1st</td> \
    </tr> \
  </table>';

  $("#rtable").html(rtable);
  $("#ptable").html(ptable);
});
