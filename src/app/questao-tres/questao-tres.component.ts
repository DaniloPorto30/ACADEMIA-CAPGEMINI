import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questao-tres',
  templateUrl: './questao-tres.component.html',
  styleUrls: ['./questao-tres.component.scss']
})
export class QuestaoTresComponent implements OnInit {

  msg: string = "Informação sobre o Anagrama:";
  palavra: string = "";

    constructor() { }

  ngOnInit(): void {}

  buscarletras(){

}
}
