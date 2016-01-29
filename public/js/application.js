$(document).ready(function() {
  populateCells();
  console.log(cellArray)
  fillAColumnListener();
});

var cellArray = [];

var cell = function(){
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

function colorChooser(){
  var color = true;
        if (this.color == true) {
          this.color = false;
          return "<img src = 'http://assets.nydailynews.com/polopoly_fs/1.1245686!/img/httpImage/image.jpg_gen/derivatives/article_970/afp-cute-puppy.jpg' height=100px width=100px>"
        }
        else {
          this.color = true;
          return "<img src = 'https://openclipart.org/download/231967/blackcat.svg' height=100px width=100px>"
        }
}

// Look @ the cellArray and parse out only elements that have common column ID #.
// First check the lowest rowID for filled = false.  If false, change value to true.
// If filled is already true, look to the next lowest rowID# and perform above operation.
var fillAColumnListener = function() {
$('.column_class').click(function(e){
  var location = $(this);
  // console.log(location);
  e.preventDefault();
  console.log('clicking');
  var columnCells = cellArray.filter(function(cell){
    return cell.column == location.attr('id')
  }) // the above is a filter function returning only the cells within the column matching location.attr(id)
  for (i=0; i<6; i++){
    if (columnCells[5].filled == true) {
        alert ("THIS COLUMN IS FULL! PICK A DIFFERENT ONE.");
      break
    }
    else if (columnCells[i].filled == false){
      columnCells[i].filled = true;
      columnCells[i].color = colorChooser();
      // console.log(columnCells[i]);
      var cellColor = columnCells[i].color;
      var cellRow = columnCells[i].row;
      var cellColumn = columnCells[i].column + 1;
      $("#row_"+cellRow+" td:nth-child("+ cellColumn + ")").prepend(cellColor);
        columnCells[i].check_horizontally(cellRow, cellColumn);
      if (columnCells[i].row > 2) {
        columnCells[i].check_vertically(columnCells);
      }
      break
    }
  }
})
}
