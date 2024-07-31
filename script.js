let isChanged = false;
document.getElementById('changeColorButton').addEventListener('click', function() {
	if (isChanged == false) {
		document.getElementById('changeColorText').style.color = "#ffffff";
	isChanged = true;
	} else {
		document.getElementById('changeColorText').style.color = "#ff00ff";
	isChanged = false;
	}
});