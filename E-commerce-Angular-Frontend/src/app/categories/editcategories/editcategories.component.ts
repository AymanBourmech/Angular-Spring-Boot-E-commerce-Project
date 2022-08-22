import { Component, OnInit, Inject } from '@angular/core';
import { CategorieService } from '../../services/categorie.service';
import { Categorie } from '../../models/categorie';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-editcategories',
  templateUrl: './editcategories.component.html',
  styleUrls: ['./editcategories.component.css'],
})
export class EditcategoriesComponent implements OnInit {
  id: object;
  categorieForm: FormGroup;
  nomcategorie: string;
  imagecategorie: string;

  constructor(
    private formbuilder: FormBuilder,
    private CatService: CategorieService,
    public dialogref: MatDialogRef<EditcategoriesComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.id = data.id;
    this.imagecategorie = data.imagecategorie;
    this.nomcategorie = data.nomcategorie;
  }
  cat: Categorie = new Categorie();
  ngOnInit() {
    this.initForms();
  }
  initForms() {
    this.categorieForm = this.formbuilder.group({
      id: this.id,
      imagecategorie: this.imagecategorie,
      nomcategorie: this.nomcategorie,
    });
  }
  onSubmitForm() {
    const formValue = this.categorieForm.value;
    const newCat: Categorie = new Categorie();
    newCat.id = formValue['id'];
    newCat.imagecategorie = formValue['imagecategorie'];
    newCat.nomcategorie = formValue['nomcategorie'];

    this.CatService.UpdateCategorie(newCat.id, newCat).subscribe((data) => {
      this.cat = data;
    });
    this.dialogref.close();
    Swal.fire(
      'La modification a été effectuée avec succès!',
      'Cliquer içi!',
      'success'
    );
  }
  onFileChanged(event: any) {
    console.log(event.target.files[0].name);
    this.cat.imagecategorie = 'categories/' + event.target.files[0].name;
  }
}
