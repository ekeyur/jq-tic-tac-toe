$(document).ready(function () {
  var bool = false;
  var x_win = 0;
  var o_win = 0;
  var draw = 0;
  var blanks = [];
  var arr = [[], [], []];
  var counter = 0;
  $('.play-again').hide();
  $('.square').click(function(){
    var $btn_val = $(this).text();

    if($btn_val === ''){
      $(this).addClass('pressed-x');
      $(this).text('X');
      }
    for (var l=0;l<9;l++){
      var $k = l.toString();
      if((($('#'+$k).text()) !== 'O') && (($('#'+$k).text()) !== 'X')){
        blanks.push(l);
      }
    }
    if(blanks.length > 0){
    var q = getRandomInt(0,blanks.length-1);
    var g = blanks[q];
    var $u = g.toString();
    $('#'+$u).addClass('pressed-o').delay(1000000).text('O');
    }
    blanks = [];

    var k = 0;
    for(var i=0;i<3;i++){
      if(i===1){k=3;}
      if(i===2){k=6;}
      for(var j=0;j<3;j++){
        var $id = (k+j).toString();
        arr[i][j] = $('#'+$id).text();
      }
    }
      counter++;
      if (counter > 2) {
      var winplayer = tictactoe(arr);
      if(winplayer === 'X'){
        x_win++;
        $('.win').text('Player '+winplayer+' won').show();
        $('.square').prop('disabled',true);
        $('.play-again').show();
      }
      else if(winplayer === 'O'){
        o_win++;
        $('.win').text('Player '+winplayer+' won').show();
        $('.square').prop('disabled',true);
        $('.play-again').show();
      }
      else if((counter === 5) && (winplayer === null)){
        draw++;

        $('.win').text('Draw. Try again to win').show();
        $('.square').prop('disabled',true);
        $('.play-again').show();
      }
      }
    $('.x-win').text(x_win);
    $('.o-win').text(o_win);
    $('.draw').text(draw);

    $('.play-again').click(function(){
      $('.square').prop('disabled',false).removeClass('pressed-o pressed-x').text('');
      $('.win').hide();
      for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
          arr[i][j] = '';
        }
      }
      counter = 0;
      $('this').hide();
    });
  });
});












//-------------------------

function tictactoe(mat) {
  // Diagonals
    if (matches(mat[0][0],mat[1][1],mat[2][2])) {
      return mat[1][1];
    }
    if (matches(mat[0][2],mat[1][1],mat[2][0])) {
      return mat[1][1];
    }

// Horizontals & Verticals in the loop at the same time.
    for (var i=0;i<3;i++){
      if (matches(mat[i][0],mat[i][1],mat[i][2])){
        return mat[i][0];
      }
      else if (matches(mat[0][i],mat[1][i],mat[2][i])){
        return mat[0][i];
      }
    }
// If none of the previous cases match.
    return null;
}

function matches(a,b,c){
  return a === b && b === c && b!== '';
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
