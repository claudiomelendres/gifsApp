import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GifsService} from "../services/gifs.service";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef;
  // non-null not null
  // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;

    if (valor.trim().length === 0) return;

    // console.log(valor);
    this.gifsService.buscarGifs(valor)
    this.txtBuscar.nativeElement.value = '';
  }

}
