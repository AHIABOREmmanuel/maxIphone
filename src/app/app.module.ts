import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { PayComponent } from './body/pay/pay.component';
// import { FedaPayCheckoutModule } from 'fedapay-angular';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BodyComponent,
    FooterComponent,
    PayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FedaPayCheckoutModule.forRoot({ public_key: 'pk_sandbox_XXXXXX' })
    
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
