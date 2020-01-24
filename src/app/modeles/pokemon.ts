export class Pokemon {
  id: number;
  nom: string;
  taille: number;
  poids: number;
  type: Array<string>;
  categorie: string;

  constructor(id: number, nom: string, taille: number, poids: number, type: Array<string>, categorie: string) {
    this.id = id;
    this.nom = nom;
    this.taille = taille;
    this.poids = poids;
    this.type = type;
    this.categorie = categorie;
  }
}

