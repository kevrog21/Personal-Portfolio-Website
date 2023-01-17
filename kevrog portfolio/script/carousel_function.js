// JavaScript Document

//carousel functionality
const carouselProjectCardWrapper = document.querySelector(".project_card_wrapper")
const carouselProjectCardsArray = document.getElementsByClassName("project_card")
const carouselLeftArrow = document.querySelector(".carousel_arrow_left")
const carouselRightArrow = document.querySelector(".carousel_arrow_right")
const carouselIndicatorArray = document.getElementsByClassName("indicator")

const totalSlides = carouselProjectCardsArray.length

let slidePosition = 0

carouselRightArrow.addEventListener("click", moveToNextSlide)
carouselLeftArrow.addEventListener("click", moveToPrevSlide)


function moveToNextSlide() {
	carouselProjectCardsArray[slidePosition].classList.add("slide_out_next")
	carouselProjectCardsArray[slidePosition].classList.add("inactive_card")
	carouselIndicatorArray[slidePosition].classList.remove("active_dot")
	if (slidePosition === totalSlides - 1) {
		slidePosition = 0
		} else {
		slidePosition++
	}
	// slide left into position
	carouselProjectCardsArray[slidePosition].className = "project_card"
	carouselProjectCardsArray[slidePosition].classList.add("slide_in_next")
	
	carouselProjectCardsArray[slidePosition].classList.add("active_card")
	carouselIndicatorArray[slidePosition].classList.add("active_dot")
	carouselProjectCardsArray[slidePosition].classList.remove("inactive_card")
	setTimeout(function() {
		const allInactiveCards = document.querySelectorAll(".inactive_card")
		allInactiveCards.forEach(item => {
			item.className = "project_card inactive_card"
		})
	}, 750)
	
//	setTimeout(function() {
//		if (slidePosition === 0) {
//			carouselProjectCardsArray[totalSlides - 1].classList.remove("active_card")
//			console.log("removing last item")
//		} else {
//			carouselProjectCardsArray[slidePosition - 1].classList.remove("active_card")
//			console.log("removing")
//		}
//	}, 750)  
}


function moveToPrevSlide() {
	carouselProjectCardsArray[slidePosition].classList.add("slide_out_prev")
	carouselProjectCardsArray[slidePosition].classList.add("inactive_card")
	carouselIndicatorArray[slidePosition].classList.remove("active_dot")
	if (slidePosition === 0) {
		slidePosition = totalSlides - 1
		} else {
		slidePosition--
	}
	carouselProjectCardsArray[slidePosition].className = "project_card"
	
	carouselProjectCardsArray[slidePosition].classList.add("slide_in_prev")
	carouselProjectCardsArray[slidePosition].classList.add("active_card")
	carouselIndicatorArray[slidePosition].classList.add("active_dot")
	setTimeout(function() {
		const allInactiveCards = document.querySelectorAll(".inactive_card")
		allInactiveCards.forEach(item => {
			item.className = "project_card inactive_card"
		})
	}, 750)
	
//	setTimeout(function() {
//		if (slidePosition === totalSlides - 1) {
//			carouselProjectCardsArray[0].classList.remove("active_card")
//			console.log("removing first item")
//		} else {
//			carouselProjectCardsArray[slidePosition + 1].classList.remove("active_card")
//			console.log("removing")
//		}
//	}, 750) 
}


// mobile swipe functionality

let touchstartX = 0
let touchendX = 0

function handleGesture() {
	if (touchendX < touchstartX) {
		moveToNextSlide()
	} else if (touchendX > touchstartX) {
		moveToPrevSlide()
	} 
}

carouselProjectCardWrapper.addEventListener("touchstart", e => {
	touchstartX = e.changedTouches[0].screenX
})

carouselProjectCardWrapper.addEventListener("touchend", e => {
	touchendX = e.changedTouches[0].screenX
	if (Math.abs(touchstartX - touchendX) > 40) {
		handleGesture()
	}
})










