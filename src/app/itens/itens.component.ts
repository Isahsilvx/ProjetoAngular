import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.scss'],
  standalone: true,
  imports: [MatGridListModule, MatCardModule, NgFor, NgIf],
})
export class ItensComponent {
  
  constructor(private router: Router) { }
  
  verDetalhes(cafeId: string) {
    this.router.navigate(['/detalhes', cafeId]);
  }
  toogleFavorito(index: number): void {
    this.cafes[index].favorito = !this.cafes[index].favorito
  }

  cafes: Array<any> = [
    {
      id: "1",
      titulo: ' Café Lírio do Vale',
      foto: 'https://i.ibb.co/fMZ83wr/item3.jpg',
      preco: 12.90,
      favorito: true
    },
    {
      id: "2",
      titulo: 'Café Amora Vermelha',
      foto: 'https://i.ibb.co/3RsX7fy/item1.jpg',
      preco: 13.90,
      favorito: false
    },
    {
      id: 3,
      titulo: 'Café Cisne Encantado',
      foto: 'https://i.ibb.co/5h1XHzY/casa-de-campo.jpg',
      preco: 15.90,
      favorito: false
    },
    {
      id: 4,
      titulo: 'Café Chocoberry',
      foto: 'https://i.ibb.co/FqSpsYt/flat.jpg',
      preco: 16.90,
      favorito: false
    },
    {
      id: "5",
      titulo: 'Explosão de Chocoberry',
      foto: 'https://i.ibb.co/2nNsFkt/sala-comercial.jpg',
      preco: 21.90,
      favorito: true
    },
    {
      id: "6",
      titulo: 'Explosão de Amor',
      foto: 'https://i.ibb.co/pPHQfW2/cobertura.jpg',
      preco: 19.90,
      favorito: true
    },
    {
      id: "7",
      titulo: 'Com amor,Croassaint',
      foto: 'https://i.ibb.co/pPHQfW2/cobertura.jpg',
      preco: 22.90,
      favorito: true
    },
    {
      id: "8",
      titulo: 'Combo 1',
      foto: 'https://i.ibb.co/pPHQfW2/cobertura.jpg',
      preco: 25.90,
      favorito: true
    },
    {
      id: "9",
      titulo: 'Combo 2',
      foto: 'https://i.ibb.co/pPHQfW2/cobertura.jpg',
      preco: 25.90,
      favorito: true
    },
    {
      id: "10",
      titulo: 'Combo 3',
      foto: 'https://i.ibb.co/pPHQfW2/cobertura.jpg',
      preco: 25.90,
      favorito: true
    },
    {
      id: "11",
      titulo: 'Combo 4',
      foto: 'https://i.ibb.co/pPHQfW2/cobertura.jpg',
      preco: 25.90,
      favorito: true
    }
  ];
}


