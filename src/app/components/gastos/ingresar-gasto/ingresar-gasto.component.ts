import { Component } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent {
    nombreGasto: string;
    cantidad: number;
    formularioIncorrecto: boolean;
    textIncorrecto: string;

    constructor(private _presupuestoService:PresupuestoService){
      this.nombreGasto = '';
      this.cantidad = 0;
      this.formularioIncorrecto = false;
      this.textIncorrecto = '';
    }

    agregarGasto(){


      if (this.cantidad > this._presupuestoService.restante) {
        this.formularioIncorrecto = true;
        this.textIncorrecto = "Cantidad ingresada es mayor al restante";
        return;
      }
      if (this.nombreGasto === '' || this.cantidad <= 0) {
        this.formularioIncorrecto = true;
        this.textIncorrecto = 'Nombre gasto o cantidad incorrecta';
      }else{

        //Crear un objecto
        const GASTO = {
          nombre:this.nombreGasto,
          cantidad:this.cantidad
        }
        //Eviar el objecto a los supcritores via subjet
          this._presupuestoService.agregarGasto(GASTO);
        //Reiniciar formulario
        this.formularioIncorrecto = false;
        this.nombreGasto = '';
        this.cantidad = 0;
      }
    }
}
