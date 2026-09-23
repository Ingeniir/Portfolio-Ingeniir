export interface Quality {
  title: string;
  description: string;
}

export interface VisionDomain {
  title: string;
  description: string;
}

export const qualities: Quality[] = [
  {
    title: "Autonome",
    description:
      "J’apprends la programmation en autodidacte et je développe mes projets seul, de la première idée jusqu’à la mise en ligne.",
  },
  {
    title: "Persévérant",
    description:
      "J’ai déjà passé plusieurs semaines à déboguer un projet sans l’abandonner, jusqu’à comprendre réellement l’origine du problème.",
  },
  {
    title: "Curieux",
    description:
      "J’aime découvrir de nouveaux outils, explorer des domaines que je ne connais pas et comprendre comment les choses fonctionnent.",
  },
];

export const visionDomains: VisionDomain[] = [
  {
    title: "Analyse de données",
    description:
      "Aider une structure à comprendre ses propres données, à les visualiser clairement et à en tirer des décisions concrètes.",
  },
  {
    title: "Intelligence artificielle",
    description:
      "Concevoir des modèles capables d’apprendre à partir de données pour répondre à des problèmes qui ne se résolvent pas avec des règles fixes.",
  },
  {
    title: "Développement logiciel et web",
    description:
      "Créer des applications et des sites qui rendent ces travaux réellement utilisables au quotidien par les équipes.",
  },
];
