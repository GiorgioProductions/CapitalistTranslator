//Set English as default language
lang = "English";

//Browser language
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

  //Add your language code here

}
language.innerHTML=lang;
document.querySelectorAll('.dropdown-item').forEach(el => el.classList.remove('is-active'));
document.getElementById(lang).classList.add("is-active");
switchLanguage(true);



//Dropdown
document.querySelectorAll('.dropdown').forEach(el => el.addEventListener('click', function(event) {
  event.stopPropagation();
  el.classList.toggle('is-active');
}));

//Language selection
document.querySelectorAll('.dropdown-item').forEach(el => el.addEventListener('click', function(event) {
  language.innerHTML=el.innerHTML;
  document.querySelectorAll('.dropdown-item').forEach(el => el.classList.remove('is-active'));
  el.classList.add("is-active");
  switchLanguage(false);
}));

//Translation
var translate = document.getElementById("translate");
translate.addEventListener('click', function(event) {
  var translation = "";
  var input = document.getElementById("input").value;
  var words = countWords(input);
  if (input == null || input == "") {
    words = 0;
  }
  for (var i = 0; i < words; i++) {
    var translation = translation + "oink ";
  }
  document.getElementById("translation-field").value = translation;
  if (words == 0) {
    switchLanguage(false);
  }
});

//Listen
function listen() {
  window.speechSynthesis.cancel();
  if (!(document.getElementById("translation-field").value == "") && !(document.getElementById("translation-field").value == "")) {
    var audio = new Audio('tts/tts.wav');
    audio.play();
  }
}
function listen2() {
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
function switchLanguage(cookies) {
  var text1 = document.getElementById("text1");
  var text2 = document.getElementById("text2");
  var text3 = document.getElementById("input");
  var text4 = document.getElementById("translation-field");
  var footer = document.getElementById("footer");
  switch (language.innerHTML.toString()) {
    case "English":
    document.title="Capitalist Translator"
    text1.innerHTML = document.title;
    text2.innerHTML = "Translate from your language to <strong>Capitalist</strong>";
    text3.placeholder = "Type something...";
    text4.placeholder = "Translation";
    translate.innerHTML = "Translate";
    footer.innerHTML = "The source code of this web app is licensed <a target=\"_blank\" href=\"https://www.gnu.org/licenses/gpl-3.0.html\">GPL 3.0</a> and can be found <a target=\"_blank\" href=\"https://github.com/GiorgioProductions/CapitalistTranslator\">here</a>."
    var cookiesmessage = "This website uses cookies to improve your experience.";
    var cookiesdismiss = "OK";
    var cookieslink = "Learn more <i class='fas fa-external-link-alt fa-xs'></i>";
    break;

    case "Español":
    document.title="Traductor Capitalista"
    text1.innerHTML = document.title;
    text2.innerHTML = "Traduce de tu idioma al <strong>Capitalista</strong>";
    text3.placeholder = "Escribe algo...";
    text4.placeholder = "Traducción";
    translate.innerHTML = "Traducir";
    footer.innerHTML = "El código fuente de esta página tiene licencia <a target=\"_blank\" href=\"https://www.gnu.org/licenses/gpl-3.0.html\">GPL 3.0</a> y puede ser encontrado <a target=\"_blank\" href=\"https://github.com/GiorgioProductions/CapitalistTranslator\">aquí</a>."
    var cookiesmessage = "Este sitio utiliza cookies para mejorar tu experiencia.";
    var cookiesdismiss = "De acuerdo";
    var cookieslink = "Aprender más <i class='fas fa-external-link-alt fa-xs'></i>";
    break;

    case "Français":
    document.title="Traducteur Capitaliste"
    text1.innerHTML = document.title;
    text2.innerHTML = "Traduire de votre langue au <strong>Capitaliste</strong>";
    text3.placeholder = "Écris quelque chose...";
    text4.placeholder = "Traduction";
    translate.innerHTML = "Traduire";
    footer.innerHTML = "Le code source de cette page est sous licence <a target=\"_blank\" href=\"https://www.gnu.org/licenses/gpl-3.0.html\">GPL 3.0</a> et peut être trouvé <a target=\"_blank\" href=\"https://github.com/GiorgioProductions/CapitalistTranslator\">ici</a>."
    var cookiesmessage = "Ce site Web utilise des cookies pour améliorer votre expérience.";
    var cookiesdismiss = "D'accord";
    var cookieslink = "Apprendre encore plus <i class='fas fa-external-link-alt fa-xs'></i>";
    break;

    case "Português":
    document.title="Tradutor Capitalista"
    text1.innerHTML = document.title;
    text2.innerHTML = "Traduza do seu idioma para o inglês <strong>Capitalista</strong>";
    text3.placeholder = "Escreva algo...";
    text4.placeholder = "Tradução";
    translate.innerHTML = "Traduzir";
    footer.innerHTML = "O código-fonte desta página está licenciado sob a <a target=\"_blank\" href=\"https://www.gnu.org/licenses/gpl-3.0.html\">GPL 3.0</a> e pode ser encontrado <a target=\"_blank\" href=\"https://github.com/GiorgioProductions/CapitalistTranslator\">aqui</a>."
    var cookiesmessage = "Este site usa cookies para melhorar sua experiência.";
    var cookiesdismiss = "De acordo";
    var cookieslink = "Aprender mais <i class='fas fa-external-link-alt fa-xs'></i>";
    break;

    //Add your language strings here

  }


  //This will only be executed when you open the app
  if (cookies) {
    window.cookieconsent.initialise({
    "palette": {
        "popup": {
            "background": "#3298dc",
            "text": "#fff"
        },
        "button": {
            "background": "#fff",
            "text": "#3298dc"
        }
    },
    "theme": "classic",
    "content": {
        "message": cookiesmessage,
        "dismiss": cookiesdismiss,
        "link": cookieslink,
        "href": "https://www.cookiesandyou.com/"
    }
  });}
}
