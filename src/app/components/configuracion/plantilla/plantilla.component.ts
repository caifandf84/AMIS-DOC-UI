import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent implements OnInit {

  columns = [
		{text: 'Id', datafield: 'id'},
    {text: 'Plantilla', datafield: 'plantilla'},
		{text: 'Area', datafield: 'area'},
    {text: 'Dias', datafield: 'dias'},
    {text: 'Orden', datafield: 'orden'}
  ];
 
  source = new jqx.dataAdapter({
		localData: [
		  {id: 1,plantilla:'Facturación', area: 'Juridico',telefono:5556012589,dias:1,orden:1},
		  {id: 2,plantilla:'Facturación', area: 'Recursos Humanos',telefono:5556012589,dias:1,orden:2},
		  {id: 3,plantilla:'Facturación', area: 'Finanzas',telefono:5556012589,dias:1,orden:3}
		]
	 });

  constructor() { }

  ngOnInit(): void {
  }

}
