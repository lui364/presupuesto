import { Component } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent {
  presupuesto:number;
  restante:number;
  subscription:Subscription;
  listGastos:any[] = [];

  constructor(private _presuspuestoService: PresupuestoService){
    this.presupuesto = this._presuspuestoService.presupuesto;
    this.restante = this._presuspuestoService.restante;
    this.subscription = this._presuspuestoService.getGastos().subscribe(data =>{
      this.restante = this.restante - data.cantidad;
      this.listGastos.push(data);
    })
  }

  ngOnDestroy():void {
    this.subscription.unsubscribe();
  }

  aplicarColorRestante(){
    if (this.presupuesto /4 > this.restante) {
      return 'alert alert-danger';
    }else if (this.presupuesto /2 > this.restante) {
      return 'alert alert-warning';
    }else{
      return 'alert alert-dark';
    }
  }
}
