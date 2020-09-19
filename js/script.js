// Remove animation after first visit
if (document.cookie != 'visited=true') { document.cookie = 'visited=true'; }
else { document.getElementById('splash-overlay').remove(); document.getElementById('welcome').remove(); }

document.addEventListener('DOMContentLoaded', function() {
	// Typed JS
	new Typed('.typed1', {
		strings: ['HTML', 'CSS', 'JS/jQuery/Ajax', 'PHP', 'SQL', 'JAVA'],
		typeSpeed: 20,
		backSpeed: 20,
		backDelay: 1000,
		loop: true,
		cursorChar: '_'
	});

	new Typed('.typed2', {
		strings: ["Sublime Text 3", "PhpStorm / VSCode", "Git", "WordPress", "Eclipse", "Android Studio", "Code::Blocks", "WAMP / MAMP", "Laragon", "Virtual Box / VM"],
		typeSpeed: 20,
		backSpeed: 20,
		backDelay: 1000,
		loop: true,
		cursorChar: '_'
	});

	new Typed('.typed3', {
		strings: ["GLPI", "MS Outils RSAT", "MS Office 365", "MS Exchange", "MS SharePoint"],
		typeSpeed: 20,
		backSpeed: 20,
		backDelay: 1000,
		loop: true,
		cursorChar: '_'
	});

	// Hide Navbar on Scroll
	var prevScrollpos = window.pageYOffset;
	var skillsScrollTop = document.getElementById('skills').getBoundingClientRect().top;
	var bodyBottom = document.body.offsetHeight;
	var cardsScrollTop = document.getElementById('documents').getBoundingClientRect().top;
	// console.log("Skills Top: " + skillsScrollpos);
	window.onscroll = function() {
		var currentScrollPos = window.pageYOffset;
		// console.log("Prev: " + prevScrollpos + "\nCurrent: " + currentScrollPos);
		if (currentScrollPos > skillsScrollTop && currentScrollPos < cardsScrollTop && currentScrollPos > prevScrollpos) {
			document.getElementById("mainNav").style.top = "-72px";
		} else {
			if (prevScrollpos > currentScrollPos) { document.getElementById("mainNav").style.top = "0"; }
		}
		prevScrollpos = currentScrollPos;
	}
});
