import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validator, Validators, FormsModule} from '@angular/forms';
import { Valoracion } from './valoracion';
@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  formulario: FormGroup;
  validar: Valoracion=new Valoracion();
  estados: string[]=['1 estrella','2 estrellas','3 estrellas','4 estrellas','5 estrellas'];

  constructor(private form: FormBuilder){
    this.formulario = form.group ({
      nombre: new FormControl('',[Validators.required]),
      apellido1: new FormControl('',[Validators.required]),
      apellido2: new FormControl('',[Validators.required]),
      valoracion: new FormControl('',[Validators.required]),
      correo: new FormControl('',[Validators.required, Validators.email]),
    })
  }
  ngOnInit(): void {
    console.log(this.validar);
  }
 
}
