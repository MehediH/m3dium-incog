chrome.extension.sendMessage({}, function(response) {
	let readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		const mediumScripts = document.getElementsByTagName("script")
		
		let isMedium = false;

		for(let i=0; i < mediumScripts.length; i++){
			let s = mediumScripts[i].getAttribute("src");
			if(s && s.includes("medium.com")){
				isMedium = true;
				break;
			}
		}

		let showingUpgrade = document.getElementById("paywall-upsell-button-upgrade");

		if(isMedium && showingUpgrade){
			chrome.runtime.sendMessage({openMedium: window.location.href});
		}
	}
	}, 10);
});