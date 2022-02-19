import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questao-um',
  templateUrl: './questao-um.component.html',
  styleUrls: ['./questao-um.component.scss']
})
export class QuestaoUmComponent implements OnInit {

 i: any; j: any; n: any;

  valorAsterisco: any;
  valor: string = "";
  resultado: string = "";
  msg: string = "Resultado:";
  showbtnlimpar!: boolean;
  showbtnbuscar!: boolean;
  constructor() { }

  ngOnInit(): void {
    this.showbtnbuscar = true;
  }

  fechar(){
    if((this.n <= 0) && (this.showbtnlimpar = true)){
      this.showbtnlimpar = false;
      this.showbtnbuscar = true;
    }

    this.valorAsterisco = "";
    this.resultado = "";
  }

  buscarId(){
    let asterisco= '';
    if ((this.n <= 0) && (this.showbtnbuscar = true)){
      this.showbtnlimpar = false;
    }
    if((this.n >= 0) && (this.showbtnbuscar = true)){
      this.showbtnlimpar = true;
      this.showbtnbuscar = false;
    }

    for(var i = 1; i <= this.n; i++){
      for(var j = this.n - i; j >= 1; j--) // imprimir os espaços
      asterisco += (" ");
      asterisco += ("\n");
      for(var j = 1; j <= i; j++) // imprimir os *
      asterisco += "*";

      this.valorAsterisco = asterisco;
      this.resultado = this.n;
    }
    this.n ="";
   }
  }
