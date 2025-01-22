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
      discount: '10%'  // Ajout du champ pourcentage de réduction
    },
    { 
      title: 'iPhones en Vente', 
      text: 'Les meilleures offres pour des iPhones.', 
      image: 'assets/newip.jpeg',
      discount: '15%'  // Ajout du champ pourcentage de réduction
    },
    { 
      title: 'Deals Exclusifs', 
      text: 'Des deals qui dépassent vos attentes.', 
      image: 'assets/phone16.jpeg',
      discount: '20%'  // Ajout du champ pourcentage de réduction
    },
  ];
  
  
  
}
