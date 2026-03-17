import { Component } from '@angular/core';
import { ScrollReveal } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-products',
  imports: [ScrollReveal],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  protected readonly products = [
    {
      name: 'Horticultural Crops Supply',
      description: 'Reliable supply of quality horticultural crops for homes, markets, institutions, and agribusiness value chains.',
      features: ['Seasonal planning', 'Quality grading', 'Flexible volumes'],
      icon: 'oyster',
    },
    {
      name: 'Mushroom Production and Supply',
      description: 'Premium edible and specialty mushrooms cultivated with controlled processes for consistent quality and availability.',
      features: ['Fresh and dried options', 'Food service ready', 'Wholesale support'],
      icon: 'shiitake',
    },
    {
      name: 'Landscape Design',
      description: 'Functional and visually striking landscape concepts for residential, commercial, and institutional spaces.',
      features: ['Concept to execution', 'Planting plans', 'Site aesthetics'],
      icon: 'button',
    },
    {
      name: 'Green house Installation and Maintenance',
      description: 'Professional implementation and routine upkeep to keep outdoor spaces healthy, attractive, and durable year-round.',
      features: ['Scheduled maintenance', 'Irrigation support', 'Performance checks'],
      icon: 'lions-mane',
    },
    {
      name: 'Farm and Project Advisory',
      description: 'Practical guidance for growers and project owners on crop systems, production optimization, and sustainable practices.',
      features: ['Technical guidance', 'Risk reduction', 'Productivity focus'],
      icon: 'reishi',
    },
    {
      name: 'Custom Integrated Packages',
      description: 'Bundled solutions that combine crop supply, mushroom support, and landscape services for end-to-end delivery.',
      features: ['Single partner model', 'Cost efficiency', 'Scalable delivery'],
      icon: 'blends',
    },
  ];
}
