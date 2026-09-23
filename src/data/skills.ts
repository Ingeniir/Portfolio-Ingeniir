export interface SkillGroup {
  title: string;
  description: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Développement",
    description: "Conception d’interfaces et d’applications web ou desktop.",
    skills: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Astro",
      "Tailwind CSS",
      "SolidJS",
      "Tauri",
    ],
  },
  {
    title: "Data et intelligence artificielle",
    description:
      "Exploration, traitement et visualisation de données ainsi que premiers modèles.",
    skills: [
      "Python",
      "R",
      "pandas",
      "NumPy",
      "scikit-learn",
      "TensorFlow",
      "matplotlib",
      "seaborn",
    ],
  },
  {
    title: "Outils et technologies",
    description:
      "Outils utilisés pour développer, versionner et expérimenter.",
    skills: [
      "Git",
      "GitHub",
      "SQL",
      "Jupyter",
      "FastAPI",
      "QGIS",
      "PyQGIS",
      "MCP",
    ],
  },
];

export const learningSkills: string[] = [
  "Machine learning",
  "Statistiques",
  "Probabilités",
  "Deep learning",
  "Intégration de MCP",
];
