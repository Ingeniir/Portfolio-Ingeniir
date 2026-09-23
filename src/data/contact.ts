export interface ContactLink {
  label: string;
  value: string;
  description: string;
  href: string;
  external: boolean;
}

export const email = "ton.adresse@exemple.com";

export const contactLinks: ContactLink[] = [
  {
    label: "E-mail",
    value: email,
    description:
      "Le moyen le plus direct pour me joindre, que ce soit pour un stage, un projet ou une simple question.",
    href: `mailto:${email}`,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "Cédric Hoareau",
    description:
      "Pour échanger de manière professionnelle et suivre l’évolution de mon parcours.",
    href: "https://www.linkedin.com/in/ton-profil",
    external: true,
  },
  {
    label: "GitHub",
    value: "Ingeniir",
    description:
      "Pour consulter mon code, mes expérimentations et mes projets en cours.",
    href: "https://github.com/ton-utilisateur",
    external: true,
  },
];

export const internshipDetails = [
  {
    label: "Type",
    value: "Stage obligatoire de L3 MIASHS",
  },
  {
    label: "Domaines",
    value: "Développement, analyse de données et intelligence artificielle",
  },
  {
    label: "Localisation",
    value: "La Réunion ou à distance",
  },
  {
    label: "Période",
    value: "À préciser selon le calendrier universitaire",
  },
];
