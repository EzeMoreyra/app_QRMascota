import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  userData = {
    firstName: '',
    lastName: '',
    email: ''
  };

  constructor(private storage: Storage, private navCtrl: NavController) {}

  async ngOnInit() {
    // Suponiendo que tienes los datos del usuario almacenados en el storage
    this.userData.firstName = await this.storage.get('firstName');
    this.userData.lastName = await this.storage.get('lastName');
    this.userData.email = await this.storage.get('email');
  }

  volverATabs() {
    this.navCtrl.navigateForward('/tabs');
  }
}
