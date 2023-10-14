const questions = [
	//General
	{
		question: "How old are you?",
		answers: [
			{ text: "[0-17]", AGLcorrect: true},
			{ text: "[18-25]", ALRcorrect: true},
			{ text: "[26-30]", VITcorrect: true},
			{ text: "[31-35]", INTLcorrect: true},
			{ text: "[36-40]", MGTcorrect: true},
			{ text: "[41-50]", FSTcorrect: false},
			{ text: "[51-60]", FSTcorrect: false},
			{ text: "[61-70]", FSTcorrect: false},
			{ text: "[71+]", FSTcorrect: true}
		]
	},
	{
		question: "I am a ____(Gender)",
		answers: [
			{text: "Male", FSTcorrect: true},
			{text: "Female", INTLcorrect: true},
			{text: "Other", AGLcorrect: true}
		]
	},
	{
		question: "How would you describe yourself?",
		answers: [
			{text: "Smart", INTLcorrect: true},
			{text: "Tough", VITcorrect: true},
			{text: "Agile", AGLcorrect: true},
			{text: "Wise", FSTcorrect: true},
			{text: "Charming", ALRcorrect: true},
			{text: "Strong", MGTcorrect: true}
		]
	},
	{
		question: "How many languages are you fluent in?",
		answers: [
			{text: "1", INTLcorrect: true},
			{text: "2", INTLcorrect: true},
			{text: "3+", INTLcorrect: true}
		]
	},
	{
		question: "Are you familiar with TTRPGs? I.E. DnD, Cyberpunk, Pathfinder, Z-Land, etc.",
		answers: [
			{text: "Yes", INTLcorrect: true},
			{text: "No", INTLcorrect: false}
		]
	},
	{
		question: "Do you have any pets?",
		answers: [
			{text: "Yes", ALRcorrect: true},
			{text: "No", ALRcorrect: false}
		]
	},
	{
		question: "Where do you live?",
		answers: [
			{text: "Big City", ALRcorrect: true},
			{text: "Small City", ALRcorrect: true},
			{text: "Big Town", ALRcorrect: true},
			{text: "Small Town", ALRcorrect: false},
			{text: "Homestead 10+ families", ALRcorrect: true},
			{text: "Homestead 5+ families", ALRcorrect: false},
			{text: "Homestead 1 family", ALRcorrect: false},
			{text: "Shack i.e. You're a Hermit", ALRcorrect: false}
		]
	},
	{
		question: "Are you Considered Healthy??",
		answers: [
			{text: "Yes", VITcorrect: true},
			{text: "No", VITcorrect: false}
		]
	},
	{
		question: "If you are religious how many time do you pray if at all?",
		answers: [
			{text: "Not at All", correct: false},
			{text: "Once a Year", correct: false},
			{text: "2-5 Times a Year", correct: false},
			{text: "10+ Times a Year", correct: false},
			{text: "1-3 Times a Month", correct: false},
			{text: "4-9 Times a Month", correct: false},
			{text: "10+ Times a Month", correct: false},
			{text: "Twice a Day", correct: false},
			{text: "3+ Times a Day", correct: false}
		]
	},
	{
		question: "What is your Religion/Belief System?",
		answers: [
			{text: "Judeo-Christian", correct: false},
			{text: "Islamic", correct: false},
			{text: "Celtic Paganism", correct: false},
			{text: "Norse Paganism", correct: false},
			{text: "Toaism", correct: false},
			{text: "Buddhism", correct: false},
			{text: "Hinduism", correct: false},
			{text: "Spiritualism", correct: false},
			{text: "Agnostic", correct: false},
			{text: "Atheist", correct: false}
		]
	},
	//Might
	{
		question: "From ground to chest can you pick up 50 pounds",
		answers: [
			{text: "Yes", MGTcorrect: true},
			{text: "No", MGTcorrect: false}
		]
	},
	{
		question: "From ground to chest can you pick up 100 pounds",
		answers: [
			{text: "Yes", MGTcorrect: true},
			{text: "No", MGTcorrect: false}
		]
	},
	{
		question: "From ground to chest can you pick up 150 pounds",
		answers: [
			{text: "Yes", MGTcorrect: true},
			{text: "No", MGTcorrect: false}
		]
	},
	{
		question: "Can you lift your own weight? I.E. pullups, Rope Climbing, Rock Climbing, etc.",
		answers: [
			{text: "Yes", MGTcorrect: true},
			{text: "No", MGTcorrect: false}
		]
	},
	{
		question: "How many Pencils can you break at once?",
		answers: [
			{text: "1", correct: false},
			{text: "2", correct: false},
			{text: "4", correct: false},
			{text: "6", correct: false},
			{text: "8", correct: false},
			{text: "10", correct: false},
			{text: "15", correct: false},
			{text: "20", correct: false},
			{text: "21+", correct: false}
		]
	},
	{
		question: "How many fights have you won?",
		answers: [
			{text: "0", correct: false},
			{text: "1", correct: false},
			{text: "2", correct: false},
			{text: "3", correct: false},
			{text: "4", correct: false},
			{text: "5+", correct: false}
		]
	},
	{
		question: "How often do you do strength excersizes?(pushups, weight lifing, squats",
		answers: [
			{text: "I Don't", correct: false},
			{text: "Weekly", correct: false},
			{text: "Twice a Week", correct: false},
			{text: "Three Times a Week", correct: false},
			{text: "Once a Day", correct: false},
			{text: "Twice a Day", correct: false},
			{text: "All Day(Physical Trainer, Factory Worker, Soldier, etc)", correct: false}
		]
	},
	{
		question: "How much weight can you carry in total? i.e. a full backpack or armor covering your body.",
		answers: [
			{text: "50lbs", correct: false},
			{text: "100lbs", correct: false},
			{text: "150lbs", correct: false},
			{text: "200lbs", correct: false},
			{text: "250lbs", correct: false},
			{text: "300lbs", correct: false},
			{text: "350lbs", correct: false},
			{text: "400lbs", correct: false},
			{text: "450lbs", correct: false},
			{text: "500lbs+ I'm Batman!!!", correct: false}
		]
	},
	{
		question: "How far can you throw a baseball?",
		answers: [
			{text: "10m", correct: false},
			{text: "20m", correct: false},
			{text: "30m", correct: false},
			{text: "40m", correct: false},
			{text: "50m", correct: false},
			{text: "60m", correct: false},
			{text: "70m", correct: false},
			{text: "80m", correct: false},
			{text: "90m", correct: false},
			{text: "100m+", correct: false}
		]
	},
	{
		question: "Are you overweight?(Fat not muscle)",
		answers: [
			{text: "Yes", MGTcorrect: true},
			{text: "No", MGTcorrect: false}
		]
	},
	{
		question: "Are you underweight?",
		answers: [
			{text: "Yes", MGTcorrect: true},
			{text: "No", MGTcorrect: false}
		]
	},
	{
		question: "Can you crack the shell of two walnuts in ONE hand?",
		answers: [
			{text: "Yes", MGTcorrect: true},
			{text: "No", MGTcorrect: false}
		]
	},
	{
		question: "Are you considered stronger than average by friends and family?",
		answers: [
			{text: "Yes", MGTcorrect: true},
			{text: "No", MGTcorrect: false}
		]
	},
	{
		question: "Do you CURRENTLY play any sports?",
		answers: [
			{text: "Yes", MGTcorrect: true},
			{text: "No", MGTcorrect: false}
		]
	},
	{
		question: "If you are NOT currently playing sport have you played in the last 2 years?",
		answers: [
			{text: "Yes", MGTcorrect: true},
			{text: "No", MGTcorrect: false}
		]
	},
	{
		question: "Have you ever physically restrained someone for an extended period(2+Minutes) of time while they are resisting?(If you have ever practiced official wrestling then yes)",
		answers: [
			{text: "Yes", MGTcorrect: true},
			{text: "No", MGTcorrect: false}
		]
	},
	{
		question: "How long can you perform a plank?",
		answers: [
			{text: "Less than a minute", correct: false},
			{text: "One Minute", correct: false},
			{text: "Two Minutes", correct: false},
			{text: "Three Minutes", correct: false},
			{text: "Four Minutes", correct: false},
			{text: "Five+ Minutes", correct: false}
		]
	},
	{
		question: "How long can you swim at full speed?",
		answers: [
			{text: "One Minute", correct: false},
			{text: "Five Minutes", correct: false},
			{text: "Ten Minutes", correct: false},
			{text: "Twenty Minutes", correct: false},
			{text: "30+ Minutes", correct: false}
		]
	},
	{
		question: "Can you push a car in Neutral?",
		answers: [
			{text: "Yes", MGTcorrect: true},
			{text: "No", MGTcorrect: false}
		]
	},
	{
		question: "How many sheets of paper can you tear in half?",
		answers: [
			{text: "5", correct: false},
			{text: "10", correct: false},
			{text: "20", correct: false},
			{text: "25", correct: false},
			{text: "30", correct: false},
			{text: "35", correct: false},
			{text: "40", correct: false},
			{text: "45", correct: false},
			{text: "50+", correct: false}
		]
	},
	//Agility
	{
		question: "how far can you run in 10 seconds",
		answers: [
			{text: "10ft", correct: false},
			{text: "25ft", correct: false},
			{text: "50ft", correct: false},
			{text: "75ft", correct: false},
			{text: "100ft", correct: false},
			{text: "150ft", correct: false}
		]
	},
	{
		question: "how far can you RUN without getting tired, winded, or tripping?",
		answers: [
			{text: "10m", correct: false},
			{text: "20m", correct: false},
			{text: "30m", correct: false},
			{text: "40m", correct: false},
			{text: "50m", correct: false},
			{text: "60m", correct: false},
			{text: "70m", correct: false},
			{text: "80m", correct: false},
			{text: "100m+", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	//Vitality
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "What would you rate your pain tolerance at on a scale of 0-100? 0=No Tolerance/100=Incapable of Feeling Pain?",
		answers: [
			{text: "0-10", VITcorrect: false},
			{text: "11-20", VItcorrect: false},
			{text: "21-30", VITcorrect: false},
			{text: "31-40", Vitcorrect: false},
			{text: "41-50", VItcorrect: false},
			{text: "51-60", VItcorrect: true},
			{text: "61-70", VITcorrect: true},
			{text: "71-80", VITcorrect: true},
			{text: "81-90", VITcorrect: true},
			{text: "91-100", VITcorrect: true}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	//Intellect
	{
		question: "What is your IQ? (If you dont know go to https://iqtest.com/take-the-test/ or just quess)",
		answers: [
			{text: "70-100", correct: false},
			{text: "100-115", correct: false},
			{text: "116-130", correct: false},
			{text: "131-145", INTLcorrect: true},
			{text: "146+", INTLcorrect: true}
		]
	},
	{
		question: "Are you considered amongst your friends?",
		answers: [
			{text: "Yes", MGTcorrect: true},
			{text: "No", MGTcorrect: false}
		]
	},
	{
		question: "Would someone who upon meeting you for the FIRST time, think you are intelligent?",
		answers: [
			{text: "Yes", MGTcorrect: true},
			{text: "No", MGTcorrect: false}
		]
	},
	{
		question: "Highest level of Education",
		answers: [
			{text: "Highschool", correct: false},
			{text: "Undergraduate", correct: false},
			{text: "Tradeschool", correct: false},
			{text: "College Associates", correct: false},
			{text: "College Bachelors", correct: false},
			{text: "College Masters", correct: false},
			{text: "College Doctorate", correct: false}
		]
	},
	{
		question: "Without using a calculator or a piece of paper (COMPLETELY in your head) what is (548,287 * 826,472)=X",
		answers: [
			{text: "293,415,853,651", correct: false},
			{text: "542,325,853,549", correct: false},
			{text: "453,143,853,464", INTLcorrect: true},
			{text: "I Don't Know", FSTcorrect: true}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	//Foresight
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{//Allure
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	},
	{
		question: "",
		answers: [
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false},
			{text: "", correct: false}
		]
	}
	
];

const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("button_next")

let currentQuestionIndex = 0;
let MGTscore = 0;
let AGLscore = 0;
let VITscore = 0;
let INTLscore = 0;
let FSTscore = 0;
let ALRscore = 0;

function startQuiz(){
	currentQuestionIndex = 0
	MGTscore = 5;
	AGLscore = 5;
	VITscore = 5;
	INTLscore = 5;
	FSTscore = 5;
	ALRscore = 5;
	nextButton.innerHTML = "Next";
	showQuestion();
}
function showQuestion(){
	resetState();
	let currentQuestion = questions[currentQuestionIndex];
	let questionNo = currentQuestionIndex + 1;
	questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

	currentQuestion.answers.forEach(answer => {
		const button = document.createElement("button");
		button.innerHTML = answer.text;
		button.classList.add("button");
		answerButtons.appendChild(button);
		if(answer.MGTcorrect){
			button.dataset.MGTcorrect = answer.MGTcorrect;
		}
		button.addEventListener("click", selectAnswer);
		if(answer.AGLcorrect){
			button.dataset.AGLcorrect = answer.AGLcorrect;
		}
		button.addEventListener("click", selectAnswer);
		if(answer.VITcorrect){
			button.dataset.VITcorrect = answer.VITcorrect;
		}
		button.addEventListener("click", selectAnswer);
		if(answer.INTLcorrect){
			button.dataset.INTLcorrect = answer.INTLcorrect;
		}
		button.addEventListener("click", selectAnswer);
		if(answer.FSTcorrect){
			button.dataset.FSTcorrect = answer.FSTcorrect;
		}
		button.addEventListener("click", selectAnswer);
		if(answer.ALRcorrect){
			button.dataset.ALRcorrect = answer.ALRcorrect;
		}
		button.addEventListener("click", selectAnswer);
		
	});
}

function resetState(){
	nextButton.style.display = "none";
	while(answerButtons.firstChild){
		answerButtons.removeChild(answerButtons.firstChild);
	}
}

function selectAnswer(e){
	const selectedBtn = e.target;
	const MGTisCorrect = selectedBtn.dataset.MGTcorrect === "true";
	const VITisCorrect = selectedBtn.dataset.VITcorrect === "true";
	const AGLisCorrect = selectedBtn.dataset.AGLcorrect === "true";
	const INTLisCorrect = selectedBtn.dataset.INTLcorrect === "true";
	const FSTisCorrect = selectedBtn.dataset.FSTcorrect === "true";
	const ALRisCorrect = selectedBtn.dataset.ALRcorrect === "true";
	if(MGTisCorrect){
		selectedBtn.classList.add("selected");
		MGTscore++;
	}else{
		selectedBtn.classList.add("selectedMinus");
	}
	if(VITisCorrect){
		selectedBtn.classList.add("selected");
		VITscore++;
	}else{
		selectedBtn.classList.add("selectedMinus");
	}
	if(AGLisCorrect){
		selectedBtn.classList.add("selected");
		AGLscore++;
	}else{
		selectedBtn.classList.add("selectedMinus");
	}
	if(INTLisCorrect){
		selectedBtn.classList.add("selected");
		INTLscore++;
	}else{
		selectedBtn.classList.add("selectedMinus");
	}
	if(FSTisCorrect){
		selectedBtn.classList.add("selected");
		FSTscore++;
	}else{
		selectedBtn.classList.add("selectedMinus");
	}
	if(ALRisCorrect){
		selectedBtn.classList.add("selected");
		ALRscore++;
	}else{
		selectedBtn.classList.add("selectedMinus");
	}
	
	Array.from(answerButtons.children).forEach(button => {
		if(button.dataset.correct === "true"){
			button.classList.add("correct");
		}
		button.disabled = true;
	});
	nextButton.style.display = "block";
}
function showScore(){
	resetState();
	questionElement.innerHTML = `Your ability scores are Might- ${MGTscore}, Agility- ${AGLscore}, Vitality- ${VITscore}, Intellect- ${INTLscore}, Foresight- ${FSTscore}, Allure- ${ALRscore},`;
	nextButton.innerHTML = "Try Again"
	nextButton.style.display = "block";
}

function handleNextButton(){
	currentQuestionIndex++;
	if(currentQuestionIndex < questions.length){
		showQuestion();
	}else{
		showScore();
	}
}

nextButton.addEventListener("click", ()=>{
	if(currentQuestionIndex < questions.length){
		handleNextButton();
	}else{
		startQuiz();
	}
})

startQuiz();