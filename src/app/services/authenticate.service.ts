import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init(); // Inicializar la base de datos
  }

  async init() {
    // Crea el almacenamiento
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async loginUser(credential: any) {
    return new Promise((accept, reject) => {
      if (
        credential.email === 'perrito@perdido.com' &&
        credential.password === '12345'
      ) {
        accept('Login correcto');
      } else {
        reject('Login incorrecto');
      }
    });
  }
}
