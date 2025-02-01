import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  photos: string[] = [
    'assets/images/photo1.jpg',
    'assets/images/photo2.jpg',
    // Add more photo paths here
  ];
}
