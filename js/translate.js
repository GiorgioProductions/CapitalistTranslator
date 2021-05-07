//Set defaults
lang = "English";
translate = document.getElementById("translate");

//Detect browser language
var language = document.getElementById("language-selected");
var browserLang = navigator.language || navigator.userLanguage;
switch (browserLang.substring(0,2)) {
  case "es":
  var lang = "Español";
  break;
  case "en":
  var lang = "English";
  break;
  case "fr":
  var lang = "Français";
  break;
  case "pt":
  var lang = "Português";
  break;
  case "cs":
  var lang = "Čeština";
  break;

  // Add your language code here

}

// Use browser language
language.innerHTML=lang;
document.querySelectorAll('.dropdown-item').forEach(el => el.classList.remove('is-active'));
document.getElementById(lang).classList.add("is-active");
switchLanguage();



// Open and close the dropdown language menu
document.querySelectorAll('.dropdown').forEach(el => el.addEventListener('click', function(event) {
  event.stopPropagation();
  el.classList.toggle('is-active');
}));

// Language selection
document.querySelectorAll('.dropdown-item').forEach(el => el.addEventListener('click', function(event) {
  language.innerHTML=el.innerHTML;
  document.querySelectorAll('.dropdown-item').forEach(el => el.classList.remove('is-active'));
  el.classList.add("is-active");
  switchLanguage();
}));

// Translation
translate.addEventListener('click', function(event) {
  var translation = "";
  var input = document.getElementById("input").value;
  var words = countWords(input);
  if (input == null || input == "" || !input.replace(/\s/g, '').length) {
    words = 0;
  }
  for (var i = 0; i < words; i++) {
    translation += "oink ";
  }
  document.getElementById("translation-field").value = translation;
  if (words == 0) {
    switchLanguage();
  }
});

// Listen
function listen() {
  window.speechSynthesis.cancel();
  if (!(document.getElementById("translation-field").value == "") && !(document.getElementById("translation-field").value == "")) {
    var audio = new Audio('audio/listen.wav');
    audio.play();
  }
}
function tts() {
  window.speechSynthesis.cancel();
  var input = document.getElementById("input").value;
  var msg = new SpeechSynthesisUtterance(input);
  switch (language.innerHTML) {

    case "English":
    var msglang = "en-US"
    break;

    case "Español":
    var msglang = "es-ES"
    break;

    case "Français":
    var msglang = "fr-FR"
    break;

    case "Português":
    var msglang = "pt-BR"
    break;

	  case "Čeština":
    var msglang = "cs-CZ"
    break;

    //Add your language code here

  }
  msg.lang = msglang;
  window.speechSynthesis.speak(msg);
}


//Word counter
function countWords(str) {
  return str.trim().split(/\s+/).length;
}

//Switch Language
function switchLanguage() {
  var title = document.getElementById("title");
  var subtitle = document.getElementById("subtitle");
  var input = document.getElementById("input");
  var translation = document.getElementById("translation-field");
  var footer = document.getElementById("footer");
  switch (language.innerHTML.toString()) {
    case "English":
    document.title="Capitalist Translator"
    title.innerHTML = document.title;
    subtitle.innerHTML = "Translate from your language to <strong>Capitalist</strong>";
    input.placeholder = "Type something...";
    translation.placeholder = "Translation";
    translate.innerHTML = "Translate";
    footer.innerHTML = "The source code of this web app is licensed <a target=\"_blank\" href=\"https://www.gnu.org/licenses/gpl-3.0.html\">GPL 3.0</a> and can be found <a target=\"_blank\" href=\"https://github.com/GiorgioProductions/CapitalistTranslator\">here</a>."
    break;

    case "Español":
    document.title="Traductor Capitalista"
    title.innerHTML = document.title;
    subtitle.innerHTML = "Traduce de tu idioma al <strong>Capitalista</strong>";
    input.placeholder = "Escribe algo...";
    translation.placeholder = "Traducción";
    translate.innerHTML = "Traducir";
    footer.innerHTML = "El código fuente de esta página tiene licencia <a target=\"_blank\" href=\"https://www.gnu.org/licenses/gpl-3.0.html\">GPL 3.0</a> y puede ser encontrado <a target=\"_blank\" href=\"https://github.com/GiorgioProductions/CapitalistTranslator\">aquí</a>."
    break;

    case "Français":
    document.title="Traducteur Capitaliste"
    title.innerHTML = document.title;
    subtitle.innerHTML = "Traduire de votre langue au <strong>Capitaliste</strong>";
    input.placeholder = "Écris quelque chose...";
    translation.placeholder = "Traduction";
    translate.innerHTML = "Traduire";
    footer.innerHTML = "Le code source de cette page est sous licence <a target=\"_blank\" href=\"https://www.gnu.org/licenses/gpl-3.0.html\">GPL 3.0</a> et peut être trouvé <a target=\"_blank\" href=\"https://github.com/GiorgioProductions/CapitalistTranslator\">ici</a>."
    break;

    case "Português":
    document.title="Tradutor Capitalista"
    title.innerHTML = document.title;
    subtitle.innerHTML = "Traduza do seu idioma para o <strong>Capitalista</strong>";
    input.placeholder = "Escreva algo...";
    translation.placeholder = "Tradução";
    translate.innerHTML = "Traduzir";
    footer.innerHTML = "O código-fonte desta página está licenciado sob a <a target=\"_blank\" href=\"https://www.gnu.org/licenses/gpl-3.0.html\">GPL 3.0</a> e pode ser encontrado <a target=\"_blank\" href=\"https://github.com/GiorgioProductions/CapitalistTranslator\">aqui</a>."
    break;

	case "Čeština":
    document.title="Kapitalistický překladač"
    title.innerHTML = document.title;
    subtitle.innerHTML = "Přelož něco z tvého jazyka do jazyka <strong>kapitalistů</strong>";
    input.placeholder = "Napiš něco...";
    translation.placeholder = "Překlad";
    translate.innerHTML = "Přeložit";
    footer.innerHTML = "Zdrojový kód této webové aplikace spadá pod licenci <a target=\"_blank\" href=\"https://www.gnu.org/licenses/gpl-3.0.html\">GPL 3.0</a> a lze jej nalézt <a target=\"_blank\" href=\"https://github.com/GiorgioProductions/CapitalistTranslator\">zde</a>."
    break;

    //Add your language strings here

  }

}
