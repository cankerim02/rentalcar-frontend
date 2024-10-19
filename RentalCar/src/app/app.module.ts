import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { AppRoutingModule } from './app-routing.module';
import { ColourComponent } from './components/colour/colour.component';
import { CustomerComponent } from './components/customer/customer.component';
import { BrandComponent } from './components/brand/brand.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './components/nav/nav.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarFilterPipe } from './components/pipe/car.filter.pipe';
import { CarImageComponent } from './components/car-image/car-image.component';
import { BrandFilterPipe } from './components/pipe/brand.filter.pipe';
import { ColourFilterPipe } from './components/pipe/colour.filter.pipe';
import { CarFilterComponent } from './components/car-filter/car-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ColourComponent,
    CustomerComponent,
    BrandComponent,
    NavComponent,
    CarDetailComponent,
    CarFilterPipe,
    BrandFilterPipe,
    ColourFilterPipe,
    CarImageComponent,
    CarFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
