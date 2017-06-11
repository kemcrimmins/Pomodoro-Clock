var minutesDisplay = document.querySelector('#minutes-display');
var secondsDisplay = document.querySelector('#seconds-display');
var countdown;

(function setupButtons() {
	document.querySelector('#start-button').addEventListener('click', startTimer);
	document.querySelector('#increase-button').addEventListener('click', function() {
		minutesDisplay.textContent = parseInt(minutesDisplay.textContent) + 5;
	});
	document.querySelector('#decrease-button').addEventListener('click', function (){
		minutesDisplay.textContent = parseInt(minutesDisplay.textContent) - 5;
	});

	document.querySelector('#reset-button').addEventListener('click', resetTimer);
})();


function startTimer() {
	var pomodoroLengthInSeconds = parseInt(minutesDisplay.textContent) * 60;
	changeInterface();
	timer(pomodoroLengthInSeconds);
}

function resetTimer() {
	clearInterval(countdown);
	minutesDisplay.textContent = '25';
	secondsDisplay.textContent = '00';
	changeInterface();
}

function changeInterface() {
	document.getElementById('start-interface').classList.toggle('hidden');
	document.getElementById('reset-interface').classList.toggle('hidden');
}

function timer(seconds) {
	var timeToStop = Date.now() + seconds * 1000;

	countdown = setInterval(function () {
		var secondsLeft = Math.round((timeToStop - Date.now()) / 1000);

		if (secondsLeft < 0) {
			clearInterval(countdown)
			return;
		}
		displayTimeLeft(secondsLeft);
	}, 1000);
}

function displayTimeLeft(secondsLeft) {
	var minutes = Math.floor( secondsLeft/ 60);
	var seconds = secondsLeft % 60; 

	if (seconds < 10) {
		seconds = '0' + seconds;
	}
	if (minutes < 10) {
		minutes = '0' + minutes;
	}

	minutesDisplay.textContent = minutes;
	secondsDisplay.textContent = seconds;
	//document.title = minutes + ":" + seconds;
}

// TODO: startBreakPeriod => calls timer; needs a toggle to know whether pomodoro or timer
// TODO: resetPomodoro function
// TODO: variable to store user's Pomodoro value for restart of Pomodoro after break

//startTimer();

/*----- Add Event Listeners Button Bindings ------*/


/*----- Begin Button-Binding functions ---------*/