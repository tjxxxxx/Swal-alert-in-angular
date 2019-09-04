import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    SweetAlert2Module.forRoot(),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
