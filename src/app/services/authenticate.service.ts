import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  // usuarios almacenados en memoria
  private users = [
    { email: 'perrito@perdido.com', password: '12345', firstName: 'Perrito', lastName: 'Perdido' },
    { email: 'usuario@ejemplo.com', password: '12345', firstName: 'Usuario', lastName: 'Ejemplo'}
  ];
  private loggedInUser: any = null;
  constructor() {}

  // iniciar sesión
  loginUser(credential: any): Promise<any> {
    return new Promise((accept, reject) => {
      const user = this.users.find(u => u.email === credential.email);

      // comprueba si la contraseña es correcta
      if (user) {
        if (user.password === credential.password) {
          this.loggedInUser = user;
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
      const userExists = this.users.find(u => u.email === userData.email); // Verifica si ya existe una cuenta con ese email

      if (userExists) {
        reject('Ese correo ya existe');
      } else {
        this.users.push({ email: userData.email, password: userData.password, firstName: userData.firstName, lastName: userData.lastName });
        resolve('Usuario registrado con éxito');
      }
    });
  }

  getLoggedInUser(): any {
    return this.loggedInUser;
  }
}
