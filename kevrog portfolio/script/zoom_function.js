// JavaScript Document



//project image zoom
const bodyEl = document.querySelector("body")
const projectImg = document.querySelectorAll(".project_img")
const moreWorkInsightImgWrapper = document.querySelectorAll(".mw_insight_img_wrapper")
const moreWorkHeroImgWrapper = document.querySelectorAll(".mw_hero_img_wrapper")

projectImg.forEach(img => {
	img.addEventListener("click", () => {
		img.classList.toggle("zoom_active")
		// check if zoom is active or inactive
		if (!img.classList.value.includes("zoom_active")) {
			bodyEl.classList.remove("noscroll")
			
			if (img.nextElementSibling) {
				img.nextElementSibling.style.marginTop = "0"
			} else {
				img.previousElementSibling.style.marginBottom = "0"
			}
			
			// add padding to top or bottom to prevent other elements shifting
//			console.log("zoom actived")
//			if (img.nextElementSibling) {
//				img.nextElementSibling.style.marginTop = `${selectedImgHeight}px`
//			} else {img.previousElementSibling.style.marginBottom = `${selectedImgHeight}px`
//				}
//			projectContent.style.paddingTop = `${selectedImgHeight}px`
//		} else {
//			// remove project content padding
////			console.log("zoom deactived")
//			if (img.nextElementSibling) {
//				img.nextElementSibling.style.marginTop = "0"
//			} else {img.previousElementSibling.style.marginBottom = "0"
//				
//			}
		} else {
			bodyEl.classList.add("noscroll")
			
		}
	})
})


//maybe add mw_zoom_actie styles


moreWorkHeroImgWrapper.forEach(img => {
	img.addEventListener("click", () => {
		img.classList.toggle("zoom_active")
		// check if zoom is active or inactive
		if (!img.classList.value.includes("zoom_active")) {
//			bodyEl.classList.remove("noscroll")
			
			if (img.nextElementSibling) {
				img.nextElementSibling.style.marginTop = "0"
			} else {
				img.previousElementSibling.style.marginBottom = "0"
			}
			
		} else {
			
			
		}
	})
})

moreWorkInsightImgWrapper.forEach(img => {
	img.addEventListener("click", () => {
		img.classList.toggle("zoom_active")
		// check if zoom is active or inactive
		if (!img.classList.value.includes("zoom_active")) {
//			bodyEl.classList.remove("noscroll")
			
			if (img.nextElementSibling) {
				img.nextElementSibling.style.marginTop = "0"
			} else {
				img.previousElementSibling.style.marginBottom = "0"
			}
			
		} else {
			
			
		}
	})
})



// reveal and close more work page insights

const moreWorkImgWrapper = document.querySelectorAll(".mw_image_wrapper")
const closeBtn = document.querySelectorAll(".close_btn")
const insightWrapper = document.querySelectorAll(".mw_insight_wrapper")



moreWorkImgWrapper.forEach(img => {
	img.addEventListener("click", () => {
		img.nextElementSibling.style.display = "block"
		bodyEl.classList.add("noscroll")
	})
})


closeBtn.forEach(btn => {
	btn.addEventListener("click", () => {
		btn.parentElement.style.display = "none"
		bodyEl.classList.remove("noscroll")
	})
})

//insightWrapper.forEach(wrapper => {
//	wrapper.addEventListener("click", () => {
//		wrapper.style.display = "none"
//		bodyEl.classList.remove("noscroll")
//	})
//})





//works okay, but not very performant with sroll event listener

//image movement function
//const allInsightImgs = document.querySelectorAll(".insight_img")
//const allInsightTitles = document.querySelectorAll(".insight_title")
//
//
//function checkInsightPosition() {
//	const scrolledImgs = document.querySelectorAll(".in_view_shift_img")
//	const scrolledImgsLength = scrolledImgs.length
//	const nextInsightCard = allInsightCards[scrolledImgsLength]
//	const nextInsightImg = allInsightImgs[scrolledImgsLength]
//	const nextInsightTitle = allInsightTitles[scrolledImgsLength]
//	if (nextInsightCard) {
//		const nextInsightTitlePosition = nextInsightTitle.getBoundingClientRect()
//		const vh = window.innerHeight
//	//	console.log(insightTitlePosition.bottom)
//		if (nextInsightTitlePosition.bottom < vh) {
//	//		console.log("insight is in view")
//			//give element a class here ie in view or out of view
//			nextInsightCard.classList.add("in_view_shift_insight")
//			nextInsightImg.classList.add("in_view_shift_img")
//		} 
//	}
//}
//
//document.getElementById("scroll_container").addEventListener("scroll", checkInsightPosition)












//move text card upward (better because consistent padding at top (try to have each line of text be slightly delayed)

//get viewport height
//check if bottom of element is less than viewport height
//trigger movement for that card only




//intersection observer











////image movement function
//const testCard = document.querySelector(".project_insight")
//const testImg = document.querySelector(".medium_img")
//const insightCard = document.querySelectorAll(".project_insight")
//const insightTitle = document.querySelector(".insight_title")
//const allInsightTitles = document.querySelectorAll(".insight_title")
//
//
////insightCard.forEach(card => {
////	
////})
//
//
//
//function checkInsightPosition() {
//	const insightTitlePosition = insightTitle.getBoundingClientRect()
//	const vh = window.innerHeight
////	console.log(vh)
////	console.log(insightTitlePosition.bottom)
//	if (insightTitlePosition.bottom < vh) {
////		console.log("insight is in view")
//		//give element a class here ie in view or out of view
//		testCard.classList.add("in_view_shift_insight")
//		testImg.classList.add("in_view_shift_img")
//	} else {
//		testCard.classList.remove("in_view_shift_insight")
//		testImg.classList.remove("in_view_shift_img")
//	}
//}
////get viewport height
////check if bottom of element is less than viewport height
////trigger movement for that card only
//
//document.addEventListener("scroll", checkInsightPosition)
//
//
//
////move text card upward (better because consistent padding at top (try to have each line of text be slightly delayed)











////image movement function
//
//const insightCard = document.querySelectorAll(".project_insight")
//const insightTitle = document.querySelector(".insight_title")
//const allInsightTitles = document.querySelectorAll(".insight_title")
//
//
////insightCard.forEach(card => {
////	
////})
//
//let insightPosition = 0
//
//const currentInsight = allInsightTitles.item(insightPosition)
//const nextInsightTitle = allInsightTitles.item(1)
//
//console.log(insightTitle)
//console.log(allInsightTitles.item(1))
//
//let nextInsightTitle = allInsightTitles.item(1)
//
//
//function checkInsightPosition() {
//	const insightTitlePosition = insightTitle.getBoundingClientRect()
//	const vh = window.innerHeight
//	console.log(vh)
//	console.log(insightTitlePosition.bottom)
//	if (insightTitlePosition.bottom < vh) {
//		console.log("insight is in view")
//		insightTitle.style.background = "blue"
//		//give element a class here ie in view or out of view
//	} 
//}
////get viewport height
////check if bottom of element is less than viewport height
////trigger movement for that card only
//
//document.addEventListener("scroll", checkInsightPosition)
//
//
//
////move text card upward (better because consistent padding at top (try to have each line of text be slightly delayed)








//const projectImg = document.querySelectorAll(".project_img")
//
//projectImg.forEach(img => {
//	img.addEventListener("click", () => {
////		console.log("an img was clicked")
//		img.classList.add("zoom_active")
//		
//		const selectedImg = document.querySelector(".zoom_active")
//		const selectedImgHeight = selectedImg.clientHeight
//		console.log(selectedImgHeight)
//		selectedImg.style.height = `${selectedImgHeight + 200}px`
//		console.log(selectedImg.style.height)
//		
//		
//	})
//})





//const projectImg = document.querySelectorAll(".project_img")
//const zoomDisplay = document.getElementById("zoomed_image_screen")
//
//projectImg.forEach(img => {
//	img.addEventListener("click", () => {
////		console.log("an img was clicked")
//		img.classList.toggle("zoom_clicked")
//		const selectedImg = document.querySelector(".zoom_clicked")
//		const selectedImgHeight = selectedImg.clientHeight
//		console.log(selectedImgHeight)
//		selectedImg.style.height = `${selectedImgHeight + 200}px`
//		console.log(selectedImg.style.height)
//		
//		const selectedImgHtml = selectedImg.getElementsByTagName("img")[0].innerHTML
//		const selectedImgSrc = selectedImg.getElementsByTagName("img")[0].getAttribute("src")
//		const selectedImgAlt = selectedImg.getElementsByTagName("img")[0].getAttribute("alt")
//		console.log(img.innerHTML)
//		console.log(selectedImgHeight)
////		selectedImg.classList.add("zoom_active")
//		zoomDisplay.innerHTML = `
////			<div class="project_img zoom_active">
////					<img src="${selectedImgSrc}" alt="${selectedImgAlt}"/>			
////			</div>`			
//		
//		
//		const stackedImg = document.getElementById("stacked_img")
//		stackedImg.addEventListener("click", () => {
//			img.classList.toggle("zoom_clicked")
//			console.log(img.innerHTML)
//			stackedImg.remove()
//		})
//	})
//})
//
//
////zoomDisplay.addEventListener("click", () => {
////	zoomDisplay.innerHTML = " "
////})








//const projectImg = document.querySelectorAll(".project_img")
//const zoomDisplay = document.getElementById("zoomed_image_screen")
//
//projectImg.forEach(img => {
//	img.addEventListener("click", () => {
////		console.log("an img was clicked")
//		img.classList.toggle("zoom_clicked")
//		const selectedImg = document.querySelector(".zoom_clicked")
//		const selectedImgHtml = selectedImg.getElementsByTagName("img")[0].innerHTML
//		const selectedImgSrc = selectedImg.getElementsByTagName("img")[0].getAttribute("src")
//		const selectedImgAlt = selectedImg.getElementsByTagName("img")[0].getAttribute("alt")
//		console.log(img.innerHTML)
////		selectedImg.classList.add("zoom_active")
//		selectedImg.innerHTML += `<img id="stacked_img" src="${selectedImgSrc}" alt="${selectedImgAlt}"/>`			
//		
//		
//		const stackedImg = document.getElementById("stacked_img")
//		stackedImg.addEventListener("click", () => {
//			img.classList.toggle("zoom_clicked")
//			console.log(img.innerHTML)
//			stackedImg.remove()
//		})
//	})
//})
//
//
////zoomDisplay.addEventListener("click", () => {
////	zoomDisplay.innerHTML = " "
////})









//works well

//const projectImg = document.querySelectorAll(".project_img")
//
//projectImg.forEach(img => {
//	img.addEventListener("click", () => {
////		console.log("an img was clicked")
//		img.classList.toggle("zoom_actived")
//	})
//})
//








//projectImg.forEach(img => {
//	img.addEventListener("click", () => {
////		console.log("an img was clicked")
//		img.classList.add("zoom_clicked")
//		const selectedImg = document.querySelector(".zoom_clicked")
//		const selectedImgHtml = selectedImg.getElementsByTagName("img")[0].innerHTML
//		const selectedImgSrc = selectedImg.getElementsByTagName("img")[0].getAttribute("src")
//		const selectedImgAlt = selectedImg.getElementsByTagName("img")[0].getAttribute("alt")
//	
//		zoomDisplay.innerHTML = `
//			<div class="project_img zoom_active">
//					<img src="${selectedImgSrc}" alt="${selectedImgAlt}"/>			
//			</div>`
//		img.classList.remove("zoom_clicked")
//	})
//})
//
//zoomDisplay.addEventListener("click", () => {
//	zoomDisplay.innerHTML = " "
//})













//navElementsArray.forEach(element => {
//	element.addEventListener("click", () => {
//		navElementsArray.forEach(element => {
//			element.classList.remove("active")
//		})
//		element.classList.add("active")
//	})
//})








//
//projectImg.forEach(img => {
//	img.addEventListener("click", function() {
//		projectImg.forEach(function() {
//			console.log("zoom in please")
//		})
//		console.log("adding class list")
////		projectImg.classList.add("image_selected")
//	})
//	selectedImage.addEventListener("click", zoom)
//})







//projectImg.forEach(img => {
//	img.addEventListener("click", function() {
//		projectImg.forEach(function() {
//			console.log("zoom in please")
//		})
//		console.log("adding class list")
////		projectImg.classList.add("image_selected")
//	})
//	selectedImage.addEventListener("click", zoom)
//})
//
//function zoom() {
//	projectImg.classList.toggle("zoom_in_active")
//}





//navElementsArray.forEach(element => {
//	element.addEventListener("click", () => {
//		navElementsArray.forEach(element => {
//			element.classList.remove("active")
//		})
//		element.classList.add("active")
//	})
//})



