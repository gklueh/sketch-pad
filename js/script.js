$(document).ready(function() {
    createGrid(20);
});

function createGrid(numSquares) {
    var row = "<div class='row'></div>";
    var $container = $('.container');
    for (var counter = 0; counter < numSquares; counter++) {
        $container.append(row);
    }

    var $rows = $('.row');
    for (var counter = 0; counter < numSquares; counter++) {
        $rows.append("<div class='grid'></div>");
    }

    var $squares = $('.grid');
    $squares.css('height', calculate(numSquares));
    $squares.css('width', calculate(numSquares));
    $squares.mouseenter(function(){
        $(this).addClass('hover');
    });
}

function calculate(numSquares) {
    return 640 / (numSquares);
}

function newGrid() {
    clearGrid();
    var gridSize = prompt('To create a newly sized grid (ex. 64x64), enter one number (ex. 64) from 2-249. Default is 20.');
    createGrid(gridSize);
}

function clearGrid() {
	$('.container').empty();
};