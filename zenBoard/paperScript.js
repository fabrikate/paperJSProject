$(document).ready(function() {
	var canvas = $('#myCanvas');
	paper.setup(canvas);

		paper.setup(canvas);
	// Create a Paper.js Path to draw a line into it:
	var path = new paper.Path();
	// Give the stroke a color
	path.strokeColor = 'black';
	var start = new paper.Point(100, 100);
	// Move to start and draw a line from there
	path.moveTo(start);
	// Note that the plus operator on Point objects does not work
	// in JavaScript. Instead, we need to call the add() function:
	path.lineTo(start.add([ 200, -50 ]));
	// Draw the view now:
	paper.view.draw();

	// var path;
	// var idleTime = 0;
	// $('.second').hide();


	// function onMouseDown(event) {
	// 	path = new paper.Path();
	// 	path.fillColor = {
	// 		hue: Math.random() * 360,
	// 		saturation: 1,
	// 		brightness: 1,
	// 		opacity: 0.5
	// 	};

	// 	path.add(event.point);
	// 	idleTime = 0;
	// }

	// function onMouseDrag(event) {
	// 	var paintPoints = event.delta / 2;
	// 	paintPoints.angle += 90;

	// 	var top = event.middlePoint + paintPoints;
	// 	var bottom = event.middlePoint - paintPoints;

	// 	path.add(top);
	// 	path.insert(0, bottom);
	// 	idleTime = 0;
	// }

	// function onMouseUp(event) {
	// 	path.add(event.point);
	// 	path.closed = true;
	// 	path.smooth();
	// 	path.simplify();
	// 	project.activeLayer.lastChild.opacity = 0.5;
	// 	idleTime = 0;
	// }

	// // setInterval(idleTimer, 1000);

	// $('#clearBtn').on('click', function() {
	// 	project.clear();
	// })

	// function idleTimer() {
	// 	idleTime = idleTime + 1;
	// 	if(idleTime > 15) {
	// 		$('#myCanvas').fadeOut(2000, function() {
	// 			project.clear();
	// 			$('#myCanvas').fadeIn('slow');
	// 			return idleTime = 0;
	// 		});
	// 	}
	// }
	// paper.view.draw();

})
