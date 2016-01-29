// var Board = function(){
//   this.won = false;
// }


cell.prototype.check_win = function () {
  // this.check_vertically();
  // this.check_horizontally();
};


cell.prototype.check_vertically = function(array){
  for(var i= this.row; i<array.length; i++){
    if(array[i].color == array[i-1].color && array[i].color == array[i-2].color && array[i].color == array[i-3].color){
      console.log('Hey, You Win Vertically!!!');
      return true;
    }
    return false
  }
}


cell.prototype.check_horizontally = function(row, column){
  var rowArray = cellArray.filter(function(cell){
    return cell.row == row
  })
  for(var i= 0; i<4; i++) {
      if (rowArray[i].color == rowArray[i+1].color && rowArray[i+1].filled == true && rowArray[i].color == rowArray[i+2].color && rowArray[i+3].filled == true && rowArray[i].color == rowArray[i+3].color && rowArray[i+3].filled == true){
        console.log('Hey, You Win Horizontally!!!');
        return true;
      }
  }
}

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

