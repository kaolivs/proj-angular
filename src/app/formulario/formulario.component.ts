import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})
export class FormularioComponent {
  nome: string = '';
  listas: string[] = [];

  salvar() {
    if (this.nome.trim()) {
      this.listas.push(this.nome);
      this.nome = '';
    }
  }
}