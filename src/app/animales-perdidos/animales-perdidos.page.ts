import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-animales-perdidos',
  templateUrl: './animales-perdidos.page.html',
  styleUrls: ['./animales-perdidos.page.scss'],
})
export class AnimalesPerdidosPage implements OnInit {

  mascotaForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController) {
    this.mascotaForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      ubicacion: ['', Validators.required],
    });
  }

  ngOnInit() {}

  registrarMascota() {
    console.log('Mascota registrada:', this.mascotaForm.value);

  }

  volverATabs() {
    this.navCtrl.navigateForward('/tabs');
  }
}
