$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});

$('#column_id1').submit(function(e){
  e.preventDefault;
  $.ajax({
    method: "POST",
    url: '/new_cell'
  })
  .done(function(responseData){
    (responseData.selector).css("background-color", responseData.color)
  })
})



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




