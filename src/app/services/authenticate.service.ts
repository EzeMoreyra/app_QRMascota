/*
METODO CON localStorage
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

// Simula el registro del usuario
registerUser(userData: any): Promise<any> {
  return new Promise((resolve, reject) => {
    if (userData.email && userData.password) {
      resolve('Usuario registrado con éxito');
    } else {
      reject('Error en el registro');
    }
  });
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
*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  // usuarios almacenados en memoria
  private users = [
    { email: 'perrito@perdido.com', password: '12345' },
    { email: 'usuario@ejemplo.com', password: '12345' }
  ];

  constructor() {}

  // iniciar sesión
  loginUser(credential: any): Promise<any> {
    return new Promise((accept, reject) => {
      // Buscar si el usuario existe en la lista de usuarios
      const user = this.users.find(u => u.email === credential.email);


      // comprueba si la contraseña es correcta
      if (user) {
        if (user.password === credential.password) {
          accept('Login correcto');
        } else {
          reject('Contraseña incorrecta');
        }
      } else {
        reject('Cuenta no encontrada');
      }
    });
  }

  // registrar un nuevo usuario
  registerUser(userData: any): Promise<any> {
    return new Promise((resolve, reject) => {
      // Verifica si ya existe una cuenta con ese email
      const userExists = this.users.find(u => u.email === userData.email);

      if (userExists) {
        reject('Ese correo ya existe');
      } else {
        // Agrega el nuevo usuario a la lista
        this.users.push({ email: userData.email, password: userData.password });
        resolve('Usuario registrado con éxito');
      }
    });
  }
}
