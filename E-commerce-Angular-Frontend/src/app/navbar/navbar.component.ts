import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private router: Router,
    public storage: StorageService
  ) {}

  ngOnInit(): void {}
  handleLogout() {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Vous ne pourrez pas revenir en arrière !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, Déconnexion !',
    }).then((result) => {
      if (result.isConfirmed) {
        this.storage.clean();
        this.router.navigateByUrl('/');
        Swal.fire(
          'Déconnecté!',
          'La Déconnexion a été effectuée avec succées.',
          'success'
        );
      }
    });
  }
}
