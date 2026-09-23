export interface ContactLink {
  label: string;
  value: string;
  description: string;
  href: string;
  external: boolean;
}

export const email = "hoareau.cedric97470@gmail.com";

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
      "Pour échanger de manière professionnelle et suivre l'évolution de mon parcours.",
    href: "https://www.linkedin.com/in/c%C3%A9dric-hoareau/",
    external: true,
  },
  {
    label: "GitHub",
    value: "Ingeniir",
    description:
      "Pour consulter mon code, mes expérimentations et mes projets en cours.",
    href: "https://github.com/Ingeniir",
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
    value: "Développement, analyse de données, intelligence artificielle, économétrie et marketing analytics/études de marché",
  },
  {
    label: "Localisation",
    value: "La Réunion ou à distance",
  },
  {
    label: "Période",
    value: "Pour les vacances d'hiver, c'est-à-dire pour le mois de Décembre. Sinon durant ma période scolaire mais reste à voir selon mon emploi du temps.",
  },
];
