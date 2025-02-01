import { Component } from '@angular/core';
import { Reason } from '../../model/reason';
import { ReasonService } from '../../service/reason.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  reasons: Reason[] = [];

  constructor(private reasonsService: ReasonService, private router: Router) {
    this.reasons = this.reasonsService.getAllReasons();
  }

  isUnlocked(reason: Reason): boolean {
    return this.reasonsService.isUnlocked(reason);
  }

  openReason(reason: Reason): void {
    if (this.isUnlocked(reason)) {
      this.router.navigate(['/reason', reason.id]);
    }
  }
}
