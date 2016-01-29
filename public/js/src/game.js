cell.prototype.check_vertically = function(array){
  for(var i= this.row; i<array.length; i++){
    if(array[i].color == array[i-1].color && array[i].color == array[i-2].color && array[i].color == array[i-3].color){
      var winner_image = "<img src='http://40.media.tumblr.com/tumblr_l7bnwmarA51qzzim1o1_1280.png'>";
      var link_to_reload = "<a href='/'>Play Again!</a>"
      $('body').prepend("<center> " + winner_image + "</center>");
      $('body').prepend("<center><br><br><br>Congratulations, " + turnChooseToggle() + "<br> You Win Because You Got Four Vertically and In a Row!<br><br></center>");
      $('body').append('<center>' + link_to_reload + '</center>')
      $('.container').hide();
      return true;
    }
    return false
  }
}

cell.prototype.check_horizontally = function(row, column){
  var rowArray = cellArray.filter(function(cell){
    return cell.row == row
  })
 // console.log(rowArray);
  for(var i= 0; i < 4; i++) {
      if (rowArray[i].color == rowArray[i+1].color && rowArray[i+1].filled == true && rowArray[i].color == rowArray[i+2].color && rowArray[i+3].filled == true && rowArray[i].color == rowArray[i+3].color && rowArray[i+3].filled == true){
      var winner_image = "<img src='http://40.media.tumblr.com/tumblr_l7bnwmarA51qzzim1o1_1280.png'>";
      var link_to_reload = "<a href='/'>Play Again!</a>"
      $('body').prepend("<center> " + winner_image + "</center>");
      $('body').prepend("<center><br><br><br>Congratulations, " + turnChooseToggle() + "<br> You Win Because You Got Four Horizontally and In a Row!<br><br></center>");
      $('body').append('<center>' + link_to_reload + '</center>')
      $('.container').hide();
        return true;
      }
  // console.log(rowArray)
  }
}


var check_diagonally = function(){

  for(var i=0;i<4;i++) {
    if (cellArray[i].color == cellArray[i+8].color && cellArray[i].color == cellArray[i+16].color && cellArray[i].color == cellArray[i+24].color && cellArray[i+24].color != null) {
      var winner_image = "<img src='http://40.media.tumblr.com/tumblr_l7bnwmarA51qzzim1o1_1280.png'>";
      var link_to_reload = "<a href='/'>Play Again!</a>"
      $('body').prepend("<center> " + winner_image + "</center>");
      $('body').prepend("<center><br><br><br>Congratulations, " + turnChooseToggle() + "<br> You Win Because You Got Four Diagonally and In a Row!<br><br></center>");
      $('body').append('<center>' + link_to_reload + '</center>')
      $('.container').hide();
    }
  }
  for(var i=7;i<11;i++) {
    if (cellArray[i].color == cellArray[i+8].color && cellArray[i].color == cellArray[i+16].color && cellArray[i].color == cellArray[i+24].color && cellArray[i+24].color != null){
            var winner_image = "<img src='http://40.media.tumblr.com/tumblr_l7bnwmarA51qzzim1o1_1280.png'>";
      var link_to_reload = "<a href='/'>Play Again!</a>"
      $('body').prepend("<center> " + winner_image + "</center>");
      $('body').prepend("<center><br><br><br>Congratulations, " + turnChooseToggle() + "<br> You Win Because You Got Four Diagonally and In a Row!<br><br></center>");
      $('body').append('<center>' + link_to_reload + '</center>')
      $('.container').hide();
    }
  }
  for(var i=14;i<18;i++) {
    if (cellArray[i].color == cellArray[i+8].color && cellArray[i].color == cellArray[i+16].color && cellArray[i].color == cellArray[i+24].color && cellArray[i+24].color != null){
            var winner_image = "<img src='http://40.media.tumblr.com/tumblr_l7bnwmarA51qzzim1o1_1280.png'>";
      var link_to_reload = "<a href='/'>Play Again!</a>"
      $('body').prepend("<center> " + winner_image + "</center>");
      $('body').prepend("<center><br><br><br>Congratulations, " + turnChooseToggle() + "<br> You Win Because You Got Four Diagonally and In a Row!<br><br></center>");
      $('body').append('<center>' + link_to_reload + '</center>')
      $('.container').hide();
    }
  }

  for(var i = 3;i<7;i++) {
    if (cellArray[i].color == cellArray[i+6].color && cellArray[i].color == cellArray[i+12].color && cellArray[i].color == cellArray[i+18].color && cellArray[i+18].color != null){
            var winner_image = "<img src='http://40.media.tumblr.com/tumblr_l7bnwmarA51qzzim1o1_1280.png'>";
      var link_to_reload = "<a href='/'>Play Again!</a>"
      $('body').prepend("<center> " + winner_image + "</center>");
      $('body').prepend("<center><br><br><br>Congratulations, " + turnChooseToggle() + "<br> You Win Because You Got Four Diagonally and In a Row!<br><br></center>");
      $('body').append('<center>' + link_to_reload + '</center>')
      $('.container').hide();
    }
    }

  for(var i=10;i<14;i++) {
    if (cellArray[i].color == cellArray[i+6].color && cellArray[i].color == cellArray[i+12].color && cellArray[i].color == cellArray[i+18].color && cellArray[i+18].color != null){
            var winner_image = "<img src='http://40.media.tumblr.com/tumblr_l7bnwmarA51qzzim1o1_1280.png'>";
      var link_to_reload = "<a href='/'>Play Again!</a>"
      $('body').prepend("<center> " + winner_image + "</center>");
      $('body').prepend("<center><br><br><br>Congratulations, " + turnChooseToggle() + "<br> You Win Because You Got Four Diagonally and In a Row!<br><br></center>");
      $('body').append('<center>' + link_to_reload + '</center>')
      $('.container').hide();
    }
    }

  for(var i=17;i<21;i++) {
    if (cellArray[i].color == cellArray[i+6].color && cellArray[i].color == cellArray[i+12].color && cellArray[i].color == cellArray[i+18].color && cellArray[i+18].color != null){
            var winner_image = "<img src='http://40.media.tumblr.com/tumblr_l7bnwmarA51qzzim1o1_1280.png'>";
      var link_to_reload = "<a href='/'>Play Again!</a>"
      $('body').prepend("<center> " + winner_image + "</center>");
      $('body').prepend("<center><br><br><br>Congratulations, " + turnChooseToggle() + "<br> You Win Because You Got Four Diagonally and In a Row!<br><br></center>");
      $('body').append('<center>' + link_to_reload + '</center>')
      $('.container').hide();
    }
  }
}

  // if this.id <= 3 || this.id  10
  // if cellArray[i].color == cellArray[i+8].color
  // var id = this.id;
// Pseudocode:
  // var counter = 1;
  // Access cell up and to right
  // IF color matches,
  //   counter ++
  //   IF counter == 4
  //     WIN!!
  //   ELSE
  //     Check cell up & right
  //       ...repeat till fail ...
  // ELSE keep counter, Access cell down and to left
  //   IF color matches,
  //     counter ++
  //     IF counter == 4
  //       WIN!!
  //     ELSE
  //      Check next cell down & left
  //       ... repeat till fail ...
//    ELSE
  //   FAIL!!!!

  // //
  // var upRight = cellArray.filter(function(cell){
  //   return (cell.id == id + 8);
  // });
  // var upRightCell = upRight[0];
  // console.log(upRightCell);
  //
  //
  // var downLeft = cellArray.filter(function(cell){
  //   return (cell.id == id - 8);
  // });
  //
  // var downLeftCell = downLeft[0];
  // console.log(downLeftCell);

  // NEW WAY THAT WILL SAVE US
// Check ID, case out - check some up-left, some up-right










// checks vertically
    // For vertical check, if row number is greater than or equal to 3-check, else return false
    // same coloumn, decrease the row number to check below cell.
    // checks belows, if it is the same, then keep checking till the counter 4
    // if below cell is not the same color, pass it to the horizontally checking

// var filter_horizontal_array = function(){
//   cellArray.filter(function (cell) {
//   return this.row === cell.row
// });
// };

// var current_cell_right = function(){
//   filter_horizontal_array().filter(function (cell) {
//   if (cell.column === (this.column + counter)) {
//     debugger
//     return cell;
//   }
// })};


// var check_horizontally = function(){
//   if (this.column != 0 || this.column != 6) {
//     var counter1 = 1;
//     var counter2 = 2;
//     while (counter < 4) {
//         for(var i= 0; i < (this.coloumn - 1) ; i++){
//           if(this.color == (current_cell_right().color){
//             counter += 1;
//             return true;
//           }
//           else {
//           return false // horizontally checking returns false
//         }
//       }
//     }
//   }
// }
  // checks horizontally
      // unless column == 0, do left check
      // unless column == 6, do right check
      // define counter and set to 1
      // check the right first if it is same color, then add to the counter and check next box, keep going in that direction until counter is 4 or you reach to the end of the board.When you reach to opposite color, check left
      // same row numbers, to the left decrease column by 1, to go to the right increase the coloumn by 1.
      // check the left and follow above steps...
      // keep the row number same, decrease the coloumn by 1 to check left until you reach to the edge of the board.
