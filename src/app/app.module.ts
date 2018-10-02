import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesService } from './clientes/clientes.service';
import { HeaderComponent} from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent
  ],
  imports: [
    BrowserModule
  ],
  //providers: [ClienteService],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
