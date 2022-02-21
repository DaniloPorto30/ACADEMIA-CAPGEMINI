import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questao-um',
  templateUrl: './questao-um.component.html',
  styleUrls: ['./questao-um.component.scss'],
})
export class QuestaoUmComponent implements OnInit {
  i: any;
  j: any;
  n: any;
  valorAsterisco: any;
  resultAsterisco: any;
  saida = '';
  valor: string = '';
  resultado: string = '';
  msg: string = 'Resultado:';
  showbtnlimpar!: boolean;
  showbtnbuscar!: boolean;
  constructor() {}

  ngOnInit(): void {
    this.showbtnbuscar = true;
  }

  fechar() {
    if (this.n > 0 && (this.showbtnlimpar = true)) {
      this.showbtnbuscar = true;
      this.showbtnlimpar = false;
      this.resultAsterisco = '';
      this.n = '';
    }
    this.resultAsterisco = this.arvore(this.n);
    console.log(this.arvore(this.n));
  }
  buscarId() {
    if (this.n > 0 && (this.showbtnbuscar = true)) {
      this.showbtnlimpar = true;
      this.showbtnbuscar = false;
    }
    this.resultAsterisco = this.arvore(this.n);
    console.log(this.arvore(this.n));
  }
  arvore(n: number): string {
    let result: any = [];

    for (let i = 1; i <= n; i++) {
      let whiteEspace = n - i;
      for (let j = 1; j <= n; j++) {
        if (whiteEspace > 0) {
          this.saida += ' ';
          whiteEspace--;
        } else {
          this.saida += '*';
        }
      }
      result.push(this.saida);
      this.saida = '';
    }
    return result;
  }
}
