export const site = {
  name: "Ingeniir",
  author: "Cédric Hoareau",
  defaultTitle: "Cédric Hoareau — Informatique, Data et IA | Ingeniir",
  titleTemplate: "%s — Cédric Hoareau | Ingeniir",
  defaultDescription:
    "Portfolio de Cédric Hoareau, étudiant en L3 MIASHS à l'Université de La Réunion, orienté informatique, analyse de données et intelligence artificielle.",
  locale: "fr_FR",
  themeColor: "#E8DFC8",
};

export const buildTitle = (title?: string) =>
  title ? site.titleTemplate.replace("%s", title) : site.defaultTitle;
