import { Article } from './article';

export class CartItem {
  id: object;
  name: string;
  imageUrl: string;
  unitPrice: number;
  quantity: number;
  subTotalPrice: any;
  constructor(produit: Article) {
    this.id = produit.id;
    this.name = produit.caracteristiques;
    this.imageUrl = produit.imageartpetitf;
    this.unitPrice = produit.prixVente;
    this.quantity = 1;
  }
}
