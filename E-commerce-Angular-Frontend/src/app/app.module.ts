import { httpInterceptorProviders } from './services/interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListcategoriesComponent } from './categories/listcategories/listcategories.component';
import { EditcategoriesComponent } from './categories/editcategories/editcategories.component';
import { InsertcategoriesComponent } from './categories/insertcategories/insertcategoriescomponent';
import { ListarticlesComponent } from './articles/listarticles/listarticles.component';
import { EditarticlesComponent } from './articles/editarticles/editarticles.component';
import { InsertarticlesComponent } from './articles/insertarticles/insertarticles.component';
import { ListscategoriesComponent } from './scategories/listscategories/listscategories.component';
import { EditscategoriesComponent } from './scategories/editscategories/editscategories.component';
import { InsertscategoriesComponent } from './scategories/insertscategories/insertscategories.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListCatPipe } from './SearchFilter/list-cat.pipe';
import { ListScatPipe } from './SearchFilter/list-scat.pipe';
import { ListArtPipe } from './SearchFilter/list-art.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DetailComponent } from './articles/detail/detail.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CartStatusComponent } from './cart-status/cart-status.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    ListcategoriesComponent,
    EditcategoriesComponent,
    InsertcategoriesComponent,
    ListarticlesComponent,
    EditarticlesComponent,
    InsertarticlesComponent,
    ListscategoriesComponent,
    EditscategoriesComponent,
    InsertscategoriesComponent,
    ListCatPipe,
    ListScatPipe,
    ListArtPipe,
    DetailComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
  ],
  entryComponents: [
    InsertarticlesComponent,
    EditarticlesComponent,
    InsertcategoriesComponent,
    EditcategoriesComponent,
    InsertscategoriesComponent,
    EditscategoriesComponent,
    DetailComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    Ng2SearchPipeModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
