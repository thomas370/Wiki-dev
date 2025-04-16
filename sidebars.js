// @ts-check

/**
 * Configuration de la sidebar pour Docusaurus
 *
 * Cette configuration définit une sidebar personnalisée avec différentes catégories de documents.
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'index',  // Page d'accueil (index.md)
      label: 'Accueil',
    },
    {
      type: 'category',
      label: 'Linux',
      collapsed: false,
      items: [
        'linux/intro',  // linux/intro.md
        'linux/commandes',  // linux/commandes.md
        'linux/reseau',  // linux/reseau.md
      ],
    },
    {
      type: 'category',
      label: 'Docker',
      collapsed: false,
      items: [
        'docker/intro',  // docker/intro.md
        'docker/images-containers',  // docker/images-containers.md
      ],
    },
    {
      type: 'category',
      label: 'Langages de programmation',
      collapsed: false,
      items: [
        'langages/python',  // langages/python.md
        'langages/javascript',  // langages/javascript.md
        'langages/java',  // langages/java.md
        'langages/go',  // langages/go.md
      ],
    },
  ],
};

module.exports = sidebars;
