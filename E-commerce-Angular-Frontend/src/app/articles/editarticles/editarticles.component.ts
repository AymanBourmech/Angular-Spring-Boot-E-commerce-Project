import { Component, OnInit, Inject } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';
import { Scategorie } from 'src/app/models/scategorie';
import { ScategoriesService } from 'src/app/services/scategories.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-editarticles',
  templateUrl: './editarticles.component.html',
  styleUrls: ['./editarticles.component.css'],
})
export class EditarticlesComponent implements OnInit {
  id: object;
  reference: String;
  designation: String;
  prixAchat: Number;
  prixVente: Number;
  marque: String;
  qtestock: Number;
  caracteristiques: String;
  imageartpetitf: String;
  category: Object;
  scategory: Object;
  categoriesID: Categorie[];
  scategoriesID: Scategorie[];
  tab: any = [];
  articleForm: FormGroup;
  nouvarticle: Article = new Article();
  cat: Categorie = new Categorie();
  categorie_id: object;

  constructor(
    private formbuilder: FormBuilder,
    public dialogref: MatDialogRef<EditarticlesComponent>,
    private artserv: ArticleService,
    private catserv: CategorieService,
    private scatserv: ScategoriesService,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.id = data.id;
    this.reference = data.reference;
    this.designation = data.designation;
    this.prixAchat = data.prixAchat;
    this.prixVente = data.prixVente;
    this.marque = data.marque;
    this.qtestock = data.qtestock;
    this.caracteristiques = data.caracteristiques;
    this.imageartpetitf = data.imageartpetitf;
    this.category = data.category;
    this.scategory = data.scategory;
  }

  ngOnInit() {
    this.initForms();
    this.loadCategories();
  }
  initForms() {
    this.articleForm = this.formbuilder.group({
      id: this.id,
      reference: this.reference,
      designation: this.designation,
      prixAchat: this.prixAchat,
      prixVente: this.prixVente,
      marque: this.marque,
      qtestock: this.qtestock,
      caracteristiques: this.caracteristiques,
      imageartpetitf: this.imageartpetitf,
      category: this.category,
      scategory: this.scategory,
    });
  }

  onSubmitForm() {
    let article: Article = this.articleForm?.value;
    this.artserv.UpdateArticle(this.id, article).subscribe({
      next: (data) => {
        this.dialogref.close();
        Swal.fire(
          'La modification a été effectuée avec succès!',
          'Cliquer içi!',
          'success'
        );
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  loadCategories() {
    return (
      this.catserv.getcategories().subscribe((data) => {
        this.categoriesID = data;
        console.log(this.categoriesID);
      }),
      (err: any) => console.log(err)
    );
  }
  loadScategories = () => {
    return (
      this.scatserv
        .GetScategorieByCat(this.categorie_id)
        .subscribe((data: Scategorie[]) => {
          this.scategoriesID = data;
        }),
      (err: any) => console.log(err)
    );
  };
  changeSuit(e: any) {
    this.categorie_id = e.target.value;
    this.loadScategories();
  }
  onFileChanged(event: any) {
    this.nouvarticle.imageartpetitf = 'images/' + event.target.files[0].name;
  }
}
