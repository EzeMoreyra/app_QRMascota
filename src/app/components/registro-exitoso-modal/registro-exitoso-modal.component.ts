import { Component, Input } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro-exitoso-modal',
  templateUrl: './registro-exitoso-modal.component.html',
  styleUrls: ['./registro-exitoso-modal.component.scss'],
})
export class RegistroExitosoModalComponent {

  @Input()
  nombre!: string;  

  constructor(private modalController: ModalController, private navCtrl: NavController ) {}


  close() {
    this.modalController.dismiss({
      role: 'confirm'
    });
    this.navCtrl.navigateRoot('/login'); 
  }
}
