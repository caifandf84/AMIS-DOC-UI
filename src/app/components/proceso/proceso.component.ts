import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proceso',
  templateUrl: './proceso.component.html',
  styleUrls: ['./proceso.component.css']
})
export class ProcesoComponent implements OnInit {

  columns = [
		{text: 'Id', datafield: 'id'},
    {text: 'Proceso', datafield: 'proceso'},
    {text: 'Plantilla', datafield: 'plantilla'},
		{text: 'Fecha Inicio', datafield: 'fechaInicio'},
    {text: 'Fecha Fin', datafield: 'fechaFin'},
    {text: 'Estatus', datafield: 'estatus'}
  ];
 
  source = new jqx.dataAdapter({
		localData: [
		  {id: 1,proceso:'Aprobacion IDS',plantilla:'Facturación', fechaInicio: '01/06/2022',fechaFin:'01/07/2022',estatus:'Activo'},
		  {id: 2,proceso:'Aprobacion IDS2',plantilla:'Facturación', fechaInicio: '01/06/2022',fechaFin:'01/07/2022',estatus:'Activo'},
		  {id: 3,proceso:'Aprobacion IDS3',plantilla:'Facturación', fechaInicio: '01/06/2022',fechaFin:'01/07/2022',estatus:'Activo'}
		]
	 });

  constructor() { }

  ngOnInit(): void {
  }

}
