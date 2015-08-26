paper.install(document);
	var canvas = $('#myCanvas');
	paper.setup(canvas);

	var path;
	var idleTime = 0;
	$('.second').hide();


	function onMouseDown (event) {
		path = new paper.Path();
		path.fillColor = {
			hue: Math.random() * 360,
			saturation: 1,
			brightness: 1,
			opacity: 0.5
		};

		path.add(event.point);
		idleTime = 0;
	}

	function onMouseDrag (event) {
		var paintPoints = event.delta / 2;
		paintPoints.angle += 90;

		var top = event.middlePoint + paintPoints;
		var bottom = event.middlePoint - paintPoints;

		path.add(top);
		path.insert(0, bottom);
		idleTime = 0;
	}

	function onMouseUp (event) {
		path.add(event.point);
		path.closed = true;
		path.smooth();
		path.simplify();
		// project.activeLayer.lastChild.opacity = 0.5;
		idleTime = 0;
	}

	// setInterval(idleTimer, 1000);

	$('#clearBtn').on('click', function() {
		project.clear();
	})

	function idleTimer() {
		idleTime = idleTime + 1;
		if(idleTime > 15) {
			$('#myCanvas').fadeOut(2000, function() {
				project.clear();
				$('#myCanvas').fadeIn('slow');
				return idleTime = 0;
			});
		}
	}
	paper.view.draw();
