import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ShopComponent } from './components/shop/shop.component';
import { SingleProductComponent } from './components/shop/single-product/single-product.component';
import { AddProductComponent } from './components/shop/add-product/add-product.component';
import { EdditProductComponent } from './components/shop/eddit-product/eddit-product.component';
import { CartComponent } from './components/shop/cart/cart.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { HeaderPageComponent } from './components/partials/header-page/header-page.component';
import { AddToCartMoalComponent } from './components/partials/modal/quick-view-modal/add-to-cart-moal/add-to-cart-moal.component';
import { DeleteProductModalComponent } from './components/partials/modal/delete-product-modal/delete-product-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ShopComponent,
    SingleProductComponent,
    AddProductComponent,
    EdditProductComponent,
    CartComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    HeaderPageComponent,
    AddToCartMoalComponent,
    DeleteProductModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
