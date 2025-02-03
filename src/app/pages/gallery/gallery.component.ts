import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GalleryService } from '../../service/gallery.service';
import { Heart } from '../../model/heart';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule, RouterModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  photos: string[];
  hearts: Heart[] = [];

  constructor(private imageService: GalleryService) {
    this.photos = this.imageService.getAllImages();
  }

  selectedPhoto: string | null = null;

  createHearts(): void {
    this.hearts = [];
    const numberOfHearts = 150;

    for (let i = 0; i < numberOfHearts; i++) {
      this.hearts.push({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDuration: `${5 + Math.random() * 3}s`,
        size: `${24 + Math.random() * 24}px`,
        delay: `${Math.random() * 2}s`,
      });
    }
  }

  openModal(photo: string): void {
    this.selectedPhoto = photo;
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    this.createHearts();
  }

  closeModal(): void {
    this.selectedPhoto = null;
    document.body.style.overflow = 'auto'; // Restore scrolling when modal is closed
  }
}
