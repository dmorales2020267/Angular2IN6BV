import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  bienvenida = "Bienvenidos a Kinal Informatica";
  personas = [
    {nombre: "Flavio Mijangos", edad: 18},
    {nombre: "Xavier Mijangos", edad: 18},
    {nombre: "Jose Mijangos", edad: 18},
    {nombre: "Leonel Mijangos", edad: 35}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
