$(document).ready(function () {
  var bool = false;
  var x_win = 0;
  var o_win = 0;
  var draw = 0;
  var arr = [[], [], []];
  var counter = 0;
  $('.play-again').hide();
  $('.square').click(function(){
    var $btn_val = $(this).text();

    if($btn_val === ''){
      if((bool === false)){
        $(this).addClass('pressed');
        $(this).text('X');
        bool = true;
        }

      else if (bool === true) {
        $(this).addClass('pressed');
        $(this).text('O');
        bool = false;
        }
    }
// computer's turn

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
      else if((counter==9) && (winplayer === null)){
        draw++;

        $('.win').text('Draw. Try again to win').show();
        $('.square').prop('disabled',true);
        $('.play-again').show();
      }

    $('.x-win').text(x_win);
    $('.o-win').text(o_win);
    $('.draw').text(draw);


    $('.play-again').click(function(){
      $('.square').prop('disabled',false).removeClass('pressed').text('');
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
