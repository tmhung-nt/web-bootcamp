/*// Only executed our code once the DOM is ready.
window.onload = function() {
	// Get a reference to the canvas object
	var canvas = document.getElementById('myCanvas');
	// Create an empty project and a view for the canvas:
	paper.setup(canvas);
	// Create a Paper.js Path to draw a line into it:
	var path = new paper.Path();
	// Give the stroke a color
	path.strokeColor = 'black';
	// var x = 0;
	// var y = 0;
	// var numberOfColumns = 10;
	// var numberOfRows = 9;
	// var circleDistanceBetweenRow = 50;
	// var circleDistanceBetweenColumn = 60;

	// for (var columIter = 0; columIter < numberOfColumns; columIter++){
	// 	y = 0;
	// 	for (var rowIter = 0; rowIter < numberOfRows; rowIter++){
	// 		var start = new paper.Point(x, y);
	// 		var circle = new paper.Path.Circle(start, 10);
	// 		circle.fillColor = 'purple';
	// 		y += circleDistanceBetweenColumn;				
	// 	}
	// 	x += circleDistanceBetweenRow;
	// }
	// for (var x = 0; x < 1000; x+= 100){
	// 	for (var y = 0; y < 1000; y+= 100){
	// 		new paper.Path.Circle(new paper.Point(x, y), 10).fillColor = 'purple';
	// 	}
	// }
	new paper.Path.Circle(new paper.Point(30, 30), 10).fillColor = 'purple';

}*/