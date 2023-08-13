import { Component, OnInit } from '@angular/core';


import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})

export class DetalhesComponent implements OnInit {
  
  cafeId: string;
  cafe: any;
  constructor(private router: ActivatedRoute) { }
  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.cafeId = params.get('id') ?? '';
    });
    this.cafe = this.cafes[this.cafes.findIndex((cafe) => cafe.id === parseInt(this.cafeId))];
  }

  cafes: Array<any> = [
    {
      id: 1,
      titulo: 'Café Lírio do Vale',
      foto: 'https://i.ibb.co/fMZ83wr/item3.jpg',
      preco: 12.90,
      favorito: true,
      descricao: 'Café aromatizado com leite e um toque de baunilha, acompanhado com uma linda decoração para enfeitar'
    },
    {
      id: 2,
      titulo: 'Café Amora Vermelha',
      foto: 'https://i.ibb.co/djC4T2v/item1.jpg',
      preco: 13.90,
      favorito: false,
      descricao: 'Café delicioso com um sabor incrível de amora vermelha'
    },
    {
      id: 3,
      titulo: 'Café Cisne Encantado',
      foto: 'https://i.ibb.co/9Zzm0s4/item6.jpg',
      preco: 15.90,
      favorito: false,
      descricao: 'Café com toque de elegância, perfeito para momentos especiais'
    },
    {
      id: 4,
      titulo: 'Explosão de Chocoberry',
      foto: 'https://i.ibb.co/7jvq4cB/acompanhamento1.jpg',
      preco: 21.90,
      favorito: true,
      descricao: 'Combinação irresistível de chocolate e frutas vermelhas'
    },
    {
      id: 5,
      titulo: 'Explosão de Amor',
      foto: 'https://i.ibb.co/MCzRzGB/acompanhamento5.jpg',
      preco: 19.90,
      favorito: true,
      descricao: 'Café que aquece o coração com seu sabor e aroma apaixonantes'
    },
    {
      id: 6,
      titulo: 'Com amor, Croissant',
      foto: 'https://i.ibb.co/TWfgh0Q/acompahamento2.jpg',
      preco: 22.90,
      favorito: true,
      descricao: 'Delicioso croissant feito com amor e carinho'
    },
    {
      id: 7,
      titulo: 'Combo 1',
      foto: 'https://i.ibb.co/86dwPgN/acompanhamento6.jpg',
      preco: 29.90,
      favorito: true,
      descricao: 'Combo completo para satisfazer seu paladar'
    },
    {
      id: 8,
      titulo: 'Combo 2',
      foto: 'https://i.ibb.co/DbtksYB/acompanhamento3.jpg',
      preco: 23.90,
      favorito: true,
      descricao: 'Combinação perfeita de sabores em um combo delicioso'
    },
    {
      id: 9,
      titulo: 'Combo 3',
      foto: 'https://i.ibb.co/wBLL9bq/acompanhamento4.jpg',
      preco: 27.90,
      favorito: true,
      descricao: 'Combo incrível para uma experiência única de degustação'
    }
  ]
}