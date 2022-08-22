import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertarticlesComponent } from './articles/insertarticles/insertarticles.component';
import { EditarticlesComponent } from './articles/editarticles/editarticles.component';
import { ListarticlesComponent } from './articles/listarticles/listarticles.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { InsertcategoriesComponent } from './categories/insertcategories/insertcategoriescomponent';
import { EditcategoriesComponent } from './categories/editcategories/editcategories.component';
import { ListcategoriesComponent } from './categories/listcategories/listcategories.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FooterComponent } from './footer/footer.component';
import { AuthentificationGuard } from './guard/authentification.guard';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InsertscategoriesComponent } from './scategories/insertscategories/insertscategories.component';
import { EditscategoriesComponent } from './scategories/editscategories/editscategories.component';
import { ListscategoriesComponent } from './scategories/listscategories/listscategories.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';

const routes: Routes = [
  {
    path: 'navbar',
    component: NavbarComponent,
    canActivate: [AuthentificationGuard],
    children: [
      { path: 'listcategories', component: ListcategoriesComponent },
      { path: 'editcategories/:_id', component: EditcategoriesComponent },
      { path: 'ajoutcategories', component: InsertcategoriesComponent },
      { path: 'listarticles', component: ListarticlesComponent },
      { path: 'editarticles', component: EditarticlesComponent },
      { path: 'ajoutarticles', component: InsertarticlesComponent },
      { path: 'listscategories', component: ListscategoriesComponent },
      { path: 'editscategories/:_id', component: EditscategoriesComponent },
      { path: 'ajoutscategories', component: InsertscategoriesComponent },
      { path: 'home', component: HomeComponent },
      { path: 'cart-details', component: CartDetailsComponent },
      { path: 'checkout', component: CheckoutComponent },
    ],
  },

  { path: 'register', component: RegisterComponent },
  { path: 'footer', component: FooterComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
