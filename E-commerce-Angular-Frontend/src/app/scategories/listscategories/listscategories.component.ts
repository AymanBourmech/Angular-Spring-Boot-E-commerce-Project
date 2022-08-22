import { Component, OnInit } from '@angular/core';
import { Scategorie } from '../../models/scategorie';
import { ScategoriesService } from '../../services/scategories.service';
import { InsertscategoriesComponent } from '../insertscategories/insertscategories.component';
import { EditscategoriesComponent } from '../editscategories/editscategories.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StorageService } from 'src/app/services/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listscategories',
  templateUrl: './listscategories.component.html',
  styleUrls: ['./listscategories.component.css'],
})
export class ListscategoriesComponent implements OnInit {
  searchScat: string;
  constructor(
    private ScatService: ScategoriesService,
    public storage: StorageService,
    private dialog: MatDialog
  ) {}
  listscategories: Scategorie[];
  ngOnInit() {
    this.loadScategories();
  }
  loadScategories = () => {
    return this.ScatService.getScategories().subscribe((data) => {
      this.listscategories = data;
    });
  };
  onCreate() {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.autoFocus = true;
    dialogconfig.disableClose = true;
    dialogconfig.width = '30%';
    dialogconfig.height = '65%';

    this.dialog
      .open(InsertscategoriesComponent, dialogconfig)
      .afterClosed()
      .subscribe((res) => {
        this.loadScategories();
      });
  }
  onDetail(obj: Scategorie) {
    const dialogRef = this.dialog.open(EditscategoriesComponent, {
      width: '40%',
      data: obj,
    });
    dialogRef.afterClosed().subscribe((data) => {
      this.loadScategories();
    });
  }
  DeleteScategories = (id: Object) => {
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
        this.ScatService.DeleteScategorie(id).subscribe((res) => {
          this.loadScategories();
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
