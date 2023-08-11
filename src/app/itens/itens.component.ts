import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';


import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router } from '@angular/router';



@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.scss'],
  standalone: true,
  imports: [MatGridListModule, MatCardModule, NgFor, NgIf,MatIconModule, MatDividerModule, MatButtonModule, CommonModule ],
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
      foto: 'https://i.ibb.co/djC4T2v/item1.jpg',
      preco: 13.90,
      favorito: false
    },
    {
      id: 3,
      titulo: 'Café Cisne Encantado',
      foto: 'https://i.ibb.co/9Zzm0s4/item6.jpg',
      preco: 15.90,
      favorito: false
    },
    {
      id: "4",
      titulo: 'Explosão de Chocoberry',
      foto: 'https://i.ibb.co/7jvq4cB/acompanhamento1.jpg',
      preco: 21.90,
      favorito: true
    },
    {
      id: "5",
      titulo: 'Explosão de Amor',
      foto: 'https://i.ibb.co/MCzRzGB/acompanhamento5.jpg',
      preco: 19.90,
      favorito: true
    },
    {
      id: "6",
      titulo: 'Com amor,Croassaint',
      foto: 'https://i.ibb.co/TWfgh0Q/acompahamento2.jpg',
      preco: 22.90,
      favorito: true
    },
    {
      id: "7",
      titulo: 'Combo 1',
      foto: 'https://i.ibb.co/86dwPgN/acompanhamento6.jpg',
      preco: 25.90,
      favorito: true
    },
    {
      id: "8",
      titulo: 'Combo 2',
      foto: 'https://i.ibb.co/DbtksYB/acompanhamento3.jpg',
      preco: 25.90,
      favorito: true
    },
    {
      id: "9",
      titulo: 'Combo 3',
      foto: 'https://i.ibb.co/wBLL9bq/acompanhamento4.jpg',
      preco: 25.90,
      favorito: true
    }
  ]
}


