// theme.js : bascule entre le mode jour et le mode nuit.
// Le choix est mémorisé dans le navigateur pour toutes les pages.

// 1. Quel thème au chargement ? Celui mémorisé, sinon le réglage de l'appareil.
var theme = null;
try { theme = localStorage.getItem("theme"); } catch (e) {}
if (!theme) {
  var appareilSombre = window.matchMedia("(prefers-color-scheme: dark)").matches;
  theme = appareilSombre ? "dark" : "light";
}

// 2. On l'applique tout de suite, avant l'affichage (évite un flash blanc).
document.documentElement.setAttribute("data-theme", theme);

// 3. Quand la page est prête, on branche le bouton.
document.addEventListener("DOMContentLoaded", function () {
  var bouton = document.querySelector(".theme-bouton");

  // Affiche 🌙 en mode jour (pour passer en nuit) et ☀️ en mode nuit.
  function majBouton() {
    var nuit = theme === "dark";
    bouton.textContent = nuit ? "☀️" : "🌙";
    bouton.setAttribute("aria-label", nuit ? "Passer en mode jour" : "Passer en mode nuit");
  }

  // Au clic : on inverse, on applique, on mémorise.
  bouton.addEventListener("click", function () {
    theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (e) {}
    majBouton();
  });

  majBouton();
});
