import { Component, computed, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ScrollReveal } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  imports: [ScrollReveal, NgOptimizedImage],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly showAllPhotos = signal(false);

  private readonly fieldPhotos = [
    { src: 'assets/images/general/IMG-20260310-WA0007.jpg', alt: 'Tomato crop support and maintenance in the field' },
    { src: 'assets/images/general/IMG-20260310-WA0008.jpg', alt: 'Team handling tomato crop work in a production area' },
    { src: 'assets/images/general/IMG-20260310-WA0009.jpg', alt: 'On-site tomato work progress at ImpactHorti' },
    { src: 'assets/images/general/IMG-20260310-WA0010.jpg', alt: 'Tomato farming activity captured during field operations' },
    { src: 'assets/images/general/IMG-20260310-WA0011.jpg', alt: 'Mushroom production task in progress by ImpactHorti team' },
    { src: 'assets/images/general/IMG-20260310-WA0012.jpg', alt: 'Hands-on mushroom cultivation process at the farm' },
    { src: 'assets/images/general/IMG-20260310-WA0013.jpg', alt: 'Field support activity for horticulture crop management' },
    { src: 'assets/images/general/IMG-20260310-WA0014.jpg', alt: 'Tomato work and crop management by ImpactHorti' },
    { src: 'assets/images/general/IMG-20260310-WA0015.jpg', alt: 'Operational work in a horticulture production section' },
    { src: 'assets/images/general/IMG-20260310-WA0016.jpg', alt: 'Mushroom growing environment and production workflow' },
    { src: 'assets/images/general/IMG-20260310-WA0017.jpg', alt: 'Crop monitoring and support activity in the field' },
    { src: 'assets/images/general/IMG-20260310-WA0018.jpg', alt: 'ImpactHorti field team during tomato and mushroom work' },
    { src: 'assets/images/general/IMG-20260310-WA0019.jpg', alt: 'Tomato and mushroom project work showcased on site' },
  ];

  protected readonly visibleFieldPhotos = signal(this.fieldPhotos);
  protected readonly previewPhotos = computed(() => this.visibleFieldPhotos().slice(0, 3));

  showAllGalleryPhotos() {
    this.showAllPhotos.set(true);
  }

  handleGalleryImageError(src: string) {
    this.visibleFieldPhotos.update((photos) => photos.filter((photo) => photo.src !== src));
  }
}
