import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questao-tres',
  templateUrl: './questao-tres.component.html',
  styleUrls: ['./questao-tres.component.scss']
})
export class QuestaoTresComponent implements OnInit {

  msg: string = "Informação sobre o Anagrama: Exercicio incompleto! ( console ) ";
  palavra: string = "";
  resultado: string ="";
    constructor() { }

  ngOnInit(): void {}

  buscarAnagrama(){

    let p =  this.palavra;
    let pr = p.split('').reverse();
    console.log(pr);

   }
}
