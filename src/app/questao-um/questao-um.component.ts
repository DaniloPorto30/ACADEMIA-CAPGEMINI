import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questao-um',
  templateUrl: './questao-um.component.html',
  styleUrls: ['./questao-um.component.scss']
})
export class QuestaoUmComponent implements OnInit {

 i: any; j: any; n: any;
 valorAgora : any;
 valorAsterisco: any;
  resultAsterisco: any;

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

  this.resultAsterisco = this.arvore(this.n);
  console.log(this.resultAsterisco);
  }

  arvore(n:number):string {
  let result: any = [];
    let saida = "";
    for (let i = 1; i<= n; i++){
        let l = n - i;
        for(let j = 1; j <= n; j++){
            if( l > 0){
                saida += " "
                l--;
            }else{
                saida += "*"
            }
        }
        result.push(saida);
        saida += '\n';
    }
    return saida ;
}
}
