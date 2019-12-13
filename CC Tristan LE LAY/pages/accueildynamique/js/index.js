zeroo = true;
centt = true;

function zero(){
		document.getElementById("barre").classList.remove("activer");
}

function activer(){
	zero();
	if (centt === true) {
		document.getElementById("barre").classList.add("activer");
	}
	else{
		document.getElementById("barre").classList.remove("activer");
	}
	centt = !centt;
}