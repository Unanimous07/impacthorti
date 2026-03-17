import { Component } from '@angular/core';
import { ScrollReveal } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-testimonials',
  imports: [ScrollReveal],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {
  protected readonly testimonials = [
    {
      name: 'Lina P.',
      role: 'Operations Lead, FreshMart',
      quote: 'ImpactHorti has become a dependable partner for our horticultural supply needs. Their consistency, communication, and quality control have improved our weekly operations.',
      initials: 'LP',
    },
    {
      name: 'Tapiwa R.',
      role: 'Hospitality Procurement Manager',
      quote: 'From mushroom supply to tailored delivery schedules, the team understands commercial requirements and consistently delivers to standard.',
      initials: 'TR',
    },
    {
      name: 'Kelvin D.',
      role: 'Property Developer',
      quote: 'Their landscape design and installation transformed our site. The layout is practical, visually strong, and easy to maintain.',
      initials: 'KD',
    },
  ];
}
