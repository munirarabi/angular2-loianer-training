import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent {
  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'https://picsum.photos/200/300';

  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  nome: any = 'Abc';

  pessoa: any = {
    nome: 'Munir',
    idade: 19,
  };

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return this.cursoAngular;
  }

  clickButton() {
    alert('Botão clicado');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: any) {
    this.valorSalvo = valor.target.value;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }
}
