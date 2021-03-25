import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lotofacil',
  templateUrl: './lotofacil.component.html',
  styleUrls: ['./lotofacil.component.css']
})
export class LotofacilComponent implements OnInit {

  numeros: number[] = []
  constructor() { }

  ngOnInit(): void {
  }

  gerarNumeros() {

    let n = 1;
    const lista = [];
    const val = () => Math.floor(Math.random() * 25 + 1);

    do {
      while (n <= 15) {
        let numero = val();

        if (this.numeros.indexOf(numero) === -1) {
          this.numeros.push(numero)
        } else { n -= 1 };
        n += 1
      };
    } while (this.numeros.length < 15);
    this.numeros.sort((a, b) => a - b);
  }
}
