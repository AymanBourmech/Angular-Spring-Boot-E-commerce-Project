import { Component, OnInit } from '@angular/core';
import { Scategorie } from '../../models/scategorie';
import { ScategoriesService } from '../../services/scategories.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertscategories',
  templateUrl: './insertscategories.component.html',
  styleUrls: ['./insertscategories.component.css'],
})
export class InsertscategoriesComponent implements OnInit {
  Scat: Scategorie = new Scategorie();
  ScategorieForm: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private ScatService: ScategoriesService,
    public dialogref: MatDialogRef<InsertscategoriesComponent>
  ) {}

  ngOnInit() {
    this.initForms();
  }
  initForms() {
    this.ScategorieForm = this.formbuilder.group({
      nomscategorie: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      imagescategorie: new FormControl('', [Validators.required]),
    });
  }
  get nomscategorie() {
    return this.ScategorieForm.get('nomscategorie');
  }

  get imagescategorie() {
    return this.ScategorieForm.get('imagescategorie');
  }
  onSubmitForm() {
    let scateg: Scategorie = this.ScategorieForm?.value;
    this.ScatService.AddScategorie(scateg).subscribe({
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
    this.Scat.imagescategorie = 'images/' + event.target.files[0].name;
  }
}
