import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  perfilForm: FormGroup;
  fotoPerfil: string | null = null;

  constructor(
    private storage: Storage,
    private navCtrl: NavController,
    private formBuilder: FormBuilder
  ) {
    this.perfilForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  async ngOnInit() {
    // Cargar datos del usuario desde el storage
    const firstName = await this.storage.get('firstName');
    const lastName = await this.storage.get('lastName');
    const email = await this.storage.get('email');
    this.fotoPerfil = await this.storage.get('fotoPerfil');

    // Establecer los valores iniciales en el formulario
    this.perfilForm.patchValue({
      firstName: firstName || '',
      lastName: lastName || '',
      email: email || ''
    });
  }

  async guardarPerfil() {
    const { firstName, lastName, email } = this.perfilForm.value;

    // Guardar la nueva información en el storage
    await this.storage.set('firstName', firstName);
    await this.storage.set('lastName', lastName);
    await this.storage.set('email', email);

    // Si hay una nueva foto de perfil, guardarla
    if (this.fotoPerfil) {
      await this.storage.set('fotoPerfil', this.fotoPerfil);
    }

    console.log('Datos guardados exitosamente.');
  }

  async cargarImagen() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Photos // Fuente: fotos de la galería
      });

      if (image) {
        this.fotoPerfil = `data:image/jpeg;base64,${image.base64String}`;
      }
    } catch (error) {
      console.error('Error al cargar la imagen', error);
    }
  }

  volverATabs() {
    this.navCtrl.navigateForward('/tabs');
  }
}
