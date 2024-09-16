import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';
import { RegistroExitosoModalComponent } from '../components/registro-exitoso-modal/registro-exitoso-modal.component'; // El modal personalizado

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registroForm: FormGroup;

  validation_messages = {
    firstName: [
      { type: 'required', message: 'El nombre es requerido' },
    ],
    lastName: [
      { type: 'required', message: 'El apellido es requerido' },
    ],
    email: [
      { type: 'required', message: 'El correo es requerido' },
      { type: 'email', message: 'Este no es un correo válido' }
    ],
    password: [
      { type: 'required', message: 'La contraseña es requerida' },
      { type: 'minlength', message: 'La contraseña debe tener mínimo 5 caracteres' }
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private modalController: ModalController,
    private alertController: AlertController
  ) {
    this.registroForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(5)
      ]]
    });
  }

  ngOnInit() {}

  async registerUser(value: any) {
    this.authService.registerUser(value).then(async (res: any) => {
      console.log('Nuevo usuario registrado:', value);

      const modal = await this.modalController.create({
        component: RegistroExitosoModalComponent,
        componentProps: {
          nombre: value.firstName,
        },
        backdropDismiss: false
      });
      await modal.present();

      const { role } = await modal.onDidDismiss();
      if (role === 'confirm') {
        this.navCtrl.navigateForward('/login');
      }
    }).catch((err: any) => {
      console.error('Error en el registro:', err);
      this.showErrorAlert(err);  // Mostrar la alerta cuando hay un error
    });
  }

  async showErrorAlert(errorMessage: string) {
    const alert = await this.alertController.create({
      header: 'Error de registro',
      message: errorMessage,
      buttons: ['OK']
    });

    await alert.present();
  }

  goToLogin() {
    this.navCtrl.navigateRoot('/login');
  }
}
