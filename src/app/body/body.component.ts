import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  cards = [
    {
      title: 'Réparations Rapides',
      text: 'Des réparations garanties et rapides.',
      image: 'assets/deal.jpeg',
      discount: '10%' 
    },
    {
      title: 'iPhones en Vente',
      text: 'Les meilleures offres pour des iPhones.',
      image: 'assets/deal.jpeg',
      discount: '15%'
    },
    {
      title: 'Deals Exclusifs',
      text: 'Des deals qui dépassent vos attentes.',
      image: 'assets/deal.jpeg',
      discount: '20%'
    },
  ];



}
