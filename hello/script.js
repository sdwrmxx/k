const translations = {
  ru: { title: "Привет, мир!", button: "Изменить цвет" },
  en: { title: "Hello, world!", button: "Change Color" },
  uk: { title: "Привіт, світ!", button: "Змінити колір" },
  pl: { title: "Witaj, świecie!", button: "Zmień kolor" },
  zh: { title: "你好，世界！", button: "改变颜色" },
  ko: { title: "안녕하세요, 세계!", button: "색 변경" },
  ja: { title: "こんにちは、世界！", button: "色を変える" },
  ar: { title: "مرحبا، العالم!", button: "تغيير اللون" },
  es: { title: "¡Hola, mundo!", button: "Cambiar color" },
  de: { title: "Hallo, Welt!", button: "Farbe ändern" },
  fr: { title: "Bonjour, le monde!", button: "Changer la couleur" }
};

const colors = ["#08ff87", "#f72d2d", "#2daaf7", "#f7cb2d", "#cb1aeb"];

document.getElementById("changeColorButton").addEventListener("click", () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById("title").style.color = randomColor;
});

document.querySelectorAll(".dropdown-content div").forEach(item => {
  item.addEventListener("click", function() {
    const selectedLanguage = this.getAttribute("data-lang");
    document.getElementById("title").textContent = translations[selectedLanguage].title;
    document.getElementById("changeColorButton").textContent = translations[selectedLanguage].button;
    document.getElementById("currentLanguage").textContent = this.textContent;
    try {
      localStorage.setItem("selectedLanguage", selectedLanguage);
    } catch (e) {
      console.error("localStorage недоступен", e);
    }
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("selectedLanguage") || "ru";
  document.getElementById("title").textContent = translations[savedLanguage].title;
  document.getElementById("changeColorButton").textContent = translations[savedLanguage].button;

  const selectedElement = document.querySelector(`.dropdown-content div[data-lang="${savedLanguage}"]`);
  if (selectedElement) {
    document.getElementById("currentLanguage").textContent = selectedElement.textContent;
  }
});
