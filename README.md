# Ingeniir — Portfolio de Cédric Hoareau

Portfolio personnel de **Cédric Hoareau**, étudiant en L3 MIASHS à l'Université de La Réunion, orienté développement, analyse de données et intelligence artificielle.

**Site en ligne : [ingeniir.pages.dev](https://ingeniir.pages.dev)**

Le site présente mon parcours, mes compétences et mes projets sous forme d'études de cas détaillées (démarche, résultats, limites et apprentissages).

## Stack technique

| Domaine        | Outils                                                      |
| :------------- | :---------------------------------------------------------- |
| Framework      | [Astro](https://astro.build) — génération de site statique  |
| Style          | [Tailwind CSS 4](https://tailwindcss.com), police Manrope    |
| Langage        | TypeScript                                                  |
| Images         | `astro:assets` + Sharp (optimisation au build)              |
| SEO            | Balises Open Graph, URL canoniques, sitemap, robots.txt     |
| Hébergement    | Cloudflare (Wrangler)                                       |

## Points d'attention

- **Performance** : site entièrement statique, aucun framework JavaScript côté client, images optimisées au build.
- **Accessibilité** : HTML sémantique, lien d'évitement, navigation au clavier, `aria-*` et respect de `prefers-reduced-motion`.
- **Contenu séparé du rendu** : les projets, compétences et informations de contact sont centralisés dans `src/data/`.
- **Responsive** : mise en page pensée mobile d'abord.

## Structure du projet

```text
/
├── public/               # Fichiers statiques (CV, image Open Graph, favicon, robots.txt)
├── src/
│   ├── assets/           # Images optimisées par Astro
│   ├── components/
│   │   ├── about/        # Sections de la page « À propos »
│   │   ├── home/         # Sections de la page d'accueil
│   │   ├── layout/       # En-tête et pied de page
│   │   └── projects/     # Carte de projet
│   ├── data/             # Contenu : projets, compétences, contact, métadonnées du site
│   ├── layouts/          # Layout principal (SEO, en-tête, pied de page)
│   ├── pages/            # Routes : accueil, projets, à propos, contact, 404
│   └── styles/           # Styles globaux et thème Tailwind
├── astro.config.mjs
└── wrangler.jsonc        # Configuration du déploiement Cloudflare
```

## Lancer le projet en local

Prérequis : **Node.js 22.12+** et **pnpm**.

```sh
git clone https://github.com/Ingeniir/Portfolio-Ingeniir.git
cd Portfolio-Ingeniir
pnpm install
pnpm dev
```

Le site est alors disponible sur `http://localhost:4321`.

| Commande       | Action                                         |
| :------------- | :--------------------------------------------- |
| `pnpm dev`     | Démarre le serveur de développement            |
| `pnpm build`   | Génère le site de production dans `./dist/`    |
| `pnpm preview` | Prévisualise le build de production en local   |

## Ajouter un projet

Les projets sont définis dans `src/data/projects.ts`. Ajouter un objet au tableau `projects` suffit : la carte apparaît sur la page Projets et la page de détail `/projets/<slug>` est générée automatiquement. Passer `featured: true` l'affiche aussi sur la page d'accueil.

## Contact

- E-mail : [hoareau.cedric97470@gmail.com](mailto:hoareau.cedric97470@gmail.com)
- LinkedIn : [Cédric Hoareau](https://www.linkedin.com/in/c%C3%A9dric-hoareau/)
- GitHub : [@Ingeniir](https://github.com/Ingeniir)

## Droits

Le code source est consultable à titre de référence. Les contenus (textes, photo, CV) restent la propriété de Cédric Hoareau et ne peuvent pas être réutilisés sans autorisation.
