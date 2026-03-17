import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly currentYear = new Date().getFullYear();

  protected readonly quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#products' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  protected readonly products = [
    'Horticultural Crops Supply',
    'Mushroom Production and Supply',
    'Landscape Design',
    'Landscape Installation and Maintenance',
    'Farm and Project Advisory',
    'Custom Integrated Packages',
  ];
}
