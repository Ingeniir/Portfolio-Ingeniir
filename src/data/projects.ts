export interface ProjectSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  status: string;
  category: string;
  year: string;
  technologies: string[];
  featured: boolean;
  repositoryUrl?: string;
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    slug: "explorations-analyse-de-donnees",
    title: "Explorations en analyse de données",
    summary:
      "Premières analyses réalisées sur des jeux de données publics afin d’apprendre le nettoyage, la visualisation et la modélisation.",
    description:
      "Un ensemble d’exercices personnels menés sur les jeux de données Titanic et Student Performance, utilisés comme terrain d’apprentissage pour comprendre la démarche complète d’une analyse de données.",
    status: "Projet d’apprentissage",
    category: "Analyse de données",
    year: "2025",
    technologies: [
      "Python",
      "pandas",
      "NumPy",
      "scikit-learn",
      "matplotlib",
      "seaborn",
      "Jupyter",
    ],
    featured: true,
    sections: [
      {
        title: "Contexte",
        paragraphs: [
          "Ces analyses ne sont pas des projets originaux : Titanic et Student Performance sont des jeux de données très répandus. Je les ai choisis volontairement, car ils sont documentés et permettent de se concentrer sur la méthode plutôt que sur la collecte des données.",
          "Mon objectif était de comprendre la démarche complète d’une analyse, depuis les données brutes jusqu’à l’interprétation des résultats.",
        ],
      },
      {
        title: "Objectifs",
        paragraphs: [
          "Je me suis fixé des objectifs d’apprentissage précis plutôt qu’un objectif de performance.",
        ],
        bullets: [
          "Manipuler des données avec pandas et NumPy",
          "Identifier et traiter les valeurs manquantes",
          "Explorer les relations entre les variables",
          "Construire des visualisations lisibles",
          "Entraîner de premiers modèles supervisés",
          "Comprendre les métriques d’évaluation",
        ],
      },
      {
        title: "Démarche",
        paragraphs: [
          "J’ai suivi une progression volontairement classique afin d’assimiler chaque étape avant de passer à la suivante.",
        ],
        bullets: [
          "Exploration initiale et statistiques descriptives",
          "Nettoyage et traitement des valeurs manquantes",
          "Visualisation des distributions et des corrélations",
          "Préparation des variables catégorielles",
          "Séparation des données en entraînement et test",
          "Entraînement de modèles simples puis comparaison",
        ],
      },
      {
        title: "Ce que j’ai appris",
        paragraphs: [
          "La partie la plus formatrice n’a pas été la modélisation, mais la préparation des données : c’est elle qui conditionne la qualité des résultats.",
          "J’ai également compris qu’un score élevé ne signifie pas grand-chose sans comprendre la répartition des classes, le choix de la métrique et les limites du jeu de données.",
        ],
      },
      {
        title: "Limites et suite",
        paragraphs: [
          "Ces analyses restent des exercices d’apprentissage : les jeux de données sont propres, petits et déjà largement étudiés.",
          "La suite logique consiste à travailler sur des données que je collecte moi-même, avec un problème réel à résoudre, puis à rendre un modèle réellement utilisable au sein d’une application.",
        ],
      },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
