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
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

/**
 * callback function
 * When the target is entering the viewpot, its classlist will be added "your-active-class"
 * When the target is leaving the viewpot, the class "your-active-class" will be removed from target's classlist.
*/
let callback = (entries, observer) => {


    entries.forEach(entry => {
      // Each entry describes an intersection change for one observed
      // target element:
      //   entry.boundingClientRect
      //   entry.intersectionRatio
      //   entry.intersectionRect
      //   entry.isIntersecting
      //   entry.rootBounds
        if(entry.isIntersecting == true){
            entry.target.classList.add("your-active-class")
        }
        else if (entry.isIntersecting == false){
            entry.target.classList.remove("your-active-class")
        }
        
      //   entry.time
    });
  };

/**
 * Create a new Intersection Observer
 * The threshold is 80%, meaning the 
 * 
*/
let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.8
  }
  
let observer = new IntersectionObserver(callback, options);

// Build menu 
const menu = document.getElementById('navbar__list')
const sections = document.getElementsByTagName('section')
for (let i = 0; i < sections.length; i ++){
    const menudetail = document.createElement("li")
    const menuText = document.createElement("a")
    menuText.classList.add("menu__link")
    menuText.href = "#" + sections[i].id
    menuText.textContent = sections[i].dataset.nav
    menudetail.appendChild(menuText)
    menu.appendChild(menudetail)
    //observe all sections.
    observer.observe(sections[i])
}


/**
 * When open the page, set the first section to be the active.
 * 
 * 
*/
setTimeout(()=>{
    sections[0].classList.add("your-active-class")
},500)
