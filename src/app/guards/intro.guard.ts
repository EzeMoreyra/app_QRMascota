import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router) {}
  async canActivate(): Promise<boolean> {
    const mostrarIntro = await this.storage.get('mostrarIntro');
    if (mostrarIntro) {
      return true; // Permitir acceso si la intro ya se mostró
    } else {
      this.router.navigateByUrl('/intro'); // Redireccionar a la intro
      return false; // Explicitamente retornar false para claridad
    }
  }
}
