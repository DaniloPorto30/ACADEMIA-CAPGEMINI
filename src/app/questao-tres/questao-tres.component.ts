import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questao-tres',
  templateUrl: './questao-tres.component.html',
  styleUrls: ['./questao-tres.component.scss']
})
export class QuestaoTresComponent implements OnInit {

  msg: string = "Informação sobre o Anagrama:";
  palavra: string = "";
resultado: string ="";
    constructor() { }

  ngOnInit(): void {}

  buscarletras(){
 let resultado = this.palavra;
 console.log(resultado, resultado.split('').reverse().join('')==resultado);
 console.log(resultado.split(''));
}
}
