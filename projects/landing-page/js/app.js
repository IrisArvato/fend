/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const headerBar = document.querySelector('.page__header');
const menuNav = document.getElementById('navbar__list');
const sections = Array.from(document.getElementsByTagName('section'));


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Check if the element in visible in browser
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
	const headerBottom = headerBar.getBoundingClientRect().bottom;
    return  ((rect.top + rect.height) >= headerBottom) && 
	(rect.bottom <= (window.innerHeight + rect.height));
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

// Add navigation into menu dynamically based on the list of sections
function addNavToMenu() { 
 
	sections.forEach(function(section) {
	    const id = section.getAttribute('id');
	    const label = section.getAttribute('data-nav');
		
	    const sectionMenu = document.createElement('li');
		sectionMenu.innerHTML = '<a class="menu__link" href="#' + id + '">' + label + '</a>';
	    sectionMenu.setAttribute('id', 'nav__' + id);
	   
	    menuNav.appendChild(sectionMenu);
	});
}

// To add the expand and collapsed button dynamically
function addExpandAndCollapsedButton() {
	sections.forEach(function(section) {
		const hideButton = document.createElement('button');
		hideButton.innerText = '∧';
		hideButton.addEventListener('click', event => {
			const contents = section.querySelectorAll('p');
			section.classList.toggle("hidden");
			
			const isExpanded = section.classList.contains('hidden');
			hideButton.innerText = isExpanded ? '∨' : '∧';
		});
		
		const header = section.querySelector('h2');
		header.insertAdjacentElement('afterend', hideButton);
	});
}

// Add class 'active' to section when near top of viewport
function setActiveSection() {
	let foundFirstActive = false;
	sections.forEach(function(section) {
		const id = section.getAttribute('id');
		const sectionNav = document.getElementById('nav__' + id);
		
		if (!foundFirstActive && isInViewport(section)){
			foundFirstActive = true;
			
			if (!section.classList.contains('your-active-class')) {
				section.classList.add('your-active-class');
			}
			if (!sectionNav.classList.contains('active')) {
				sectionNav.classList.add('active');
			}
		} else {
			section.classList.remove('your-active-class');
			sectionNav.classList.remove('active');
		}
	});
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu when page is loaded
document.addEventListener('DOMContentLoaded', (event) => {
	
	addNavToMenu();
	addExpandAndCollapsedButton();
});

// Check and update active sections when page is scrolling
document.addEventListener('scroll', (event) => {
	setActiveSection();
});

