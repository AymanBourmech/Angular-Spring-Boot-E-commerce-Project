import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';
import { Scategorie } from 'src/app/models/scategorie';
import { ScategoriesService } from 'src/app/services/scategories.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertarticles',
  templateUrl: './insertarticles.component.html',
  styleUrls: ['./insertarticles.component.css'],
})
export class InsertarticlesComponent implements OnInit {
  nouvarticle: Article = new Article();
  categoriesID: Categorie[];
  scategoriesID: Scategorie[];
  tab: any = [];
  categorieid: object;
  articleForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialogref: MatDialogRef<InsertarticlesComponent>,
    private artserv: ArticleService,
    private catserv: CategorieService,
    private scatserv: ScategoriesService
  ) {}

  ngOnInit() {
    this.initForms();
    this.loadCategories();
  }
  initForms() {
    this.articleForm = this.fb.group({
      reference: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      designation: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      prixAchat: new FormControl('', [Validators.required]),
      prixVente: new FormControl('', [Validators.required]),
      marque: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      qtestock: new FormControl('', [Validators.required]),
      caracteristiques: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      imageartpetitf: new FormControl('', [Validators.required]),
      // imageartgrandf: new FormControl([], [Validators.required]),
      category: new FormControl('', [Validators.required]),
      scategory: new FormControl('', [Validators.required]),
    });
  }
  get reference() {
    return this.articleForm.get('reference');
  }

  get designation() {
    return this.articleForm.get('designation');
  }
  get prixAchat() {
    return this.articleForm.get('prixAchat');
  }
  get prixVente() {
    return this.articleForm.get('prixVente');
  }
  get marque() {
    return this.articleForm.get('marque');
  }
  get qtestock() {
    return this.articleForm.get('qtestock');
  }
  get caracteristiques() {
    return this.articleForm.get('caracteristiques');
  }
  get imageartpetitf() {
    return this.articleForm.get('imageartpetitf');
  }
  // get imageartgrandf() {
  //   return this.articleForm.get('imageartgrandf');
  // }
  get category() {
    return this.articleForm.get('category');
  }
  get scategory() {
    return this.articleForm.get('scategory');
  }

  onSubmitForm() {
    let article: Article = this.articleForm?.value;
    this.artserv.AddArticle(article).subscribe({
      next: (data) => {
        this.dialogref.close();
        Swal.fire(
          "L'insertion a été effectuée avec succès!",
          'Cliquer içi!',
          'success'
        );
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  changeSuit(e: any) {
    this.categorieid = e.target.value;
    this.loadScategories();
  }
  loadCategories() {
    return (
      this.catserv.getcategories().subscribe((data) => {
        this.categoriesID = data;
      }),
      (err: any) => console.log(err)
    );
  }
  loadScategories = () => {
    return (
      this.scatserv
        .GetScategorieByCat(this.categorieid)
        .subscribe((data: Scategorie[]) => {
          this.scategoriesID = data;
        }),
      (err: any) => console.log(err)
    );
  };
  onFileChanged(event: any) {
    this.nouvarticle.imageartpetitf = 'images/' + event.target.files[0].name;
  }
}
