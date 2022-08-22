import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { InsertarticlesComponent } from '../insertarticles/insertarticles.component';
import { EditarticlesComponent } from '../editarticles/editarticles.component';
import { DetailComponent } from '../detail/detail.component';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';
import { Scategorie } from 'src/app/models/scategorie';
import { ScategoriesService } from 'src/app/services/scategories.service';
import { StorageService } from 'src/app/services/storage.service';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listarticles',
  templateUrl: './listarticles.component.html',
  styleUrls: ['./listarticles.component.css'],
})
export class ListarticlesComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  listarticles: any[];
  listart: any[];
  categories: Categorie[];
  scategories: Scategorie[];
  term: string;
  term1: string;
  searchArt: string;
  constructor(
    private artService: ArticleService,
    private catserv: CategorieService,
    private scatserv: ScategoriesService,
    private cartService: CartService,
    public storage: StorageService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadarticles();
    this.loadart();
    this.loadCategories();
    this.loadScategories();
    this.dtOptions = {
      language: {
        processing: 'Traitement en cours...',
        search:
          "Taper la référence de l'article <i class='fa fa-magnifying-glass ms-1'></i>&nbsp;:",
        lengthMenu: "Nombre d'article affiché par page :&nbsp _MENU_",
        loadingRecords: 'Chargement en cours...',
        zeroRecords: 'Aucun &eacute;l&eacute;ment &agrave; afficher',
        emptyTable: 'Aucune donnée disponible dans le tableau',
        paginate: {
          first: '<i class="fa fa-fast-backward" aria-hidden="true"></i>',
          last: '<i class="fa fa-fast-forward" aria-hidden="true"></i>',
          next: '<i class="fa fa-step-forward large" aria-hidden="true"></i>',
          previous: '<i class="fa fa-step-backward" aria-hidden="true"></i>',
        },
        aria: {
          sortAscending: ': activer pour trier la colonne par ordre croissant',
          sortDescending:
            ': activer pour trier la colonne par ordre décroissant',
        },
      },
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu: [5, 10, 15],
      processing: true,
      info: false,
    };
  }

  loadarticles = () => {
    return this.artService.getarticles().subscribe((data) => {
      this.listarticles = data;
    });
  };
  loadart = () => {
    return this.artService.getarticles().subscribe((data) => {
      this.listart = data;
    });
  };
  loadCategories() {
    return (
      this.catserv.getcategories().subscribe((data) => {
        this.categories = data;
      }),
      (err: any) => console.log(err)
    );
  }
  loadScategories() {
    return (
      this.scatserv.getScategories().subscribe((data) => {
        this.scategories = data;
      }),
      (err: any) => console.log(err)
    );
  }

  onCreate() {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.autoFocus = true;
    dialogconfig.disableClose = true;
    dialogconfig.width = '50%';
    dialogconfig.height = '85%';

    this.dialog
      .open(InsertarticlesComponent, dialogconfig)
      .afterClosed()
      .subscribe((data) => {
        window.location.reload();
      });
  }
  onDetail(obj: Article) {
    const dialogRef = this.dialog.open(EditarticlesComponent, {
      width: '45%',
      height: '70%',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((data) => {
      window.location.reload();
    });
  }

  onDetailImg(obj: Article) {
    const dialogRef = this.dialog.open(DetailComponent, {
      width: '45%',
      height: '70%',
      data: obj,
    });
  }

  DeleteArticles = (id: Object) => {
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
        this.artService.DeleteArticle(id).subscribe((res) => {
          this.loadarticles();
        });
        Swal.fire(
          'Supprimé!',
          'La suppression a été effectuée avec succées.',
          'success'
        );
      }
    });
  };
  addToCart(produit: Article) {
    const theCartItem = new CartItem(produit);
    this.cartService.addToCart(theCartItem);
  }
}
