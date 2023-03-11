// JavaScript Document



const choreListEl = document.querySelector(".chore_list")
const thisWeekListEl = document.querySelector(".this_week_chores")

let allChores = [
	{
		choreName: "Wipe down kitchen countertops/stove",
		frequency: "weekly",
		frequencyDays: 7,
		lastCompleted: '',
		currentChore: true,
		weeksUntilCurrent: 0,
		completed: false,
		notes: 'make sure to get the island too'
		 
	},
	{
		choreName: "Make sure dryer is empty",
		frequency: "weekly",
		frequencyDays: 7,
		lastCompleted: '',
		currentChore: true,
		weeksUntilCurrent: 0,
		notes: ''
	},
	{
		choreName: "Clean Oven",
		frequency: "every four months",
		frequencyDays: 7 * 16,
		lastCompleted: '',
		currentChore: false,
		weeksUntilCurrent: 4,
		notes: 'run self cleaning cycle, scrub inside oven, and soak racks in dish soap/water overnight'
	}
	
	
	
	
]


const allChoresListHtml = allChores.map(function(choreItem) {
	return `<li>${choreItem.choreName}</li>`
}).join('')

const currentChoresList = allChores.map(function(choreItem) {
	if (choreItem.currentChore) {
		return `<li>${choreItem.choreName}</li>`
	}
}).join('')



choreListEl.innerHTML = 
	`<h1>All Chores</h1><ul>${allChoresListHtml}</ul>`

thisWeekListEl.innerHTML = 
	`<h1>This Week's Chores</h1><ul>${currentChoresList}</ul>`


function showWeeklyDays() {
	allChores.map(function(chore){
		if (chore.frequency === "every four months") {
			console.log(chore.frequencyDays)
		}
	})
}

showWeeklyDays()

console.log(allChoresListHtml)
	
	
	
	
	
