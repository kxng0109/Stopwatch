window.onload = () =>{
	// var width  = window.innerWidth  || document.body.clientWidth;
	// var height = window.innerHeight || document.body.clientHeight;
	// alert(width);
	// alert(height);
	let millisecond = 00;
	let seconds = 00;
	let addSeconds = document.querySelector('#seconds');
	let addMilliseconds = document.querySelector('#milliseconds');
	const btnstart = document.querySelector('#start');
	const btnstop = document.querySelector('#stop');
	const lap = document.querySelector('#lap');
	const reset = document.querySelector('#reset');
	const lapvalue = document.querySelector('.result');
	const result = document.querySelector('.result');
	const theme = document.querySelector('.theme');
	var interval;
	var laptime = '00:00';

	theme.onclick = () =>{
		if (theme.getAttribute('src') === 'icon/sun.svg') {
			theme.setAttribute('src', 'icon/moon.svg');
			document.body.classList.remove('light');
			document.body.classList.add('dark');
		} else {
			theme.setAttribute('src', 'icon/sun.svg');
			document.body.classList.remove('dark');
			document.body.classList.add('light');
		}
	}

	btnstart.onclick = () =>{
		clearInterval(interval);
		interval = setInterval(startTimer, 10);
	}

	btnstop.onclick = function(){
		clearInterval(interval);
	}

	lap.onclick = () =>{	
		let timers = document.createElement('p');
		if (laptime == '00:00') {
			alert('Start the timer😁!');
		} else {			
			timers.innerHTML = laptime;	
			result.appendChild(timers);
			}
	}

	reset.onclick = () =>{
		clearInterval(interval);
		millisecond = 00;
		seconds = 00;
		addMilliseconds.innerHTML = '00';
		addSeconds.innerHTML = '00';
		laptime = '00:00';
		result.textContent = '';
	}

	function startTimer() {
		 millisecond++;

		 if (millisecond <= 9) {
		 	addMilliseconds.innerHTML = '0' + millisecond;
		 }

		 if (millisecond > 9) {
		 	addMilliseconds.innerHTML = millisecond;
		 }

		 if (millisecond > 99) {
		 	millisecond = 00;
		 	seconds++;
		 	addSeconds.innerHTML = '0' + seconds;
		 	addMilliseconds.innerHTML = '00';
		 }

		  if (seconds > 9) {
		 	addSeconds.innerHTML = seconds;
		 }

		 laptime = `${addSeconds.innerHTML}:${addMilliseconds.innerHTML}`;
	}	
}