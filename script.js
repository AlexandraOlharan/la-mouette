const toggle = document.querySelector('.menu-toggle');
const drawer = document.querySelector('.drawer');

if (toggle && drawer) {

  // Ouvrir ou fermer le menu
  toggle.addEventListener('click', () => {

    const isOpen = !drawer.hidden;

    drawer.hidden = isOpen;

    toggle.setAttribute(
      'aria-expanded',
      String(!isOpen)
    );

  });

  // Fermer avec la touche Échap
  document.addEventListener('keydown', (e) => {

    if (e.key === 'Escape') {
      drawer.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
    }

  });

  // Fermer en cliquant à l'extérieur
  document.addEventListener('click', (e) => {

    if (
      !drawer.hidden &&
      !drawer.contains(e.target) &&
      !toggle.contains(e.target)
    ) {
      drawer.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
    }

  });

}