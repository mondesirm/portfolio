// Remove animation after first visit
if (document.cookie != 'visited=true') { document.cookie = 'visited=true; secure'; }
else { document.getElementById('splash-overlay').remove(); document.getElementById('welcome').remove(); }

// After page loaded
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
	var documentsScrollTop = document.getElementById('documents').getBoundingClientRect().top;

	window.onscroll = function() {
		var currentScrollPos = window.pageYOffset;

		if (currentScrollPos > skillsScrollTop && currentScrollPos < documentsScrollTop && currentScrollPos > prevScrollpos) {
			document.getElementById("mainNav").style.top = "-72px";
		} else {
			if (prevScrollpos > currentScrollPos) { document.getElementById("mainNav").style.top = "0"; }
		}

		prevScrollpos = currentScrollPos;
		fadeOnScroll();
	}

	resize();
	fadeOnScroll();
});

// Hide 3D mockup and show an animation for mobile formats
function resize() {
	if (window.innerWidth < 768) {
		$('.crop > img').hide();
	} else {
		$('.crop > img').show();
	}
}

window.onresize = resize;

// Fade sections on scroll
function fadeOnScroll() {
	var documentBottom = $(document).height();
	var triggerAt = 300;

	var aboutTop = $("#about").position().top;
	var skillsTop = $("#skills").position().top;
	var cursusTop = $("#cursus").position().top;
	var projectsTop = $("#projects").position().top;
	var documentsTop = $("#documents").position().top;
	var contactTop = $("#contact").position().top;

	var winST = $(window).scrollTop();

	var aboutPos = aboutTop - winST;
	var skillsPos = skillsTop - winST;
	var cursusPos = cursusTop - winST;
	var projectsPos = projectsTop - winST;
	var documentsPos = documentsTop - winST;
	var contactPos = contactTop - winST;

	var sections = {
		about: [
		"#about", (aboutPos - 800).toFixed(0), aboutPos.toFixed(0), skillsPos.toFixed(0)
		],
		skills: [
		"#skills", (skillsPos - 800).toFixed(0), skillsPos.toFixed(0), cursusPos.toFixed(0)
		],
		cursus: [
		"#cursus", (cursusPos - 800).toFixed(0), cursusPos.toFixed(0), projectsPos.toFixed(0)
		],
		projects: [
		"#projects", (projectsPos - 800).toFixed(0), projectsPos.toFixed(0), documentsPos.toFixed(0)
		],
		documents: [
		"#documents", (documentsPos - 800).toFixed(0), documentsPos.toFixed(0), contactPos.toFixed(0)
		],
		contact: [
		"#contact", (contactPos - 800).toFixed(0), contactPos.toFixed(0), documentBottom.toFixed(0)
		]
	}

	for (section in sections) {
		if (winST >= sections[section][1] && winST < sections[section][3]) {
			$(sections[section][0]).removeClass('hide').fadeIn('fast');
		} else {
			$(sections[section][0]).addClass('hide').fadeIn('fast');
		}
	}
}

// Get data from my profile with the Github API
$.getJSON("https://api.github.com/users/mondesirm", function(data) {
	$('#repos').text(data.public_repos);
	$('#followers').text(data.followers);
	$('#following').text(data.following);
});
