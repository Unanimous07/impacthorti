import { Component, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ScrollReveal } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, ScrollReveal],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private http = inject(HttpClient);

  protected readonly formData = signal({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  protected readonly isSubmitted = signal(false);
  protected readonly isSubmitting = signal(false);
  protected readonly submitError = signal('');

  onSubmit() {
    this.isSubmitting.set(true);
    this.submitError.set('');

    const data = this.formData();

    // Replace YOUR_FORM_ID with your Formspree form ID from https://formspree.io
    this.http.post('https://formspree.io/f/YOUR_FORM_ID', {
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
    }).subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.isSubmitted.set(true);
        setTimeout(() => {
          this.isSubmitted.set(false);
          this.formData.set({ name: '', email: '', phone: '', subject: '', message: '' });
        }, 5000);
      },
      error: () => {
        this.isSubmitting.set(false);
        this.submitError.set('Something went wrong. Please try again or contact us via WhatsApp.');
      },
    });
  }
}
