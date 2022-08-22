import { Component, OnInit } from '@angular/core';
import { Categorie } from '../../models/categorie';
import { CategorieService } from '../../services/categorie.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { InsertcategoriesComponent } from '../insertcategories/insertcategoriescomponent';
import { EditcategoriesComponent } from '../editcategories/editcategories.component';
import { StorageService } from 'src/app/services/storage.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listcategories',
  templateUrl: './listcategories.component.html',
  styleUrls: ['./listcategories.component.css'],
})
export class ListcategoriesComponent implements OnInit {
  searchCat: string;
  constructor(
    private CatService: CategorieService,
    public storage: StorageService,
    private dialog: MatDialog
  ) {}
  listcategories: Categorie[];
  ngOnInit() {
    this.loadCategories();
  }
  loadCategories = () => {
    return this.CatService.getcategories().subscribe((data) => {
      this.listcategories = data;
    });
  };
  onCreate() {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.autoFocus = true;
    dialogconfig.disableClose = true;
    dialogconfig.width = '30%';
    dialogconfig.height = '65%';

    this.dialog
      .open(InsertcategoriesComponent, dialogconfig)
      .afterClosed()
      .subscribe((res) => {
        this.loadCategories();
      });
  }
  onDetail(obj: Categorie) {
    const dialogRef = this.dialog.open(EditcategoriesComponent, {
      width: '40%',
      data: obj,
    });
    dialogRef.afterClosed().subscribe((data) => {
      this.loadCategories();
    });
  }
  Deletecategories = (id: Object) => {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Vous ne pourrez pas revenir en arrière !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimez-le !',
    }).then((result) => {
      if (result.isConfirmed) {
        this.CatService.DeleteCategorie(id).subscribe((res) => {
          this.loadCategories();
        });
        Swal.fire(
          'Supprimé!',
          'La suppression a été effectuée avec succées.',
          'success'
        );
      }
    });
  };
}
