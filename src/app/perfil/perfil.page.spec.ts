import { Component, OnInit } from '@angular/core';
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

  constructor(private storage: Storage) {}

  async ngOnInit() {
    this.userData.firstName = await this.storage.get('firstName');
    this.userData.lastName = await this.storage.get('lastName');
    this.userData.email = await this.storage.get('email');
  }
}
