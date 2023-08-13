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
      descricao: 'Café delicioso com um sabor incrível de amora vermelha acompanhado de um toque de frutas vermelhas para melhorar o sabor'
    },
    {
      id: 3,
      titulo: 'Café Cisne Encantado',
      foto: 'https://i.ibb.co/9Zzm0s4/item6.jpg',
      preco: 15.90,
      favorito: false,
      descricao: 'Café com toque de elegância, perfeito para momentos especiais acompanhado de café aromatizado com baunilha e cacau'
    },
    {
      id: 4,
      titulo: 'Explosão de Chocoberry',
      foto: 'https://i.ibb.co/7jvq4cB/acompanhamento1.jpg',
      preco: 21.90,
      favorito: true,
      descricao: ' Café com combinação irresistível de chocolate e laranja, acompanhado de uma torre de paquecas com calda de chocolate meio amargo'
    },
    {
      id: 5,
      titulo: 'Explosão de Amor',
      foto: 'https://i.ibb.co/MCzRzGB/acompanhamento5.jpg',
      preco: 19.90,
      favorito: true,
      descricao: 'Café que aquece o coração com baunilha e frutas vermelhas , acompanhado de bolachinas de canela com aroma apaixonante'
    },
    {
      id: 6,
      titulo: 'Com amor, Croissant',
      foto: 'https://i.ibb.co/TWfgh0Q/acompahamento2.jpg',
      preco: 22.90,
      favorito: true,
      descricao: 'Café aromatizado com baunilha e caenla,acompahado de um delicioso croissant (sabor opcional) feito com carinho'
    },
    {
      id: 7,
      titulo: 'Combo 1',
      foto: 'https://i.ibb.co/86dwPgN/acompanhamento6.jpg',
      preco: 29.90,
      favorito: true,
      descricao: 'Combinação deliciosa com várias opções de café dentro de nossos Cardápios, acompanhada com uma Torta irresistível de Morango,Bolo de Fubá Cremoso e de brinde um pedaço de Torta Salgada (sabor opcional)'
    },
    {
      id: 8,
      titulo: 'Combo 2',
      foto: 'https://i.ibb.co/DbtksYB/acompanhamento3.jpg',
      preco: 23.90,
      favorito: true,
      descricao: 'Combinação perfeita de suco de Laranja acompanhada de uma xícara de Café aromatizado com Baunilha e Frutas Vermelhas, juntamente com uma Panqueca com Creme de Baunilha e Morango e um Brownie meio amargo'
    },
    {
      id: 9,
      titulo: 'Combo 3',
      foto: 'https://i.ibb.co/wBLL9bq/acompanhamento4.jpg',
      preco: 27.90,
      favorito: true,
      descricao: 'Combo incrível pra café da manhã rápido, um Café aromatido com baunilha e laranja acompanhado com uma torre de Panquecas e leva de brinde um copo de Café com Leite'
    }
  ]
}