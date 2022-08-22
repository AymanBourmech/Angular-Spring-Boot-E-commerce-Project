import { Component, OnInit, Inject } from '@angular/core';
import { Scategorie } from '../../models/scategorie';
import { ScategoriesService } from '../../services/scategories.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-editscategories',
  templateUrl: './editscategories.component.html',
  styleUrls: ['./editscategories.component.css'],
})
export class EditscategoriesComponent implements OnInit {
  Scat: Scategorie = new Scategorie();
  ScategorieForm: FormGroup;
  id: object;
  nomscategorie: string;
  imagescategorie: string;

  constructor(
    private formbuilder: FormBuilder,
    private ScatService: ScategoriesService,
    public dialogref: MatDialogRef<EditscategoriesComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.id = data.id;
    this.imagescategorie = data.imagescategorie;
    this.nomscategorie = data.nomscategorie;
  }
  cat: Scategorie = new Scategorie();
  ngOnInit() {
    this.initForms();
  }
  initForms() {
    this.ScategorieForm = this.formbuilder.group({
      id: this.id,
      imagescategorie: this.imagescategorie,
      nomscategorie: this.nomscategorie,
    });
  }
  onSubmitForm() {
    const formValue = this.ScategorieForm.value;
    const newScat = new Scategorie();
    (newScat.id = formValue['id']),
      (newScat.imagescategorie = formValue['imagescategorie']),
      (newScat.nomscategorie = formValue['nomscategorie']);
    this.ScatService.UpdateScategorie(newScat.id, newScat).subscribe((data) => {
      this.Scat = data;
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
    this.Scat.imagescategorie = 'images/' + event.target.files[0].name;
  }
}
