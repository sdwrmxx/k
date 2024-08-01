let isChanged = false;
document.getElementById('changeColorButton').addEventListener('click', function() {
	if (isChanged == false) {
		document.getElementById('changeColorText').style.color = "#ffffff";
		isChanged = true;
		console.log("color changed");
	} else {
		document.getElementById('changeColorText').style.color = "#ff00ff";
		isChanged = false;
		console.log("color changed");
	}
});

let lang;

if (localStorage.getItem("lang") === null) {
	lang = "RU";
} else {
	lang = localStorage.getItem("lang");
} 

function setLanguage() {
	if (lang==="EN") {
		document.getElementById("changeColorText").textContent = "this text changes color";
		document.getElementById("changeColorButton").textContent = "change color";
	    document.getElementById("switchLanguage").textContent = "EN";
    } else if (lang==="RU") {
    	document.getElementById("changeColorText").textContent = "этот текст изменяет цвет";
    	document.getElementById("changeColorButton").textContent = "изменить цвет";
    	document.getElementById("switchLanguage").textContent = "RU";
   }
}
setLanguage();

document.getElementById("switchLanguage").addEventListener("click", function() {
    if (lang === "RU") {
        lang = "EN";
        localStorage.setItem("lang", "EN");
        setLanguage();
        console.log("language set to EN");
    } else if (lang === "EN") {
        lang = "RU";
        localStorage.removeItem("lang");
        setLanguage();
        console.log("language set to RU");
    }
});