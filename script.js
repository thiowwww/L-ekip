
/* ==========================================
   L'EKIP — SCRIPT PRINCIPAL DU SITE
   ========================================== */


/* ==========================================
   NAVIGATION ENTRE LES SAISONS
   ========================================== */

function showSeason(number) {

  // Masquer toutes les saisons
  document.querySelectorAll(".season-content").forEach(section => {
    section.classList.remove("active");
  });

  // Désactiver tous les boutons
  document.querySelectorAll(".season-btn").forEach(button => {
    button.classList.remove("active");
  });

  // Afficher la saison sélectionnée
  const selectedSeason = document.getElementById("season-" + number);

  if (selectedSeason) {
    selectedSeason.classList.add("active");
  }

  // Activer le bouton correspondant
  const buttons = document.querySelectorAll(".season-btn");

  if (buttons[number - 1]) {
    buttons[number - 1].classList.add("active");
  }

}


/* ==========================================
   NAVIGATION DU SITE
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {

  // Gestion des liens de navigation
  const navigationLinks = document.querySelectorAll(".navigation a");

  navigationLinks.forEach(link => {

    link.addEventListener("click", function () {

      // Retirer la classe active des liens
      navigationLinks.forEach(navLink => {
        navLink.classList.remove("active");
      });

      // Ajouter active au lien sélectionné
      this.classList.add("active");

    });

  });

});


/* ==========================================
   ANIMATION AU SURVOL DES BOUTONS DE SAISON
   ========================================== */

document.querySelectorAll(".season-btn").forEach(button => {

  button.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-2px)";
  });

  button.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });

});
// Les interactions du site seront ajoutées ici au fil des étapes.
console.log("Bienvenue sur L'EKIP !");
