import { Component } from '@angular/core';
//import { CheckoutOptions } from 'fedapay-angular';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css'] // Correction ici
})
export class PayComponent {
//   checkoutButtonOptions: CheckoutOptions = {
//     transaction: {
//       amount: 100,
//       description: 'Airtime'
//     },
//     currency: {
//       iso: 'XOF'
//     },
//     button: {
//       class: 'btn btn-primary',
//       text: 'Payer 100 FCFA'
//     },
//     onComplete(resp) {
//       const FedaPay = window['FedaPay'];
//       if (resp.reason === FedaPay.DIALOG_DISMISSED) {
//         alert('Vous avez fermé la boîte de dialogue');
//       } else {
//         alert('Transaction terminée: ' + resp.reason);
//       }

//       console.log(resp.transaction);
//     }
//   };

//   checkoutEmbedOptions: CheckoutOptions = {
//     transaction: {
//       amount: 100,
//       description: 'Airtime'
//     },
//     currency: {
//       iso: 'XOF'
//     }
//   };
}
