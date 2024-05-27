const books = [
  {
    id: 1,
    title: "Une boussole sur l'échiquier",
    numberOfPages: 236,
    pdfLink:
      "https://flipbooklets.com/pdfflipbooklets/une-boussole-sur-l-chiquier-extraits#page1",
    abstract: `Les trois jeux.\n Partant du constat selon lequel II est souvent plus utile de savoir où l'on va que de savoir où l'on est, Xavier Parmentier propose en outre une méthode simple et efficace pour se diriger sur l'échiquier et trouver quelque chose à faire dans la plupart des situations. Loin de l'abstraction de nombre d'approches théoriques, la distinction entre les trois jeux est un outil qui aidera non seulement à cibler un objectif, mais encore à trouver comment l'atteindre.
    Le jeu de la destruction, c'est l'attaque du Roi, qui donne lieu à des combinaisons souvent spectaculaires.
    Le jeu de la promotion, c'est tout ce qui concerne la création et l'avance d'un pion passé. La pensée de Philidor, les pions sont l'âme des échecs, n'est jamais mieux illustrée que quand toutes les forces luttent pour ou contre la marche d'un modeste fantassin.
    Le jeu de la restriction, c'est affaiblir ou neutraliser le camp adverse, voire retourner la force de l'adversaire contre lui. Une philosophie proche de certains arts martiaux, qui requiert la maîtrise de méthodes assez variées.`,
    editor: "Olibris",
    editionYear: "2005",
    imagePath: "../images/une-boussole-sur-l-echiquier.jpg",
    category: "Jeux",
    author: {
      lastname: "Parmentier",
      firstname: "Xavier",
    },
    userId: 2,
  },
  {
    id: 2,
    title: "20.000 lieues sous les mers",
    numberOfPages: 254,
    pdfLink:
      "https://fr.wikisource.org/wiki/Vingt_mille_lieues_sous_les_mers/Texte_entier",
    abstract: `Vingt Mille Lieues sous les mers est un roman d'aventures de Jules Verne, paru en 1869-1870. Il relate le voyage de trois naufragés capturés par le capitaine Nemo, mystérieux inventeur qui parcourt les fonds des mers à bord du Nautilus, un sous-marin très en avance sur les technologies de l'époque.`,
    editor: "Rouge et Or",
    editionYear: "2008",
    imagePath: "../images/2000-mille-lieux-sous-les-mers.jpg",
    category: "Aventure",
    author: {
      lastname: "Verne",
      firstname: "Jules",
    },
    userId: 1,
  },
];

export { books };
