import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-questao-dois',
  templateUrl: './questao-dois.component.html',
  styleUrls: ['./questao-dois.component.scss']
})
export class QuestaoDoisComponent implements OnInit {

 intensidade: string = "  ";
  intensidadefraca: string =" Fraca. Digite mais 4 caracteres!";
  intensidadebaixa: string =" Baixa. Digite mais 2 caracteres!";
  intensidademedia: string =" Media! Adicione caracteres especiais e uma letra Maiuculas!";
  intensidadeforte: string =" Forte!";
  intensidadecaractere: string = "Adicione caracteres especiais!"
  intensidadeexcelente: string =" Excelente!";
  valor: string = "";
  nome: string = "";
  forca: string = " ";
  menor: string = "A Senha deve conter 6 digitos!";
  msg: string = "Informação sobre a senha:";
  correto: string = "A Senha foi preenchida com sucesso!";

  @ViewChild('meuParagrafo') meuParagrafo!: ElementRef;
  @ViewChild('senhaForca') senhaForca!: ElementRef;
  @ViewChild('loginname') loginname!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
login(evento: KeyboardEvent){
  this.nome = (<HTMLInputElement>evento.target).value;

  if(this.nome.length ==0){
    this.loginname.nativeElement.className = 'alert alert-primary';
   }
   else if(this.nome.length <3){
    this.loginname.nativeElement.className = 'alert alert-danger';
   }
   else if(this.nome.length >=3){
    this.loginname.nativeElement.className = 'alert alert-success';
   }
}

validar(evento: KeyboardEvent){
   this.valor = (<HTMLInputElement>evento.target).value;

   if(this.valor.length == 0){

    this.msg = "Informação sobre a senha:";
    this.forca = "";
    this.forca += 0;
    this.meuParagrafo.nativeElement.className = 'alert alert-primary';
    this.senhaForca.nativeElement.className = 'alert alert-primary';
   }
  else if(this.valor.length ==1){
    this.msg = "";
    this.forca = "";
    this.forca += 10;
    this.msg = this.menor;
    this.meuParagrafo.nativeElement.className = 'alert alert-danger';
    this.senhaForca.nativeElement.className = 'alert alert-danger';
   }
    else if(this.valor.length ==2){
    this.msg = "";
    this.forca = ""
    this.forca += 25;
    this.msg = this.intensidadefraca;
    this.meuParagrafo.nativeElement.className = 'alert alert-danger';
    this.senhaForca.nativeElement.className = 'alert alert-danger';
  }
  else if((this.valor.length ==3) && (this.valor.match(/[0-9]+/))){
    this.msg = "";
    this.forca = ""
     this.forca += 50;
     this.msg = this.intensidademedia;
     this.meuParagrafo.nativeElement.className = 'alert alert-warning';
     this.senhaForca.nativeElement.className = 'alert alert-warning';
  }
  else if(this.valor.length ==4){
    this.msg = "";
    this.forca = "";
    this.forca += 70;
    this.msg = this.intensidademedia;
    this.meuParagrafo.nativeElement.className = 'alert alert-warning';
    this.senhaForca.nativeElement.className = 'alert alert-warning';
  }
  else if ((this.valor.length ==5) && (this.valor.match(/[A-Z]+/)) && (this.valor.match(/[a-z]+/))){
  this.msg = "";
  this.forca = "";
  this.forca += 85;  [0-9]
  this.msg = this.intensidadeforte;
  this.meuParagrafo.nativeElement.className = 'alert alert-info';
  this.senhaForca.nativeElement.className = 'alert alert-info';
  }

  else if((this.valor.length == 6) && (this.valor.match(/[A-Z]+/)) && (this.valor.match(/[a-z]+/)) && (this.valor.match(/[!@#$%^&*()-+]/))&& (this.valor.match(/[0-9]+/))){
  this.msg = ""
  this.forca = ""
  this.forca += 100;
  this.msg = this.intensidadeexcelente;
  this.meuParagrafo.nativeElement.className = 'alert alert-success';
  this.senhaForca.nativeElement.className = 'alert alert-success';
}

  }
}
