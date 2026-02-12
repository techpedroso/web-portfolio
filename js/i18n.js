import ptBR from './i18n/ptBR.js';
import enUS from './i18n/enUS.js';

const languages = {
  pt: ptBR,
  en: enUS
};

function initI18n() {
  const btn = document.getElementById("language-changer");
  
  let currentLanguage = localStorage.getItem("lang") || "en";

  // intern function to change the texts
  const updateTexts = (lang) => {
    const elements = document.querySelectorAll("[data-i18n]");
    const translationSource = languages[lang];

    elements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translationSource && translationSource[key]) {
        el.innerHTML  = translationSource[key];
      }
    });
  };

  updateTexts(currentLanguage);

  if (btn) {
    btn.addEventListener("click", () => {
      currentLanguage = currentLanguage === "en" ? "pt" : "en";
      localStorage.setItem("lang", currentLanguage);
      updateTexts(currentLanguage);
    });
  }
}

export default initI18n;