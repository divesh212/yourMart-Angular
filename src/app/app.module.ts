import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { BsDropdownModule  } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { AddImageComponent } from './add-image/add-image.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path : 'product',component:AddProductComponent},
  {path : 'product/:id/image',component:AddImageComponent},
  {path : 'register', component: RegisterComponent},
  {path : 'details/:id', component: ProductDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    AddProductComponent,
    AddImageComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
