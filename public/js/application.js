$(document).ready(function() {
  // populateCells();
  fillAColumnListener();
});



function colorChooser(){
  var color = false;
        if (this.color == true) {
          this.color = false;
          return "red"
        }
        else {
          this.color = true;
          return "black"
        }
}

// Look @ the cellArray and parse out only elements that have common column ID #.
// First check the lowest rowID for filled = false.  If false, change value to true.
// If filled is already true, look to the next lowest rowID# and perform above operation.

var fillAColumnListener = function() {
$('#column_id0').on('click', function(e){
  e.preventDefault();
  console.log('clicking');
  var column0Cells = cellArray.filter(function(cell){
    return cell.column == 0;
  })
  for (i=0; i<6; i++){
    if (column0Cells[i].filled == false){
      column0Cells[i].filled = true
      column0Cells[i].color = colorChooser();
      break
    }
  }
    console.log(column0Cells)
})
}

// $('#column_id1').submit(function(e){
//   e.preventDefault;
//   $.ajax({
//     method: "POST",
//     url: '/new_cell'
//   })
//   .done(function(responseData){
//     (responseData.selector).css("background-color", responseData.color)
//   })
// })


var cellArray = [];

cell = function(){
  this.row = null,
  this.column = null,
  this.filled = false,
  this.color = null,
  this.id = null
}

populateCells = function(){
  for (i=0; i < 42; i++){
    var newCell = new cell;
    newCell.id = i;
    newCell.row = Math.floor(i/7);
    newCell.column = i%7;
    cellArray.push(newCell)
    }
  }
