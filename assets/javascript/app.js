$(document).ready(function (){	

	var number = 100;
	var timer;
	var correct = 0;
	var incorrect = 0;
	var unanswered = 8;
	var right = ["1903", "1914", "2000", "14,000", "France", "25,000", "$10,000,000", "8,000"];

	$('.gamequestions').hide();
	$('#scoring').hide();

	$("#donebtn").on("click", function(){
			$(".gamequestions").hide(".gamequestions");
			$('#scoring').show();
			clearInterval(timer);
			$('#wins').html("Correct Answers: " + correct);
			$('#losses').html("Incorrect Answers: " + incorrect);
			$('#unanswered').html("Unanswered: " + (8 - (correct + incorrect)));
	});

	$("input:radio[name='optradio']").change(function(){
		if( $(this).is(":checked")){
			var val = $(this).val();	
		};

		for(i=0; i < right.length; i++){
		var rightElement = right[i];

			if(val === rightElement){
				correct++;
			};
		}

		if (val === "wrong"){
				incorrect++;
			};		
	});



	$("#startbtn").on("click", function() {
		$("#startbtn").hide("#startbtn");
		$('.gamequestions').show();

		function run() {
      		timer = setInterval(decrement, 1000);
    	}
    	function decrement() {

      		number--;

      		$("#countdown").html("Time Remaining: " + number + "s");

      		if (number === 0) {

        		stop();
      		}
    	}

    	function stop() {
			$(".gamequestions").hide(".gamequestions");
			console.log(unanswered)
		unanswered = unanswered - (correct + incorrect);
		console.log(unanswered);
			$('#scoring').show();
			$('#wins').html("Correct Answers: " + correct);
			$('#losses').html("Incorrect Answers: " + incorrect);
			$('#unanswered').html("Unanswered: " + unanswered);
	    }

    	run();
	/*
	I need to create a start button that will begin the game. I should be the first thing on the screen and be overwritten the questions to follow.
	I need to create a timer.
		The timer running out should end the game.
	Need to create a done button.
		The button should end the game as the timer would except that it can be activated at any time.	
	Once the game ends the system should check the answer selected for each question
		To do this you can tag an answer in each field as correct.
			if the correct answer is clicked log it as a correct answer.
		If an answer is correct it should be marked as a correct answer
		If an answer is incorrect is should be marked as a wrong answer
		If an answer is left unselected it should be marked as unanswered
		These values should overwrite all previous values on the screen.
	*/
});	
});