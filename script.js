let frame = document.querySelectorAll('.line')
let i = 1
let totalDelay = 0
let multiplier = 0.05; //ANIMATION SPEED SETTER
for (line of frame) {
	if (i < frame.length) {
		if (i != 1) {
			line.style.setProperty('--delay', `${totalDelay + 1.5}s`)
			line.style.setProperty('--start', `${totalDelay}s`)
		}
		line.style.setProperty('--duration', `${line.innerText.length * multiplier}s`)
		line.style.setProperty('--steps', `${line.innerText.length}`)
		totalDelay = totalDelay + 1.7 + (line.innerText.length * multiplier);
	} else {
		line.classList.remove('line')
		line.classList.add('last-line')
		line.style.setProperty('--delay', `${totalDelay}s`)
	}
	i++
}