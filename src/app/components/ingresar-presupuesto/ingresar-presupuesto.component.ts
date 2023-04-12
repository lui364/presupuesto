import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrls: ['./ingresar-presupuesto.component.css']
})
export class IngresarPresupuestoComponent {
cantidad: number;
cantidadIncorrecta:Boolean;

constructor(private _presupuestoService: PresupuestoService,
            private router:Router){
  this.cantidad = 0;
  this.cantidadIncorrecta = false;
}

agregar(){
  if(this.cantidad > 0){
      this.cantidadIncorrecta = false;
      this._presupuestoService.presupuesto = this.cantidad;
      this._presupuestoService.restante = this.cantidad;
      this.router.navigate(['/gasto']);
  }else{
    this.cantidadIncorrecta = true;
  }
}
}
