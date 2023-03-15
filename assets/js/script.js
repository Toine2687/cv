// rotation images Islande
window.addEventListener('scroll', () => {
	demoImg1.style.transform = 'translate(' + window.scrollY / 7 + 'px,0) rotate(' + window.scrollY / 60 + 'deg)'
	// demoImg2.style.transform = 'translate(0,-' + window.scrollY / 7 + 'px)'
	demoImg3.style.transform = 'translate(-' + window.scrollY / 7 + 'px,0) rotate(-' + window.pageYOffset / 60 + 'deg)'
})
//apparition lente avec IntersectionObserver
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		// console.log(entry)
		entry.target.classList.toggle('show', entry.isIntersecting)
	})
})
const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))
