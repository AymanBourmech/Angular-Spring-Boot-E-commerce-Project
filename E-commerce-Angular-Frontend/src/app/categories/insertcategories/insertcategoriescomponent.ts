import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../../services/categorie.service';
import { Categorie } from '../../models/categorie';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertcategories',
  templateUrl: './insertcategories.component.html',
  styleUrls: ['./insertcategories.component.css'],
})
export class InsertcategoriesComponent implements OnInit {
  cat: Categorie = new Categorie();
  categorieForm: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private CatService: CategorieService,
    public dialogref: MatDialogRef<InsertcategoriesComponent>
  ) {}

  ngOnInit() {
    this.initForms();
  }
  initForms() {
    this.categorieForm = this.formbuilder.group({
      nomcategorie: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      imagecategorie: new FormControl('', [Validators.required]),
    });
  }
  get nomcategorie() {
    return this.categorieForm.get('nomcategorie');
  }

  get imagecategorie() {
    return this.categorieForm.get('imagecategorie');
  }
  onSubmitForm() {
    let categ: Categorie = this.categorieForm?.value;
    this.CatService.AddCategorie(categ).subscribe({
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
  onFileChanged(event: any) {
    console.log(event.target.files[0].name);
    this.cat.imagecategorie = 'categories/' + event.target.files[0].name;
  }
}
