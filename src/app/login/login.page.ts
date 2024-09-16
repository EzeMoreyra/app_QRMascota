import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validation_messages = {
    email: [
      { type: 'required', message: 'El email es requerido' },
      { type: 'email', message: 'Este no es un email válido' }
    ],
    password: [
      { type: 'required', message: 'El password es requerido' },
      { type: 'minlength', message: 'Mínimo 5 letras para el password' }
    ]
  };
  errorMessage: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private navCtrl: NavController
  ) {
    this.loginForm = this.formBuilder.group({
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

  loginUser(credentials: any) {
    this.authService.loginUser(credentials).then((res) => {
      this.errorMessage = "";
      this.navCtrl.navigateForward('/intro'); // Redirigir a home si el login es exitoso
    }).catch((err) => {
      this.errorMessage = err; // Mostrar mensaje de error si el login falla
    });
  }
}

