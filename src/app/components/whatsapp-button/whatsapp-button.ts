import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  templateUrl: './whatsapp-button.html',
  styleUrl: './whatsapp-button.css',
})
export class WhatsappButton {
  protected readonly phoneNumber = '265885124342';
  protected readonly message = 'Hello ImpactHorti! I would like to inquire about your horticultural services, mushroom products, or landscape design solutions.';

  get whatsappUrl(): string {
    return `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.message)}`;
  }
}
