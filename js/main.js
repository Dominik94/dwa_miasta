document.addEventListener('DOMContentLoaded', function () {
	const navbar = document.querySelector('.navbar');

	function addShadow() {
		if (window.scrollY >= 800) {
			navbar.classList.add('navbar-shadow');
		} else {
			navbar.classList.remove('navbar-shadow');
		}
	}
	window.addEventListener('scroll', addShadow);
});
