$(document).ready(function() {
	// get input and calculte ounces of h2o to drink
	var ouncesOfWater, results;

	function convertInput2Ounces() {
		var weight = parseInt($('input').val());
		if(isNaN(weight)) {
			console.log('Please enter a valid weight.')
		} else {
			console.log(ouncesOfWater = weight / 2);
		}
	}


	// get preference of water bottle preference
	function convertOuncestoNumBottles() {
		console.log(ouncesOfWater);
		var bottleOzPref = parseInt($('select').val());
		if(isNaN(ouncesOfWater)) {
			console.log('Enter a Valid Weight.');
		} else {
			results = Math.floor(ouncesOfWater / bottleOzPref);
			console.log(results);
		}
	}

	$('#waterCalc').on('click', 'button', function(e) {
		e.preventDefault();
		convertInput2Ounces();
		convertOuncestoNumBottles();
		$('#results').text('You should drink ' + results + ' bottles of water a day.')
	});



	// give result and play with animate 'girl' to be all blue


})

