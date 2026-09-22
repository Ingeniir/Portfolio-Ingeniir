export interface Project {
  title: string;
  description: string;
  status: string;
  category: string;
  technologies: string[];
}

export const featuredProjects: Project[] = [
  {
    title: "Application de gestion universitaire",
    description:
      "Prototype d'application desktop conçu pour centraliser l'emploi du temps, les tâches, les cours et les documents universitaires.",
    status: "Projet en pause",
    category: "Développement logiciel",
    technologies: ["Tauri", "SolidJS", "TypeScript"],
  },
  {
    title: "Explorations en analyse de données",
    description:
      "Premières analyses réalisées sur les jeux de données Titanic et Student Performance afin d’expérimenter le nettoyage, la visualisation et le machine learning.",
    status: "Projet d'apprentissage",
    category: "Data science",
    technologies: ["Python", "pandas", "scikit-learn", "seaborn"],
  },
];
