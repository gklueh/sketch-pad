$(document).ready(function() {
    for(var x = 0; x < 40; x++) {
        for(var y = 0; y < 40; y++) {
            var square = $("<div class='grid'></div>");
            square.appendTo('#container');
        }
    }
    $('.grid').hover(function() {
    	$(this).addClass("hover");
  	});
});

function clearGrid() {
	$('.grid').removeClass("hover");
	var numSquares = prompt("How many squares per side would you like to make the new grid?");

	for(var a = 0; a < numSquares; a++) {
        for(var b = 0; b < numSquares; b++) {
        }
    }
    var square2 = $("<div class='grid'></div>");
    square2.replaceWith('#container');
};