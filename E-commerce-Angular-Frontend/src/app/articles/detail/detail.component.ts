import { Component, OnInit, Inject } from '@angular/core';
import { Article } from 'src/app/models/article';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  imageartpetitf: string;

  imgForm: FormGroup;
  nouvarticle: Article = new Article();

  constructor(
    private formbuilder: FormBuilder,
    public dialogref: MatDialogRef<DetailComponent>,

    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.imageartpetitf = data.imageartpetitf;
  }

  ngOnInit() {
    this.initFormsImg();
  }

  initFormsImg() {
    this.imgForm = this.formbuilder.group({
      imageartpetitf: (this.imageartpetitf, [Validators.required]),
    });
  }
}
