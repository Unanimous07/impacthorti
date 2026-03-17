import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ScrollReveal } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-team',
  imports: [NgOptimizedImage, ScrollReveal],
  templateUrl: './team.html',
  styleUrl: './team.css',
})
export class TeamSection {
  protected readonly teamMembers = [
    {
      name: 'Nickson Chingoni',
      role: 'Founder and Managing Director',
      image: 'assets/images/team/Nickson Chingoni.jpg',
      alt: 'Portrait of Nickson Chingoni, Founder and Managing Director at ImpactHorti',
      focus: '50% 14%',
      zoom: 1.42,
    },
    {
      name: 'Overton Singini',
      role: 'Operations and Production Manager',
      image: 'assets/images/team/Overton Singing.jpg',
      alt: 'Portrait of Overton Singini, Operations and Production Manager at ImpactHorti',
      focus: '50% 12%',
      zoom: 1.46,
    },
    {
      name: 'Linly Alepher Yetala',
      role: 'Business Development and Marketing Coordinator',
      image: 'assets/images/team/Linly Alepher Yetala.jpg',
      alt: 'Portrait of Linly Alepher Yetala, Business Development and Marketing Coordinator at ImpactHorti',
      focus: '50% 10%',
      zoom: 1.5,
    },
    {
      name: 'Kelvin Mulera',
      role: 'AgriTech Specialist',
      image: 'assets/images/team/Kelvin Mulera.JPG',
      alt: 'Portrait of Kelvin Mulera, AgriTech Specialist at ImpactHorti',
      focus: '50% 14%',
      zoom: 1.45,
    },
  ];
}
