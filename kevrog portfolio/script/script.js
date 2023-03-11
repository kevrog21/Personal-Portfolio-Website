// JavaScript Document


// nav underline functionality
const navElementsArray = document.querySelectorAll(".nav_item")

navElementsArray.forEach(element => {
	element.addEventListener("click", () => {
		navElementsArray.forEach(element => {
			element.classList.remove("active")
		})
		element.classList.add("active")
	})
})



//hamburger menu functionality
const mobileNavItems = document.querySelectorAll(".m_nav_item")
const hamburger = document.querySelector(".hamburger_div")
const mobileNav = document.querySelector(".mobile_nav")

hamburger.addEventListener("click", rotate)
function rotate() {
	hamburger.classList.toggle("rotate")
	mobileNav.classList.toggle("slide")
	document.body.classList.toggle("noscroll")
}

mobileNavItems.forEach(item => {
	item.addEventListener("click", rotate)
})

//ampersand drop

const navLogo = document.querySelector(".nav_logo")
const topAmpersand = document.querySelector(".amp2")

navLogo.addEventListener("click", turnRed)

function turnRed() {
	topAmpersand.classList.toggle("red")
}

//add email address (in JS to avoid email scrapers) using setAttribute
const emailEl = document.querySelectorAll('.email_el')
const email = 'kev@kevrog.com'

emailEl.forEach( element => element.setAttribute("href", `mailto:${email}`))




//emailEl.insertAdjacentHTML( 'afterend', `<a href="t" > `)
//emailAd.insertAdjacentHTML( 'afterend', `</a>`)


//footer current year
const currentYearEl = document.querySelector(".current_year")
currentYearEl.textContent = new Date().getFullYear();




//intersection observer for nav underline
const allSections = document.querySelectorAll("section")
const mobileNavList = document.querySelectorAll(".m_nav_item")
const abvFoldArrows = document.querySelector(".downward_arrows2")
//console.log(mobileNavList)

const topOptions = {
	threshold: .45,
}

const topObserver = new IntersectionObserver (function(entries, topObserver) {
	entries.forEach(entry => {
		if(entry.isIntersecting) {
			if (entry.target.id === "above_fold") {
				navElementsArray.forEach(item => item.classList.remove("active"))
				navElementsArray[0].classList.add("active")
				mobileNavList.forEach(item => item.firstElementChild.classList.remove("active"))
				mobileNavList[0].firstElementChild.classList.add("active")
				abvFoldArrows.classList.remove("fade")
			} else if (entry.target.id === "project_section") {
				navElementsArray.forEach(item => item.classList.remove("active"))
				navElementsArray[1].classList.add("active")
				abvFoldArrows.classList.add("fade")
				mobileNavList.forEach(item => item.firstElementChild.classList.remove("active"))
				mobileNavList[1].firstElementChild.classList.add("active")
			} else if (entry.target.id === "about_section") {
				navElementsArray.forEach(item => item.classList.remove("active"))
				navElementsArray[2].classList.add("active")
				mobileNavList.forEach(item => item.firstElementChild.classList.remove("active"))
				mobileNavList[2].firstElementChild.classList.add("active")
			}
		}
	})
}, topOptions)


allSections.forEach(section => {
	topObserver.observe(section)
})

//intersection observer for section header style change on scroll
const allSectionHeaders = document.querySelectorAll(".section_header")
const viewportWidth = window.innerWidth
//determine where the intersection observer should start based on nav/viewport height
let headerOptions = ''
if (viewportWidth > 600) {
	headerOptions = { rootMargin: '100% 0px -91% 0px',}
} else {
	headerOptions = { rootMargin: '100% 0px -92.5% 0px',}
}

const sectionObserver = new IntersectionObserver (function(entries, sectionObserver) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add("active_section")
		} else {
			entry.target.classList.remove("active_section")
		}
	})
}, headerOptions)

allSectionHeaders.forEach(secHeader => {
	sectionObserver.observe(secHeader)
})



//const sectionObserver = new IntersectionObserver (function(entries, sectionObserver) {
//	if (!entries[0].isIntersecting) {
//		allSectionHeaders[0].classList.add("active_section")
//	} else if (!entries[1].isIntersecting) {
//		
//	}
//}, headerOptions)
//
//allSections.forEach(section => {
//	sectionObserver.observe(section)
//})
	
	
//	entries.forEach(entry => {
//		if (!entry.isIntersecting) {
//			console.log(entry)
//		}
//	})
//}, headerOptions)
//
//allSections.forEach(section => {
//	sectionObserver.observe(section)
//})


//intersection observer for project text shift on scroll into view
const allInsightCards = document.querySelectorAll(".project_insight")

const options = {
	threshold: .35, //how much of the section should be in root before triggering
} // root: null is the viewport & is the default


const observer = new IntersectionObserver(function(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add("in_view_shift_insight")
//			console.log("activating animation")
		} else {
			
//			console.log("deactivating animation")
		}
		
	})
}, options)

allInsightCards.forEach(card => {
	observer.observe(card)
})








//
//const allSections = document.querySelectorAll("section")
//
//
//const options = {
//	threshold: 0.50, //how much of the section should be in root before triggering
//} // root: null is the viewport & is the default
//
//const observer = new IntersectionObserver(function(entries, observer) {
//	entries.forEach(entry => {
//		console.log(entry.isIntersecting)
//		
//	})
//	}, options)
//
//allSections.forEach(section => {
//	observer.observe(section)
//})











