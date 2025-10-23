import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { Animal } from '../../models/animal';




@Component({
  selector: 'app-card',
  imports: [CommonModule, MatCardModule, MatChipsModule, MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
 @Input({ required: true }) animal!: Animal;
  showDetails = false;
  isTouchDevice = false;


  placeholder = 'https://www.my-personaltrainer.it/2023/10/10/gatto-e-cane_900x760.jpeg';

  // placeholder = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  //   `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400">
  //     <rect width="100%" height="100%" fill="#e5e7eb"/>
  //     <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
  //       fill="#9ca3af" font-family="Arial" font-size="20">No image</text>
  //   </svg>`
  // );


  constructor() {
    this.isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;
  }

  // Hover handlers (solo desktop)
  onMouseEnter() {
    if (!this.isTouchDevice) this.showDetails = true;
  }

  onMouseLeave() {
    if (!this.isTouchDevice) this.showDetails = false;
  }

  // Toggle su click o tap
  onToggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
