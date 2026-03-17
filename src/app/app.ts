import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { TeamSection } from './components/team/team';
import { Products } from './components/products/products';
import { WhyUs } from './components/why-us/why-us';
import { Testimonials } from './components/testimonials/testimonials';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { WhatsappButton } from './components/whatsapp-button/whatsapp-button';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, TeamSection, Products, WhyUs, Testimonials, Contact, Footer, WhatsappButton],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
