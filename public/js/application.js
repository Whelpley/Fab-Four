$(document).ready(function() {
  populateCells();

  fillAColumnListener();
  chooseAnIconListener();
 p1Icon = "<img src = 'http://assets.nydailynews.com/polopoly_fs/1.1245686!/img/httpImage/image.jpg_gen/derivatives/article_970/afp-cute-puppy.jpg' height=100px width=100px>";
p2Icon ="<img src = 'https://openclipart.org/download/231967/blackcat.svg' height=100px width=100px>";
  turnChooseToggle();

});


var chooseAnIconListener = function() {
 $(".dropdown-content a img").click(function(e){
  e.preventDefault();
  p1Icon = "<img src = " + $(this).attr('src') + " height=100px width=100px>" ;
 $("#button_left").hide();

})
$(".dropdown-content-2 a img").click(function(e){
  e.preventDefault();
  p2Icon = "<img src = " + $(this).attr('src') + " height=100px width=100px>" ;
  $("#button_right").hide();
})}

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


function turnChooseToggle(){
  var cat = true;
    if (this.cat == true) {
      this.cat = false;
      return "Puppy Player!"
    }
    else {
      this.cat = true;
      return "Cat Player!"
    }
}


function colorChooser(){
  var color = true;
        if (this.color == true) {
          this.color = false;
          return p1Icon;
        }
        else {
          this.color = true;
          return p2Icon;
        }
}

// Look @ the cellArray and parse out only elements that have common column ID #.
// First check the lowest rowID for filled = false.  If false, change value to true.
// If filled is already true, look to the next lowest rowID# and perform above operation.
var fillAColumnListener = function() {
$('.column_class').click(function(e){
$('.id_chooser').text(turnChooseToggle())
  var location = $(this);
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
      if (columnCells[i]=== columnCells[5]){
         $(location).hide();
      }
      columnCells[i].color = colorChooser();
      var cellColor = columnCells[i].color;
      console.log(p1Icon);
      var cellRow = columnCells[i].row;
      var cellColumn = columnCells[i].column + 1;
      $("#row_"+cellRow+" td:nth-child("+ cellColumn + ")").prepend(cellColor);
      //columnCells[i].check_diagonally(cellRow, cellColumn);
      columnCells[i].check_horizontally(cellRow, cellColumn);
      if (columnCells[i].row > 2) {
        columnCells[i].check_vertically(columnCells);
      };
      check_diagonally();
      break
    }
  }
})
}
