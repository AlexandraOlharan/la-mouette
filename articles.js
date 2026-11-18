const articles = [
  {
    titre: "Qui est Claire, la jeune fleuriste qui vient d’ouvrir ses portes ?",
    rubrique: "Rencontre",
    chapeau: "Depuis cinq ans, Claire vend ses bouquets de fleurs depuis son salon. Aujourd’hui, elle ouvre ses portes avenue de Clichy.",
    image: "images/fleuriste.png",
    lien: "portraitclaire.html",
    date: "2026-10-18"
  },
  {
    titre: "Voici trois adresses parfaites pour un premier rencard.",
    rubrique: "Adresses",
    chapeau: "Nous vous avons déniché trois adresses pour un rencard.",
    image: "images/rencard.png",
    lien: "portraitclaire.html",
    date: "2026-10-25"
  },
  {
    titre: "À la découverte du patrimoine du 17e",
    rubrique: "Patrimoine",
    chapeau: "Une promenade à travers les lieux et les histoires du quartier.",
    image: "images/pont.png",
    lien: "patrimoine-17.html",
    date: "2026-10-10"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const zoneUne = document.getElementById("articles-une");

  if (!zoneUne) return;

  const derniersArticles = [...articles]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  zoneUne.replaceChildren();

  derniersArticles.forEach((article) => {
    const carte = document.createElement("article");
    carte.className = "featured-card";

    const lien = document.createElement("a");
    lien.href = article.lien;
    lien.className = "featured-card-link";
    lien.setAttribute("aria-label", `Lire : ${article.titre}`);

    const image = document.createElement("img");
    image.src = article.image;
    image.alt = article.titre;
    image.loading = "lazy";

    const rubrique = document.createElement("span");
    rubrique.className = "featured-category";
    rubrique.textContent = article.rubrique;

    const titre = document.createElement("h3");
    titre.textContent = article.titre;

    const chapeau = document.createElement("p");
    chapeau.textContent = article.chapeau;

    const lire = document.createElement("span");
    lire.className = "featured-read";
    lire.append(
      document.createTextNode("Lire l’article"),
      Object.assign(document.createElement("span"), {
        className: "featured-arrow",
        textContent: "⟶"
      })
    );

    lien.append(image, rubrique, titre, chapeau, lire);
    carte.appendChild(lien);
    zoneUne.appendChild(carte);
  });
});