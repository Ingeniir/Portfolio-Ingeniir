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
    slug: "prediction-survie-titanic",
    title: "Prédiction de la survie des passagers du Titanic",
    summary:
      "Pipeline de classification de bout en bout pour prédire la survie des passagers du Titanic, avec feature engineering, validation croisée et 82,1 % d'accuracy sur un jeu de validation indépendant.",
    description:
      "Construction d'un projet de machine learning reproductible à partir des données brutes du Titanic : analyse exploratoire, création de variables, preprocessing sans fuite de données, comparaison de modèles, optimisation d'une régression logistique, évaluation et génération d'une soumission Kaggle.",
    status: "Terminé",
    category: "Machine learning",
    year: "2026",
    technologies: [
      "Python",
      "pandas",
      "NumPy",
      "scikit-learn",
      "matplotlib",
      "seaborn",
      "Jupyter",
      "joblib",
    ],
    featured: true,
    // repositoryUrl: "https://github.com/TON-UTILISATEUR/titanic-ml-project",
    sections: [
      {
        title: "Contexte",
        paragraphs: [
          "Le naufrage du Titanic constitue un problème classique de classification binaire : à partir des informations disponibles sur un passager, le modèle doit prédire s'il a survécu ou non.",
          "J'ai choisi ce jeu de données volontairement accessible afin de me concentrer sur la qualité de la démarche : organisation du projet, exploration, préparation des variables, validation, interprétation des résultats et reproductibilité.",
          "L'objectif n'était pas uniquement d'obtenir un score sur Kaggle, mais de construire un projet de machine learning complet, compréhensible et réutilisable.",
        ],
      },
      {
        title: "Problématique",
        paragraphs: [
          "La variable cible est Survived, qui indique si un passager a survécu. Le modèle utilise notamment le sexe, l'âge, la classe du billet, le tarif, la composition familiale, le port d'embarquement et les informations extraites du nom, du billet et de la cabine.",
          "Le jeu d'entraînement contient 891 passagers étiquetés. Le jeu de test contient 418 passagers pour lesquels les prédictions sont utilisées afin de produire une soumission Kaggle.",
        ],
        bullets: [
          "Type de problème : classification binaire",
          "Classe 0 : passager non survivant",
          "Classe 1 : passager survivant",
          "Métrique principale : accuracy",
          "Métriques complémentaires : précision, rappel, F1-score et ROC-AUC",
        ],
      },
      {
        title: "Analyse exploratoire",
        paragraphs: [
          "L'analyse exploratoire a permis d'étudier la qualité des données, les distributions et les relations entre les caractéristiques des passagers et leur survie.",
          "Une attention particulière a été portée aux valeurs manquantes de Age, Cabin, Embarked et Fare, ainsi qu'au déséquilibre modéré de la variable cible.",
        ],
        bullets: [
          "Contrôle des dimensions, des types, des doublons et des identifiants",
          "Analyse de la distribution de la variable cible",
          "Comparaison des taux de survie selon le sexe et la classe",
          "Étude de l'âge, du tarif et du port d'embarquement",
          "Analyse de la composition familiale",
          "Étude conjointe du sexe et de la classe",
          "Analyse de la disponibilité des informations de cabine",
          "Création de visualisations enregistrées et réutilisables",
        ],
      },
      {
        title: "Principaux constats",
        paragraphs: [
          "L'analyse montre que le sexe et la classe du billet sont fortement associés à la survie. Les femmes présentent un taux de survie nettement supérieur à celui des hommes, tandis que les passagers de première classe ont davantage survécu que ceux de troisième classe.",
          "L'âge, le tarif du billet et la composition familiale apportent également des informations utiles, mais leurs relations avec la survie sont moins directes. Ces observations restent descriptives et ne doivent pas être interprétées comme des relations causales.",
        ],
        bullets: [
          "Le sexe constitue une variable particulièrement discriminante",
          "Le taux de survie diminue globalement avec la classe du billet",
          "Les enfants semblent avoir bénéficié d'un taux de survie supérieur à plusieurs groupes adultes",
          "Les passagers voyageant seuls présentent généralement un taux de survie inférieur",
          "Les petites familles semblent avoir de meilleurs résultats que les familles très nombreuses",
          "Les tarifs élevés sont davantage représentés parmi les survivants, en partie en raison de leur relation avec la classe",
        ],
      },
      {
        title: "Feature engineering",
        paragraphs: [
          "Plusieurs variables ont été construites à partir des données brutes afin de représenter plus directement certaines informations utiles aux modèles.",
          "Ces transformations ont été regroupées dans un module Python dédié. Elles sont déterministes, n'utilisent pas la variable cible et peuvent être appliquées de manière identique aux jeux d'entraînement, de validation et de test.",
        ],
        bullets: [
          "FamilySize : nombre total de membres de la famille à bord",
          "IsAlone : indique si le passager voyage seul",
          "FamilyGroup : regroupement des différentes tailles de famille",
          "Title : titre extrait du nom, comme Mr, Mrs, Miss ou Master",
          "CabinKnown : indique si la cabine est renseignée",
          "Deck : pont extrait du numéro de cabine",
          "TicketPrefix : préfixe non numérique du billet",
          "NameLength : longueur du nom complet",
        ],
      },
      {
        title: "Pipeline de préparation",
        paragraphs: [
          "Le feature engineering, le preprocessing et le modèle ont été réunis dans un pipeline Scikit-learn. Cette organisation garantit que les transformations statistiques sont apprises uniquement à partir des données d'entraînement.",
          "L'utilisation d'un pipeline réduit les risques de fuite de données et assure que les mêmes traitements sont appliqués lors de l'entraînement, de la validation et de la prédiction sur de nouvelles observations.",
        ],
        bullets: [
          "Création automatique des variables à partir des données brutes",
          "Imputation des variables numériques par la médiane",
          "Imputation des catégories par la modalité la plus fréquente",
          "Standardisation des variables numériques",
          "Encodage one-hot des variables catégorielles",
          "Gestion des catégories inconnues dans le jeu de test",
          "Intégration du classifieur dans le même pipeline",
        ],
      },
      {
        title: "Modélisation et validation",
        paragraphs: [
          "Une partie des observations a été conservée comme jeu de validation final. Les modèles ont été comparés sur le jeu de développement avec une validation croisée stratifiée à cinq plis.",
          "Une baseline, une régression logistique, un arbre de décision, une forêt aléatoire et un gradient boosting ont été évalués. La régression logistique a été retenue, puis optimisée sans utiliser le jeu de validation final.",
        ],
        bullets: [
          "Séparation stratifiée entre développement et validation",
          "Baseline avec DummyClassifier",
          "Comparaison de quatre modèles supervisés",
          "Validation croisée stratifiée à cinq plis",
          "Optimisation des hyperparamètres",
          "Sélection principale selon l'accuracy",
          "Évaluation complémentaire avec la précision, le rappel, le F1-score et la ROC-AUC",
        ],
      },
      {
        title: "Évaluation",
        paragraphs: [
          "Le pipeline optimisé a été évalué une seule fois sur le jeu de validation conservé à l'écart. Il dépasse nettement la baseline qui prédit systématiquement la classe majoritaire.",
          "L'accuracy de 82,1 % mesure la proportion totale de prédictions correctes. La précision, le rappel et le F1-score atteignent chacun 76,8 % pour la classe des survivants. La ROC-AUC de 0,874 indique une bonne capacité à distinguer les deux classes.",
        ],
        bullets: [
          "Rapport de classification détaillé",
          "Matrice de confusion",
          "Courbe ROC",
          "Courbe précision-rappel",
          "Analyse des faux positifs et des faux négatifs",
          "Performances étudiées selon le sexe et la classe",
          "Importance des variables par permutation",
        ],
      },
      {
        title: "Résultats obtenus",
        paragraphs: [
          "La régression logistique a obtenu les meilleurs résultats au cours du protocole de comparaison. Après optimisation, elle atteint une accuracy moyenne de 82,9 % en validation croisée.",
          "Sur le jeu de validation conservé à l'écart, le pipeline obtient une accuracy de 82,1 % et une ROC-AUC de 0,874. La proximité entre les performances de validation croisée et celles du jeu de validation suggère une généralisation cohérente, sans signe manifeste de surapprentissage.",
          "Le score Kaggle n'est pas présenté tant que la soumission n'a pas été évaluée sur le leaderboard.",
        ],
        bullets: [
          "Modèle sélectionné : régression logistique",
          "Accuracy moyenne en validation croisée : 82,9 %",
          "Accuracy sur le jeu de validation : 82,1 %",
          "Précision sur le jeu de validation : 76,8 %",
          "Rappel sur le jeu de validation : 76,8 %",
          "F1-score sur le jeu de validation : 76,8 %",
          "ROC-AUC sur le jeu de validation : 0,874",
          "Baseline majoritaire : environ 61 % d’accuracy",
        ],
      },
      {
        title: "Interprétabilité",
        paragraphs: [
          "L'importance par permutation a été utilisée afin d'estimer l'utilité prédictive des variables pour le pipeline retenu. Cette méthode mesure la baisse de performance provoquée par la permutation aléatoire d'une caractéristique.",
          "Une importance élevée ne prouve toutefois pas qu'une variable cause la survie. Elle indique seulement que le modèle l'utilise pour effectuer ses prédictions dans le contexte de ce jeu de données.",
        ],
      },
      {
        title: "Reproductibilité et livrables",
        paragraphs: [
          "Le projet a été organisé pour permettre de repartir des fichiers bruts et de reproduire les principales étapes. Les notebooks sont séparés par responsabilité et la logique de feature engineering réutilisable est placée dans un module Python.",
          "Le pipeline final est sauvegardé avec joblib. Il contient la création des variables, le preprocessing et le modèle entraîné, ce qui permet de produire de nouvelles prédictions sans reproduire manuellement les transformations.",
        ],
        bullets: [
          "Notebook d'analyse exploratoire",
          "Notebook de feature engineering",
          "Notebook de modélisation et d'évaluation",
          "Module Python réutilisable pour la création des variables",
          "Résultats de validation exportés dans des fichiers CSV et JSON",
          "Figures enregistrées pour la documentation",
          "Pipeline final sauvegardé avec joblib",
          "Fichier submission.csv compatible avec Kaggle",
        ],
      },
      {
        title: "Ce que j'ai appris",
        paragraphs: [
          "Ce projet m'a permis de comprendre qu'un modèle ne représente qu'une partie d'un projet de machine learning. La préparation des données, le protocole de validation et l'analyse des erreurs sont tout aussi importants que le choix de l'algorithme.",
          "J'ai également appris à distinguer les transformations déterministes, qui peuvent être appliquées directement, des transformations qui apprennent des paramètres et doivent être intégrées dans le pipeline pour éviter les fuites de données.",
        ],
        bullets: [
          "Structurer un projet de machine learning de bout en bout",
          "Transformer une analyse exploratoire en hypothèses de modélisation",
          "Créer des caractéristiques à partir de variables textuelles et catégorielles",
          "Utiliser Pipeline et ColumnTransformer",
          "Mettre en place une validation croisée stratifiée",
          "Comparer un modèle à une baseline pertinente",
          "Optimiser des hyperparamètres sans utiliser le jeu de validation final",
          "Analyser les erreurs et interpréter les prédictions",
          "Sauvegarder et recharger un pipeline complet",
        ],
      },
      {
        title: "Limites et améliorations possibles",
        paragraphs: [
          "Titanic est un jeu de données de petite taille et largement étudié. Les performances peuvent varier selon le découpage des données, et certaines catégories contiennent peu d'observations.",
          "Le dataset contient également des dépendances entre certains passagers, notamment lorsqu'ils appartiennent à une même famille ou partagent un billet. Une validation groupée pourrait être étudiée afin de mieux prendre en compte ces relations.",
        ],
        bullets: [
          "Comparer une validation stratifiée à une validation groupée par famille ou billet",
          "Évaluer séparément l'apport de chaque variable créée",
          "Simplifier les variables redondantes",
          "Tester d'autres stratégies d'imputation de l'âge",
          "Étudier la calibration des probabilités",
          "Déployer le pipeline dans une application interactive avec Streamlit",
          "Automatiser l'entraînement et l'évaluation avec des scripts en ligne de commande",
        ],
      },
    ],
  },
];

export const featuredProjects = projects.filter(
  (project) => project.featured,
);

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
