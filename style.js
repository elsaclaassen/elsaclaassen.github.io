

const footer = document.querySelector("#footer");
let text = "";
if(footer){
	const d = new Date();
	let day = d.getDay();
	if(day === 0){
		text = "Happy Sunday! Elsa Claassen ~ thank you <3";
	}
	else if(day === 1){
		text = "Happy Monday! Elsa Claassen ~ thank you <3";
	}
	else if(day ===2){
		text = "Happy Tuesday! Elsa Claassen ~ thank you <3";
	}
	else if(day === 3){
		text = "Happy Wednesday! Elsa Claassen ~ thank you <3";
	}
	else if(day ===4){
		text = "Happy Thursday! Elsa Claassen ~ thank you <3";
	}
	else if(day ===5){
		text = "Happy Friday! Elsa Claassen ~ thank you <3";
	}
	else if(day ===6){
		text = "Happy Saturday! Elsa Claassen ~ thank you <3";
	}
	footer.textContent = text;

}


