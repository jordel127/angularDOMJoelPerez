import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
//Ejercicio3
// @ts-ignore
import {changeSize, countWords, imagenloca, yellowSubmarine} from "./funcions.js";

@Component({
  selector: 'app-dom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dom.component.html',
  styleUrl: './dom.component.css'
})
export class DomComponent implements OnInit{
constructor() {
}
  ngOnInit(): void {
  //Ejercicio1
    let salutacio = document.getElementById("salutacio")!;
    salutacio.innerHTML = salutacio.innerHTML.toUpperCase();
//Ejercicio2
    let url = document.getElementById("Url")!
    url.innerHTML = document.URL
//Ejercicio3
    yellowSubmarine()
    //Ejercici4
    changeSize()
    //Ejercicio6
    let palabras = document.getElementById("count")!
    palabras.innerHTML = countWords()
//Ex7
   imagenloca()
  }
}
