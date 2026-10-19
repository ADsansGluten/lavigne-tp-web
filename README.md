# lavigne-tp-web

# Survie contre le Biais

TP Initiation Web : jeu d'aventure textuel à choix multiples, en HTML/CSS (avec un petit script JavaScript en bonus).

Tu joues un·e data scientist chez RecrutIA, chargé·e d'entraîner une IA qui trie des CV. Chaque décision (données, variables, rééquilibrage, supervision) a des conséquences. 15 pages, 3 fins possibles.

## Lancer le jeu
Ouvre `index.html` dans un navigateur. Aucune installation.

## Structure
```
tp-web-survie-biais/
├── index.html              page d'accueil
├── style.css               CSS unique (mode jour et mode nuit)
├── theme.js                bouton jour / nuit (bonus JavaScript)
├── pages/                  les 14 autres pages du jeu
├── assets/
│   ├── backgrounds/        motifs de fond et vignettes SVG (une ambiance par type de scène)
│   ├── icons/              icônes SVG des boutons
│   └── sounds/             (vide, pas de son)
├── arbre-navigation.pdf    arbre de navigation du jeu
└── README.md
```

## Respect des consignes
- 15 pages interconnectées (minimum demandé : 10)
- Chaque page : titre, fond d'ambiance, description narrative, choix multiples
- Boutons personnalisés (classe `.bouton`), avec une icône SVG sur chacun
- Arbre de navigation en PDF, généré à partir des vrais liens du site
- Un seul fichier CSS, couleurs en variables
- Chaque choix mène à une page différente (aucune fausse bifurcation)

## Bonus réalisés
- Mode jour / nuit avec mémorisation du choix (JavaScript)
- Animations CSS : apparition des blocs, jauges qui se remplissent, boutons qui glissent au survol
- Barre de progression, vignette illustrée par scène et bulles de dialogue pour les personnages

## Notions d'IA abordées
Biais historique des données, proxys, rééquilibrage, arbitrage précision et équité, supervision humaine, audit.

Références : en 2018, Amazon a abandonné un outil de tri de CV qui pénalisait les candidatures féminines. Le règlement européen sur l'IA (AI Act) classe les IA de recrutement parmi les systèmes à haut risque. Les chiffres du jeu sont inventés.

## Crédits
Icônes, motifs et vignettes : SVG dessinés pour ce projet.
