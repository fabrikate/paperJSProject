$(document).ready(function() {

	var head = new Path.Circle(new Point(100, 100), 30);
	head.fillColor = 'powderblue';
	head.strokeColor = 'blue';
	var middle = new Path.Circle(new Point(100, 180), 50);
	middle.style = head.style;
	var end = new Path.Circle(new Point(100, 295), 65);
	end.style = head.style;

})
