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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarFilterPipe } from './components/pipe/car.filter.pipe';
import { CarImageComponent } from './components/car-image/car-image.component';
import { BrandFilterPipe } from './components/pipe/brand.filter.pipe';
import { ColourFilterPipe } from './components/pipe/colour.filter.pipe';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VatAddedPipe } from './components/pipe/vat-added.pipe';


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
    VatAddedPipe,
    CarImageComponent,
    CarFilterComponent,
    CartSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
