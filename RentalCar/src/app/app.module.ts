import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { AppRoutingModule } from './app-routing.module';
import { ColourComponent } from './components/colour/colour.component';
import { CustomerComponent } from './components/customer/customer.component';
import { BrandComponent } from './components/brand/brand.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ColourComponent,
    CustomerComponent,
    BrandComponent



  ],
  imports: [
    BrowserModule, // Tarayıcı modülü
    AppRoutingModule,
    HttpClientModule
],
  providers: [],
  bootstrap: [AppComponent] // Başlangıç bileşeni
})
export class AppModule {}
