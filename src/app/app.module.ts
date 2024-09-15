import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage-angular';
import { RegistroExitosoModalComponent } from './components/registro-exitoso-modal/registro-exitoso-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroExitosoModalComponent  // Declarar el componente del modal
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot()  // Inicializar el módulo de almacenamiento
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }  // Estrategia de reutilización de rutas
  ],
  bootstrap: [AppComponent]  // Componente principal que se arranca
})
export class AppModule {}

