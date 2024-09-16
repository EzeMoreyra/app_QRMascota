import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  perfilForm: FormGroup;
  loggedInUser: any;
  fotoPerfil: string | null = null;

  constructor(
    private storage: Storage,
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private authService: AuthenticateService
  ) {
    //  formulario con validaciones
    this.perfilForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  async ngOnInit() {
    // Obteniene los datos del usuario logueado desde authService
    this.loggedInUser = this.authService.getLoggedInUser();

    // Si hay un usuario logueado, cargar los datos en el formulario
    if (this.loggedInUser) {
      this.perfilForm.patchValue({
        firstName: this.loggedInUser.firstName,
        lastName: this.loggedInUser.lastName,
        email: this.loggedInUser.email
      });
    }

    // Carga la foto de perfil del almacenamiento
    this.fotoPerfil = await this.storage.get('fotoPerfil');
  }

  // Guarda el perfil del usuario
  async guardarPerfil() {
    const { firstName, lastName, email } = this.perfilForm.value;


    // Guardar la foto de perfil en el almacenamiento local
    if (this.fotoPerfil) {
      await this.storage.set('fotoPerfil', this.fotoPerfil);
    }

    console.log('Datos guardados exitosamente.');
  }

  // Método para cargar una nueva imagen de perfil
  async cargarImagen() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Photos
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
