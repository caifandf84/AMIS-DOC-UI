import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UsuarioConsultaComponent implements AfterViewInit, OnInit {

  columns = [
		{text: 'Id', datafield: 'id'},
		{text: 'Nombre', datafield: 'name'},
    {text: 'Telefono', datafield: 'telefono'},
    {text: 'Correo', datafield: 'correo'}
  ];
 
  source = new jqx.dataAdapter({
		localData: [
		  {id: 1, name: 'Juan Perez Hernandez',telefono:5556012589,correo:'armando.cordova@ids.com.mx'},
		  {id: 2, name: 'Leslie P Rodriguez',telefono:5556012589,correo:'armando.cordova@ids.com.mx'},
		  {id: 3, name: 'Jose Armando Cordova Robles',telefono:5556012589,correo:'armando.cordova@ids.com.mx'},
		  {id: 4, name: 'Patricia Hernandez Juarez',telefono:5556012589,correo:'armando.cordova@ids.com.mx'},
		  {id: 5, name: 'Maria Estrada Rodriguez',telefono:5556012589,correo:'armando.cordova@ids.com.mx'}
		]
	 });
	 
  ngOnInit() {
  }

  ngAfterViewInit() {
	
  }
}