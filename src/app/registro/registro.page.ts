import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registroForm: FormGroup;
  isModalOpen = false;
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
    private authService: AuthenticateService
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

  registerUser(value: any) {
    this.authService.registerUser(value).then((res: any) => {
      console.log('Nuevo usuario registrado:', value);
      this.navCtrl.navigateForward('/login');
      this.openModal(); 
    }).catch((err: any) => { 
      console.error(err);
    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
