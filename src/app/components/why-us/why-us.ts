import { Component } from '@angular/core';
import { ScrollReveal } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-why-us',
  imports: [ScrollReveal],
  templateUrl: './why-us.html',
  styleUrl: './why-us.css',
})
export class WhyUs {
  protected readonly reasons = [
    {
      title: 'End-to-End Horticulture',
      description: 'We support the full value chain from crop planning and supply to implementation and long-term support.',
      icon: 'leaf',
    },
    {
      title: 'Sustainable Methods',
      description: 'Our practices prioritize soil health, efficient resource use, and environmentally responsible operations across all services.',
      icon: 'globe',
    },
    {
      title: 'Reliable Delivery',
      description: 'We maintain consistent schedules for crop supply, mushroom orders, and landscape project milestones.',
      icon: 'calendar',
    },
    {
      title: 'Specialized Team',
      description: 'Our team includes horticulturists, mushroom specialists, and landscape professionals with practical field experience.',
      icon: 'users',
    },
    {
      title: 'Custom Solutions',
      description: 'Every client receives tailored service bundles aligned with budget, scale, and performance objectives.',
      icon: 'settings',
    },
    {
      title: 'Quality and Accountability',
      description: 'We work with clear standards, transparent communication, and quality checks from planning to final delivery.',
      icon: 'shield',
    },
  ];
}
