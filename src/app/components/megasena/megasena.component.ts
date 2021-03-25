import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-megasena',
  templateUrl: './megasena.component.html',
  styleUrls: ['./megasena.component.css']
})
export class MegasenaComponent implements OnInit {

  numeros: number[] = []

  constructor() { }

  ngOnInit(): void {
  }

  gerarNumeros() {
   
    let n = 1;
    const lista = [];
    const val = () => Math.floor(Math.random() * 60 + 1);

    do {
      while (n <= 6) {
        let numero = val();

        if (this.numeros.indexOf(numero) === -1) {
          this.numeros.push(numero)
        } else { n -= 1 };
        n += 1
      };
    } while (this.numeros.length < 6);
    this.numeros.sort((a, b) => a - b);
  }

}
