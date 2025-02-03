import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private images: string[] = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.gif',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
  ];

  private selectedImageSubject = new BehaviorSubject<string | null>(null);
  selectedImage$ = this.selectedImageSubject.asObservable();

  getAllImages(): string[] {
    return this.images;
  }

  getRandomImage(): string {
    const randomIndex = Math.floor(Math.random() * this.images.length);
    return this.images[randomIndex];
  }

  selectImage(image: string) {
    this.selectedImageSubject.next(image);
  }

  clearSelectedImage() {
    this.selectedImageSubject.next(null);
  }
}
