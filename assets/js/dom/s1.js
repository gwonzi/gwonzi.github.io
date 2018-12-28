$("#s1").click(function() {
  var tablehtml = "\
  <table class=\"stattable\"> \
    <tr> \
      <th>Game</th> \
      <th>1st</th> \
      <th>2nd</th> \
      <th>3rd</th> \
      <th>4th</th> \
    </tr> \
    <tr> \
      <th>1</th> \
      <td>Chris</td> \
      <td>Ryan</td> \
      <td>Eduardo</td> \
      <td>Corey</td> \
    </tr> \
  </table>";
  $("#rtable").html(tablehtml);
});
