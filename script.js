const counters = document.querySelectorAll('.counter')

counters.forEach((counter) => {
	counter.innerText = '0'

	const updateCounter = () => {
		const target = +counter.getAttribute('data-target')
		const c = +counter.innerText

		const increment = Math.round(Math.random() * 50)

		if (c < target) {
			counter.innerText = `${Math.ceil(c + increment)}`
			setTimeout(updateCounter, 20)
		}
	}

	updateCounter()
})
