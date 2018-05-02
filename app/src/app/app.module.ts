import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JsonpModule, Response } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { HotelComponent } from './hotel/hotel.component';
import { StarComponent } from './star/star.component';
import { InterceptorService } from './services/interceptor.services';
import { HotelesService } from './services/hoteles.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    HotelComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    HttpClientModule
  ],
  providers: [
    InterceptorService,
    HotelesService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
