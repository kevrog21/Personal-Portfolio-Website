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



//footer current year
const currentYearEl = document.querySelector(".current_year")
currentYearEl.textContent = new Date().getFullYear();




//intersection observer
const allSections = document.querySelectorAll("section")
const mobileNavList = document.querySelectorAll(".m_nav_item")
const abvFoldArrows = document.querySelector(".downward_arrows2")
console.log(mobileNavList)

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











